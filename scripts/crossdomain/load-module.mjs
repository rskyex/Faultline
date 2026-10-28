// Minimal read-only module loader for the sibling platform repos.
//
// The four domain platforms keep their data in plain TS / JS ES modules. This
// loader transpiles each file in memory with the TypeScript compiler (already a
// devDependency of Faultline) and evaluates it as CommonJS, so the build script
// can read the exact exported values without adding dependencies and without
// writing anything into the sibling repos.

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const ts = require("typescript");

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx", ".mjs"];

function resolveFile(base) {
  if (fs.existsSync(base) && fs.statSync(base).isFile()) return base;
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(base + ext)) return base + ext;
  }
  for (const ext of EXTENSIONS) {
    const idx = path.join(base, "index" + ext);
    if (fs.existsSync(idx)) return idx;
  }
  return null;
}

/**
 * Create a loader bound to one repo.
 * @param {string} srcDir absolute path of the repo's src directory (target of "@/")
 */
export function createLoader(srcDir) {
  const cache = new Map();

  function load(absPath) {
    const file = resolveFile(absPath);
    if (!file) throw new Error(`Cannot resolve module ${absPath}`);
    if (cache.has(file)) return cache.get(file).exports;

    const source = fs.readFileSync(file, "utf8");
    const out = ts.transpileModule(source, {
      fileName: file,
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
        allowJs: true,
      },
    }).outputText;

    const mod = { exports: {} };
    cache.set(file, mod);

    const localRequire = (spec) => {
      if (spec.startsWith("@/")) return load(path.join(srcDir, spec.slice(2)));
      if (spec.startsWith(".")) return load(path.resolve(path.dirname(file), spec));
      // Data files should not need packages. Anything else resolves to an empty
      // stub so a stray type-only or UI import cannot break the snapshot.
      return {};
    };

    const fn = new Function("exports", "require", "module", "__filename", "__dirname", out);
    fn(mod.exports, localRequire, mod, file, path.dirname(file));
    return mod.exports;
  }

  return { load: (rel) => load(path.isAbsolute(rel) ? rel : path.join(srcDir, rel)) };
}
