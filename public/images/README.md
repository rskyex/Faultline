# Visual Assets

Place the following provided images here for full integration:

## Required Files

1. **logo-sheet.png** — Primary Faultline logo sheet (4-up grid)
   - Source: `Gemini_Generated_Image_k6eij4k6eij4k6ei.png`
   - Usage: Hero branding reference

2. **hero-terrain.png** — Blue/white topographic 3D terrain with gold data points
   - Source: `mishima_cross-domain_strategic_systems_visualization_premium_...png`
   - Usage: Hero section background, About section accent

3. **systems-dark.png** — Dark blue network/systems visualization with concentric circles
   - Source: `image-2.png`
   - Usage: Centerpiece section background texture, CTA backdrop

4. **topo-dark.png** — Dark terrain/topographic visualization with contour lines
   - Source: `image-3.png`
   - Usage: Thesis section side accent, Footer texture

## Integration Points

Once images are placed, update the following components:
- `HeroBackground.tsx` — Add hero-terrain.png as masked background
- `CenterpieceSection.tsx` — Add systems-dark.png as subtle overlay
- `ThesisSection.tsx` — Add topo-dark.png as side panel accent
- `CTASection.tsx` — Add systems-dark.png as background texture
