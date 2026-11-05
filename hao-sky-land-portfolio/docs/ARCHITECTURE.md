# Architecture

## Rendering layers

1. **Content layer** — semantic React sections and accessible navigation.
2. **Motion layer** — GSAP ScrollTrigger for progressive reveals; Lenis for smooth scrolling.
3. **Graphics layer** — React Three Fiber particle field, isolated from content.
4. **Data layer** — profile, projects and translations in `src/data/`.

## Rules

- Sections own their own markup and styles.
- Shared UI belongs in `src/components`.
- Translation keys are centralized in `src/data/translations.ts`.
- No sensitive keys or private customer information in the repository.
- Respect `prefers-reduced-motion`; never make essential content dependent on animation.
- Keep real-estate claims and project data fact-checked before publishing.

## Planned expansion

- Add a real project case-study route.
- Add a CMS or data source only when there is a real content workflow.
- Add contact form backend only after selecting a provider and privacy requirements.
