# Faultline

Cross-domain strategic infrastructure mapping platform that reveals interconnected vulnerabilities across four critical global systems: orbital, nuclear, lunar governance, and cyber.

Rather than analyzing these domains in isolation, Faultline identifies the dependencies, escalation pathways, and governance fractures where they intersect and create systemic risk.

## Platforms

| Platform | Description |
|----------|-------------|
| **Orbital Risk Tracker** | Space security incidents, constellation vulnerabilities, debris tracking, EM spectrum analysis |
| **Global Nuclear Infrastructure Atlas** | Facility mapping, enrichment tracking, strategic posture, governance frameworks |
| **Lunar Governance Authority Tracker** | Authority document analysis, discretion point registry, Artemis vs ILRS comparison |
| **Cyber Escalation Atlas** | Operation case studies, escalation dynamics, attack techniques, cross-domain impact |

## Tech Stack

- [Next.js](https://nextjs.org/) 15.3 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5.8
- [Tailwind CSS](https://tailwindcss.com/) 4.1

## Getting Started

### Prerequisites

- Node.js 18+
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

**Risa Koyanagi** - Cambridge Future Scholar researching lunar governance, nuclear governance, cyber governance, strategic risk, and emerging tech governance.

## License

All rights reserved.
