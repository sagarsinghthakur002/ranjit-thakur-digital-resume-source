# Ranjit Thakur — Digital Resume Plan

## Product scope
A single-page, responsive personal digital resume for Ranjit Thakur, Chartered Accountant. The site presents his verified public professional identity, finance and accounts experience, credentials, skills, education, working style, resume download, LinkedIn profile and contact options. It does not represent a company owned by him or a separate client practice.

## Verified public details used
- Headline/credentials: CA Ranjit Thakur · CPA Australia (ASA) · CA-ICAI.
- Current role: Assistant Manager — Finance & Accounts at Teyseer Motors W.L.L.; publicly indexed LinkedIn snippets show September 2022 — Present and Doha, Qatar.
- Earlier experience: Finance & Accounts at Varun Beverages Ltd.
- Articleship: O P Bagla & Co.
- Education: The Institute of Chartered Accountants of India.
- Source: user-provided LinkedIn profile URL. LinkedIn’s public page itself redirects to an auth wall, so only details exposed in public search snippets were used; no private or authenticated information was accessed.

## Design direction
Use the approved editorial corporate-minimal style: deep navy for credibility, slate for readable supporting text, off-white for a calm canvas, and burnished bronze for small accents and calls to action. The page reads like a polished digital CV: a strong professional identity first, then skills, credentials, role timeline, working style, LinkedIn and contact details.

## Implementation approach
- Keep the lightweight Vite + React + TypeScript app with Tailwind CSS and Lucide React icons.
- Keep resume content data-driven in `src/data.ts`; reusable brand and section-intro components live in `src/components/`.
- Use local state for mobile navigation, selected skill detail, working-style rotation, and the contact form acknowledgement.
- Maintain the single `/` route manifest and downloadable editable resume asset.

## Content assumptions
Email and phone are still placeholders because they are not publicly visible in the accessible LinkedIn snippets. They should be replaced with the user’s preferred contact details before publication.
