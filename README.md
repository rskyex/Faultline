# Faultline

Cross-domain strategic infrastructure mapping platform that reveals interconnected vulnerabilities across four critical global systems: orbital, nuclear, lunar governance, and cyber.

Rather than analyzing these domains in isolation, Faultline identifies the dependencies, escalation pathways, and governance fractures where they intersect and create systemic risk.

**Live site:** [faultline-nqmm.vercel.app](https://faultline-nqmm.vercel.app)

## Platforms

| Platform | Focus | Live |
|----------|-------------|------|
| **Orbital Risk Tracker** | Space security incidents, constellation vulnerabilities, debris tracking, EM spectrum analysis | [Visit](https://orbitalrisktracker.vercel.app/) |
| **Global Nuclear Infrastructure Atlas** | Facility mapping, enrichment tracking, strategic posture, governance frameworks | [Visit](https://globalnuclearinfrastructureatlas.vercel.app/) |
| **Lunar Governance Authority Tracker** | Authority document analysis, discretion point registry, Artemis vs ILRS comparison | [Visit](https://lunar-mandate-atlas.vercel.app/) |
| **Cyber Escalation Atlas** | Operation case studies, escalation dynamics, attack techniques, cross-domain impact | [Visit](https://cyber-escalation-atlas.vercel.app/) |

## Tech Stack

- [Next.js](https://nextjs.org/) 15.3 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5.8
- [Tailwind CSS](https://tailwindcss.com/) 4.1

## Getting Started

### Prerequisites

- Node.js 18.18+ (required by Next.js 15)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Deployment

Deployed on [Vercel](https://vercel.com/). The production build is generated with `npm run build` and served via `npm start`. Each domain platform is deployed as its own independent Vercel app (linked from the table above).

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── layout.tsx            # Root layout with metadata & fonts
│   ├── platform/[slug]/      # Dynamic platform detail pages
│   └── not-found.tsx         # 404 page
├── components/
│   ├── Navbar.tsx            # Navigation (desktop & mobile)
│   ├── HeroSection.tsx       # Hero with domain indicators
│   ├── HeroBackground.tsx    # Animated hero background
│   ├── DomainsSection.tsx    # Platform card grid
│   ├── AboutSection.tsx      # About & domain convergence diagram
│   ├── ThesisSection.tsx     # Core thesis & escalation diagrams
│   ├── CenterpieceSection.tsx# Systems convergence visualization
│   ├── QuoteStrip.tsx        # Inline quote
│   ├── RevealsSection.tsx    # Key analytical insights
│   ├── CreatorSection.tsx    # Creator bio & sister projects
│   ├── Footer.tsx            # Footer with platform links
│   ├── SectionDivider.tsx    # Visual section separator
│   └── ScrollReveal.tsx      # Scroll-triggered animations
└── lib/
    ├── platformData.ts       # Platform definitions & content
    └── colors.ts             # Design system color tokens
```

## Author

**Risa Koyanagi** — Cambridge Future Scholar researching the intersection of lunar governance, nuclear governance, cyber governance, strategic risk, and emerging technology governance. [risakoyanagi.com](https://risakoyanagi.com)

## Related Projects

- **[Govern the Human](https://govern-the-human.vercel.app/)** — A research platform on what AI governance misses: how AI-mediated environments may reshape the human subject.
- **MYTHERA** — An interactive mythic world of cultural and philosophical interfaces exploring memory, meaning, and selfhood. *(Coming soon)*

## License

All rights reserved.
