# Ashirvad Kumar Pandey — Portfolio

Personal portfolio for [ashirvad.work](https://ashirvad.work) / [sdeashirvad.com](https://sdeashirvad.com). Built with React 19, Vite, and Tailwind CSS v4. Showcases backend & data engineering work, AI platforms, and SDEAshirvad Labs products.

## Local development

```bash
npm install
cp .env.example .env   # add EmailJS keys
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_EMAILJS_SERVICE_ID` | Yes (contact form) | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | Yes | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | Yes | EmailJS public key |
| `VITE_ANALYTICS_DOMAIN` | No | Plausible domain |
| `VITE_ANALYTICS_ID` | No | GA4 measurement ID (`G-...`) |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

## Docker deployment

```bash
docker build -t ashirvad-portfolio .
docker run -p 8080:80 -e PORT=80 ashirvad-portfolio
```

Or use `docker-compose.yml` / `run.ps1` / `run.sh` in the repo root.

## Security notes

- Never commit `.env`, `*.key`, `*.pem`, or internal spreadsheets to `public/`.
- If an SSH private key was ever served from `public/`, rotate it on all servers immediately and redeploy without the key file.

## Project structure

```
src/
  data/          # projects.js, writing.js
  sections/      # Hero, About, Projects, Writing, Experience, etc.
  components/    # ProjectCard, AllProjectsModal, shared UI
  layout/        # Navbar, Footer
```

Featured projects appear on the homepage; Bloom, Veera, and extended detail are in the **View All Projects** modal.
