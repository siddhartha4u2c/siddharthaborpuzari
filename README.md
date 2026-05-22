# Siddhartha Borpuzari — Portfolio

A colourful, animated, single-page portfolio site built with **React + Vite + TypeScript + Tailwind CSS + Framer Motion**.

Live sections include:

- Hero with animated avatar, floating tech-chips & live stats
- About / professional summary
- Experience timeline (Volkswagen, TCS, Premium Transmission, TATA Consulting Engineers)
- Skills & tools grouped by category (Data, Cloud, GenAI, Languages, Tools, Spoken)
- Featured projects (AskSiddhartha, SID Fitness, MedAssist AI, RAG Patient Assistant, Azure ETL)
- Education (PGDM – LBSIM Delhi, B.Tech – NIT Silchar)
- Certifications (DP-203, GenAI, PG-AIML, Adv MS-Excel)
- Profiles & achievements (LinkedIn, GitHub, LeetCode, HackerRank)
- Contact card

---

## 🚀 Quick start (local)

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

To produce an optimised production build:

```bash
npm run build
npm run preview
```

---

## 📦 Push to GitHub

1. Create a new **empty** repo on GitHub (e.g. `siddhartha-portfolio`).
2. From this folder run:

```bash
git init
git add .
git commit -m "feat: initial portfolio site"
git branch -M main
git remote add origin https://github.com/siddhartha4u2c/siddharthaborpuzari.git
git push -u origin main
```

---

## ☁️ Deploy to Vercel (one-click)

1. Go to <https://vercel.com/new> and **Import** the GitHub repo you just created.
2. Vercel auto-detects Vite — keep the defaults:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
3. Click **Deploy**. In ~30 seconds you’ll get a `https://<project>.vercel.app` URL.

(`vercel.json` in the repo already pre-configures the framework + SPA rewrite, so no extra setup is needed.)

Alternatively from CLI:

```bash
npm i -g vercel
vercel        # follow prompts
vercel --prod # promote to production
```

---

## 🎨 Customising

All content lives in a single file:

- `src/data.ts` — profile, experience, skills, projects, certifications, education.

Edit that file and the whole site updates. Visuals are controlled in:

- `tailwind.config.js` — gradients, animations, colours.
- `src/index.css` — global theme + reusable utilities (`.glass`, `.btn-primary`, etc.).

---

## 🛠 Tech stack

| Layer       | Tech                                     |
| ----------- | ---------------------------------------- |
| Build       | Vite 5 + TypeScript                       |
| UI          | React 18                                  |
| Styling     | Tailwind CSS 3                            |
| Animations  | Framer Motion 11                          |
| Icons       | react-icons (Font Awesome + Simple Icons) |
| Deployment  | Vercel                                    |

---

Made with ❤️ by **Siddhartha Borpuzari**.
