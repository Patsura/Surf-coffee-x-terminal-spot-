# Surf Coffee Terminal Spot

Modern interactive presentation website and project dashboard for evaluating a compact Surf Coffee terminal spot in the Blagoveshchensk — Heihe international cableway terminal.

The public-facing build is intentionally safe for Surf Coffee, investor and landlord review: it contains only editable project assumptions and text-based placeholders. No private pitch deck, landlord documentation, technical drawing, franchise correspondence, or binary asset should be committed to this repository.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui-style reusable components
- Framer Motion
- Recharts
- lucide-react
- Mobile-first responsive layout
- Vercel-compatible deployment

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
```

## Hosted review preview

A Codex Sites publishing integration is not exposed in this workspace, so a shareable Codex-hosted URL cannot be created from here. The project is prepared for Vercel Preview Deployments instead.

### Vercel deployment steps

1. Push this repository branch to GitHub/GitLab/Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework preset as **Next.js**.
4. Use the default commands:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `.next`
5. Do not add private documents as environment variables or public files.
6. Deploy the preview and share the generated Vercel Preview URL with reviewers.

The included `vercel.json` adds a `noindex, nofollow` robots header for safer review sharing, but it is not an access-control mechanism. Use Vercel team/project permissions or password protection if the URL should be restricted.

## Data editing

All editable project content is stored in [`src/data/project.ts`](src/data/project.ts). Update scenario values, document statuses, notes, and approved external storage URLs there when public-ready materials become available.

## Placeholder policy

Binary assets are intentionally excluded from Codex PRs so the pull request can be created and reviewed safely. The app uses React/CSS placeholder cards for location imagery and Data Room cards with statuses instead of links to binary files.

Excluded binary formats include `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`, `.pdf`, `.pptx`, `.zip`, and similar archive/media formats.

Real documents and approved visual assets should be added later manually in GitHub, Vercel, or another public/private storage location after the project owner confirms what can be shared. Do not commit real closed documents unless the project owner explicitly approves publication.
