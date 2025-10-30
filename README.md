# Portfolio (React + Vite + TypeScript + Tailwind)

This repository is a personal portfolio built with React, TypeScript, Vite and Tailwind CSS.

## What I added for you
- Project scaffolding already exists in the workspace (`app/`, `components/`, `lib/`, etc.).
- I created the missing configuration and entry files: `vite.config.ts`, `tsconfig.json`, `postcss.config.js`, `tailwind.config.js`, `index.html`, and `app/main.tsx`.
- I updated `package.json` with `dev`, `build`, and `preview` scripts.

## Prerequisites (Windows PowerShell)
Install one of the following package managers (Node + npm is most common):
- Node.js (includes `npm`) — download LTS from https://nodejs.org/
- OR Bun — https://bun.sh/ (alternative runtime/package manager)

After installing, open a new PowerShell window and verify:

```powershell
node --version
npm --version
# or for Bun
bun --version
```

If any of the above commands say "not recognized", see Troubleshooting below.

## Install dependencies
From the repository root (`d:\gihub\Portfolio`), run:

```powershell
# With npm (recommended if you installed Node.js)
npm install
# Then start dev server
npm run dev

# Or with Bun, if you installed Bun
bun install
bun run dev
```

## Available scripts (in `package.json`)
- `dev` — start Vite dev server
- `build` — typecheck and build for production (`tsc && vite build`)
- `preview` — preview the production build
- `lint` — run ESLint

## Common issues & troubleshooting
- "npm : The term 'npm' is not recognized": Node.js is not installed or it's not on your PATH. Fix:
  1. Install Node.js LTS from https://nodejs.org/ and restart the PowerShell window.
  2. If already installed but still failing, add Node's installation folder (e.g., `C:\Program Files\nodejs`) to your PATH environment variable and reopen PowerShell.

- If `bun` is not recognized and you want to use Bun, follow Bun's install instructions: https://bun.sh/

- If `vite` or other packages are missing after `npm install`, ensure the install completes without errors. If it fails, paste the terminal output and I can help debug.

## Quick file pointers
- `app/app.tsx` — main React app component (imports all sections)
- `app/main.tsx` — entry point (created)
- `index.html` — HTML entry (created)
- `vite.config.ts` — Vite config (created)
- `tsconfig.json` — TypeScript config (created)
- `tailwind.config.js` & `postcss.config.js` — Tailwind/PostCSS (created)
- `package.json` — scripts + dependencies (updated)

## Next steps I can do for you
- Walk through installing Node.js or Bun step-by-step.
- Help fix PATH issues if `node`/`npm` are installed but not recognized.
- Run `npm install` and validate the dev server (I can run commands here if your environment has Node/Bun available).

If you'd like, tell me whether you prefer Node/npm or Bun and whether you'd like step-by-step installation instructions now.