# ClipScope — TikTok research project landing page

A React + Vite + Tailwind CSS starter with:
- Landing page
- `/privacy` Privacy Policy
- `/terms` Terms of Service
- Responsive layout and React Router

## 1. Before deploying

Search the project for `CONTACT_EMAIL`, `[LEGAL NAME / BUSINESS NAME]`, `[BUSINESS ADDRESS OR COUNTRY]`, `[JURISDICTION]`, and `[VENUE]`.

Replace these with real, accurate information. Update the privacy policy so it matches the data your deployed application actually collects and processes. The included legal text is a starting draft, not legal advice.

The website currently describes ClipScope as an early-stage project. It does not claim that live TikTok search, creator analytics, or TikTok API integration is already working.

## 2. Install and run

```bash
npm install
npm run dev
```

## 3. Build

```bash
npm run build
npm run preview
```

## 4. Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repository into Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

The included `vercel.json` configures SPA route fallback so `/privacy` and `/terms` work on direct visits.

## 5. URLs for TikTok app configuration

After deployment, use the actual deployed URLs:
- Website: `https://YOUR-DOMAIN.vercel.app`
- Privacy Policy: `https://YOUR-DOMAIN.vercel.app/privacy`
- Terms of Service: `https://YOUR-DOMAIN.vercel.app/terms`

Open each URL in an incognito/private window and confirm it loads without login.

## Important API note

A working website and valid legal pages do not guarantee TikTok API approval. The official TikTok Research API has separate eligibility requirements. The standard Display API is for authorized users' videos, not general keyword search across all public TikTok videos. Do not describe features as live or available until you have the relevant approved access.
