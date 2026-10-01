# Ranjit Thakur — Digital Resume

A responsive React + Tailwind CSS digital resume for Ranjit Thakur, Chartered Accountant.

## Included profile details

The resume uses the publicly indexed details available from the LinkedIn profile supplied by the user:

- CA-ICAI
- CPA Australia (ASA)
- Assistant Manager — Finance & Accounts at Teyseer Motors W.L.L.
- Doha, Qatar
- Previous finance and accounts experience at Varun Beverages Ltd.
- Chartered Accountancy articleship at O P Bagla & Co.
- Education/credential reference: The Institute of Chartered Accountants of India

LinkedIn’s full public page redirects to an authentication wall in this environment. No private or authenticated information was accessed. Email and phone remain editable placeholders.

## Run locally

```bash
pnpm install
pnpm dev
```

The app runs on port `3000`.

## Build

```bash
pnpm exec tsc --noEmit
pnpm build
```

## Source structure

- `src/App.tsx` — page composition and interactions.
- `src/data.ts` — profile skills, credentials, timeline and strengths.
- `src/components/SiteLogo.tsx` — reusable RT identity lockup.
- `src/components/SectionIntro.tsx` — reusable editorial section heading.
- `src/index.css` — Tailwind import, design tokens, responsive styling and accessibility motion rules.
- `public/ranjit-thakur-resume.txt` — editable resume download.
- `public/manus-routes.json` — managed preview route declaration.
- `app.config.ts` — uploaded RT logo metadata.
