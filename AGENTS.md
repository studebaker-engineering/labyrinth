# Agent guide

## Project and scope

Studebaker Engineering's company website (`labyrinth`), a boutique creative and technical studio. Read `PROJECT_CONTEXT.md` for brand direction, implementation status, and unresolved decisions. Work incrementally; do not treat proposed copy or page structure as approved requirements.

## Stack and architecture

- npm with committed `package-lock.json`; Node `v24.19.0` from `.nvmrc`.
- React 19, TypeScript 6, Vite 8, React Router 8, Tailwind CSS 4, GSAP 3 with `@gsap/react`; Biome 2 for lint/format. Exact constraints are in `package.json`.
- Client-rendered SPA: `src/main.tsx` mounts StrictMode and BrowserRouter; `src/App.tsx` places navigation and footer around Routes. Registered routes: `/`, `/work`, `/services`, `/studio`, `/contact`. Work, Services, Studio, and Contact currently render only a page-name hero heading.
- Pages are top-level view components composing sections. Page-specific sections belong in `src/sections/<page>/`; shared components belong in `src/components/`. There is no shared directory under sections. Each section directory has an `index.ts` barrel. Each page composes its own `HeroSection`.
- `src/pages/`: route components; `src/layout/`: shared navigation/footer; `src/components/`: reusable `ArcText` and unused `EntranceText` prototype.
- `src/index.css`: Tailwind import and color tokens. `src/App.css`: remote font declarations, heading defaults, typography classes.
- `public/`: favicon and SVG symbol sprite; `index.html`: title, body colors, font preloads. `dist/` is generated and ignored.
- Vite and app TypeScript aliases: `@/` → `src/`, `#root/` → repository root.

## Commands

- `npm install`: documented setup; do not install or update dependencies unless needed for the authorized task.
- `npm run dev`: Vite development server.
- `npm run build`: `tsc -b && vite build`.
- `npm run preview`: preview an existing production build.
- `npm run lint`: read-only Biome lint.
- `npm run format`: Biome formatting **with writes**.
- `npm run check`: Biome lint/format/import checks **with fixes and writes**; do not use as a read-only check.
- No test script, automated test suite, or CI configuration is currently present.

## Conventions and validation

- Follow existing functional TSX components, named exports for components/pages/layout, and default App export. Use hooks for local state and refs; GSAP integration uses `useGSAP`.
- Biome specifies tabs and double JS quotes, recommended lint rules, import organization, and Tailwind CSS parsing. Public SVG files are excluded. Use Biome rather than adding another formatter.
- Styling primarily uses Tailwind utility classes, with shared typography in CSS. Responsive utilities currently use `md:` for navigation and `lg:` for hero adjustments; no custom breakpoints are configured.
- App and node TS configs enable unused-code checks but do not enable `strict`; do not assume strict null/type checking is active.
- For application changes, run build and lint, then manually check affected desktop/mobile layouts, font loading, navigation, keyboard/focus behavior, and reduced motion where relevant. Build/lint passed during onboarding; browser behavior was not verified.
- Preserve unrelated working-tree edits. At onboarding, `src/App.css` and `src/layout/MainNavigation.tsx` already contained user changes.

## Design guardrails and pitfalls

- Preserve the business-card-inspired oversized expressive typography, blue/lavender direction, oval tagline treatment, editorial composition, minimal navigation, and restrained interaction.
- Reuse existing tokens and typography before adding styles. Avoid generic SaaS layouts, excessive cards, unnecessary animation, dependencies, or large refactors.
- Existing tokens: soft-blue `#b0b0ba`, dark-blue `#29709b`, powder-red `#ad412a`, creme `#f5f0e4`. The lavender direction has no separately named token yet.
- Fonts are hosted on `media.studebaker.engineering`, not bundled. Keep CSS font URLs and HTML preloads coordinated. Preserve the deliberate NeueBit/Editorial metric alignment and Brush Script size adjustment when changing typography.
- `ArcText` is decorative (`aria-hidden`); retain an accessible text heading. It measures SVG text after fonts load, and currently measures only on mount; revisit dependencies if making its props dynamic.
- Navigation uses ordinary anchors; Work/Services/Studio/Contact routes are registered with heading-only hero sections. BrowserRouter deployment needs an HTML fallback for deep links; hosting configuration is absent.
- Mobile navigation still contains template dropdown/button/icon content. Focus management, Escape handling, breakpoint body-scroll cleanup, and reduced-motion handling need review before release.
- Fixed `8vh` header / `82vh` hero sizing, negative margins, global paragraph text stroke, and remote font swaps warrant small-screen, zoom, and contrast testing. Do not silently redesign them.
