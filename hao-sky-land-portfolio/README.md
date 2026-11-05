# Hào Sky Land — Personal Brand Website

A bilingual, cinematic personal-brand portfolio for **Hào Sky Land**. The site positions Hào at the intersection of **Real Estate · Creative · Technology**.

## Stack

- React 18 + TypeScript + Vite
- Three.js via React Three Fiber (interactive particle field)
- GSAP + ScrollTrigger (scroll reveals)
- Lenis (smooth scrolling)
- Lucide React icons
- GitHub Pages deployment via GitHub Actions

## Requirements

- Node.js 20+
- npm 10+

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy to GitHub Pages

1. Create a new GitHub repository, suggested name: `hao-sky-land-portfolio`.
2. Upload/push this project to the repository's default branch (`main`).
3. Open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
4. The included workflow `.github/workflows/deploy.yml` installs dependencies, builds the site and deploys `dist/`.
5. The workflow automatically sets the Vite base path to `/<repository-name>/` for project Pages sites.

Your URL will look like:

`https://<github-username>.github.io/hao-sky-land-portfolio/`

If you rename the repository, the workflow reads the new repository name automatically.

### Custom domain

For a custom domain, configure the domain in GitHub Pages and update the Vite `base` to `/`. Add a `public/CNAME` file containing the domain. Do not add a CNAME until you own/control that domain.

## Personalization checklist

- [ ] Replace `public/images/portrait-placeholder.svg` with Hào's approved portrait.
- [ ] Update `src/data/profile.ts` with confirmed contact links and biography.
- [ ] Replace illustrative project cards with approved project imagery and verified project facts.
- [ ] Add real video URLs to the Creative Studio data.
- [ ] Review Vietnamese and English copy before public launch.
- [ ] Add a privacy notice if a contact form or analytics is connected.

## Project structure

```text
public/
  images/
  favicon.svg
src/
  app/
  components/
  data/
  graphics/
  hooks/
  sections/
  styles/
  types/
  utils/
.github/workflows/
docs/
```

## Design principles

- Editorial luxury with a restrained gold / cyan accent system.
- Bilingual content managed in one translation dictionary.
- Motion is progressive enhancement: reduced-motion users receive a calmer experience.
- 3D visuals are decorative and should never block navigation or content.
- Project details are data-driven, so new work can be added without rebuilding section markup.

## Important content note

Project names and descriptions in the initial version are examples of areas Hào has discussed. Verify all legal, planning, pricing, policy, and investment claims before publishing. No performance, sales, or investment-return claims are fabricated.
