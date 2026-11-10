# Studebaker Engineering — Project Context

Living project reference. Initial repository audit: 2026-11-09. Status below reflects source inspection and local build/lint, not a browser visual review.

## Confirmed: identity and positioning

- **Name:** Studebaker Engineering.
- **Primary tagline:** Your Digital Friend.
- **Supporting statement:** Creative and technical partnership for independent brands doing their own thing.
- Boutique creative and technical partner for independent brands, creative studios, and small but established businesses. Clients excel at their own work and want help with websites, ecommerce, and technical infrastructure without building an internal digital team.
- The relationship should feel personal, collaborative, design-conscious, and technically disciplined.

## Confirmed: services and business model

1. Shopify storefront design and development.
2. Portfolio and brand website design and development.
3. Website redesigns and platform migrations.
4. À la carte ongoing analytics, email integrations, infrastructure, maintenance, and technical support.

New builds, redesigns, and migrations are the primary entry points. Ongoing partnerships extend those engagements. Pricing, packaging, and engagement terms are unknown.

## Confirmed: visual direction

The existing homepage derives from a business card. Preserve expressive oversized typography, a blue/lavender palette, playful overlapping ovals around “Your Digital Friend,” editorial and unconventional composition, minimal navigation, restrained interaction, and a balance of creative personality and technical precision. Avoid generic SaaS aesthetics, conventional agency templates, excessive cards, and unnecessary animation.

Current implementation uses blue `#29709b`, soft blue/gray `#b0b0ba`, red `#ad412a`, and cream `#f5f0e4`. Typography combines Brush Script MT, Arial Narrow, PP NeueBit Bold, and PP Editorial Old regular/italic, loaded from the studio's media domain. The hero currently has a single bordered oval; the requested overlapping treatment is not fully represented. Exact future lavender values and secondary palette usage remain open.

## Proposed: sitemap and homepage narrative

Planning direction supplied by the owner; these are not final approved copy or implementation requirements.

Planned sitemap: Home, Work, Services, Studio, Contact.

1. Hero — Your Digital Friend.
2. The Pitch — You're good at your thing. We're good at ours.
3. Selected Work — A better corner of the internet.
4. Services — New builds, redesigns/migrations, and ongoing support.
5. The Partnership — More than a handoff.
6. Contact — Tell us what you're working on.

## Observed: current implementation

- npm-managed React/TypeScript SPA built with Vite; React Router for routes, Tailwind 4 utilities/CSS tokens, GSAP for animation, Biome for lint and formatting. No backend, CMS, contact integration, or deployment configuration is present in the repository.
- `src/main.tsx` → BrowserRouter → `src/App.tsx` → shared navigation, route content, shared footer. Home (`/`), Work (`/work`), Services (`/services`), Studio (`/studio`), and Contact (`/contact`) are registered. On 2026-11-10, the four new views were scaffolded, then given page-name HeroSection components and section barrels. The existing Home hero was extracted into its own section.
- Home includes a screen-reader h1, two decorative curved SVG wordmark lines via `ArcText`, mixed-font oval tagline, and service labels. A cream/red “Lorem Ipsum” section and commented prototype content follow.
- Existing hero labels are Web Development, Brand Identity, Digital Design, and Copywriting. These differ from the newly supplied core offerings; their future role is undecided.
- Desktop and mobile navigation link to the four registered heading-only views. No catch-all route exists. Internal links are plain anchors and reload the document.
- Mobile overlay animates with GSAP and locks body scrolling. It retains generic template icon, “Fourth Link” submenu, and “Button” content. Footer is empty.
- `EntranceText` is an unused GSAP SplitText/ScrollTrigger prototype with placeholder copy.
- Layout uses Tailwind containers, flex, max widths, responsive `md:`/`lg:` utilities, SVG viewBox scaling, negative margins, and viewport-height sizing. No custom breakpoints are configured.
- Local assets are `public/favicon.svg` (purple lightning-like mark) and `public/icons.svg` (social/documentation symbols, not referenced by current components). No local font files, project imagery, business-card reference, or case-study content are present. Asset provenance/brand approval is unknown.
- HTML has a title, favicon, viewport metadata, and five font preloads; no description or social-sharing metadata. No automated tests or CI configuration found.
- Onboarding checks: Node v24.19.0, npm 11.17.0; `npm run build` and `npm run lint` passed. No dependencies installed, application code changed, or visual/browser validation performed. Pre-existing edits in `src/App.css` and `src/layout/MainNavigation.tsx` were preserved.

## Confirmed: working decisions

- Pages are top-level view components in `src/pages/`; sections are separate composable components in `src/sections/<page>/`. Shared components belong in `src/components/`; site-wide shell components remain in `src/layout/`. Each page has a HeroSection exported through its section directory barrel; the Home hero has been extracted. The shared directory under sections was removed; keep shared components in `src/components/`.
- Preserve and extend the existing visual identity incrementally.
- Complete audit/documentation before homepage implementation; this onboarding does not authorize implementing the proposed homepage.
- Avoid unnecessary dependencies and broad refactors; use the existing stack and conventions.
- Source code is the reference for current behavior; proposals above describe intended exploration, not completed functionality.

## Concerns to address incrementally

- Heading-only destination views, placeholder homepage content, and empty footer prevent a complete visitor journey.
- Mobile navigation needs brand alignment and accessibility review: no explicit focus trap/restore, Escape handler, or reduced-motion behavior. Resizing an open menu to desktop can leave body scrolling locked.
- Viewport-height sections, large/stroked text, overlaps, and remote-font swaps require responsive, zoom, contrast, and loading checks. Exact palette accessibility has not been measured.
- `ArcText` measures once and after font readiness; dynamic prop changes would need remeasurement. Retain its accessible heading counterpart.
- Global heading defaults request weights beyond the provided Editorial/Brush faces; global paragraph stroke affects future body copy. Reassess locally when adding content.
- Hosting must support BrowserRouter deep-link fallback. Deployment target and font availability/licensing are not verified. There is no repository evidence of CMS/content workflow or form handling.

## Unknowns requiring owner input

- Which projects may be featured, with what imagery, credits, outcomes, and publication permissions?
- What is the preferred inquiry path: email, form, booking, or a combination? What destination and inquiry details are needed?
- Is the proposed sitemap/homepage narrative approved for the first release? Which pages must launch together?
- Should Brand Identity and Copywriting remain public offerings, and how should ongoing support be described or packaged?
- What final copy, studio biography, business-card reference, and approved logo/favicon assets are available? How closely should the original oval overlap be reproduced?
- What hosting/domain setup and content-editing workflow should the finished site use? Are there analytics, privacy, or integration requirements?

## Proposed: prioritized implementation roadmap

1. **Resolve content and launch scope.** Confirm the narrative, featured work/assets, service scope, and inquiry path; establish a reviewable content outline before coding.
2. **Build the homepage incrementally.** Preserve the hero, refine its responsive oval/typography composition, and add the pitch, selected work, services, partnership, and contact sections in reviewed increments. Validate actual fonts, small screens, zoom, and accessibility.
3. **Complete the visitor journey.** Align mobile/desktop navigation, implement approved destination pages and footer, add route fallback and contact behavior. Finish metadata, hosting/deep-link checks, and targeted accessibility/performance validation before launch.

These steps are recommendations; sequencing and scope remain subject to owner input. Add automated checks when meaningful behavior warrants them rather than introducing a test framework solely for static content.
