# Frontend - Embedded Telemetry

## Project Structure

```
frontend/
├── app/
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Application layout (Next.js app router)
│   └── page.tsx               # Root page
├── src/
│   ├── assets/                # Images, icons, fonts
│   ├── core/
│   │   └── routes/
│   │       └── backend.ts     # Route helpers / backend base URLs
│   ├── features/              # Feature folders (components + logic)
│   ├── shared/                # Shared components/utilities
│   ├── api/
│   │   └── data/
│   │       └── getData.ts     # Data fetching helpers (axios/swr)
│   ├── context/
│   │   └── data/
│   │       └── DataContext.tsx
│   ├── hook/
│   │   └── data/
│   │       └── useData.tsx
│   ├── provider/
│   │   ├── ContextProvider.tsx
│   │   └── data/
│   │       └── DataProvider.tsx
│   ├── types/
│   │   └── data/
│   │       ├── address.ts
│   │       ├── location.ts
│   │       └── telemetry.ts
│   └── util/
│       └── utils.ts
├── package.json               # npm scripts & dependencies
├── next.config.ts             # Next.js configuration
└── README.md
```

## Getting Started

- **Prerequisites**: Node.js (version 16+ recommended) and npm installed.
- **Install dependencies**:

```powershell
npm install
```

- **Run in development** (hot-reload):

```powershell
npm run dev
```

- **Build for production**:

```powershell
npm run build
```

- **Start production server** (after build):

```powershell
npm run start
```

- **Lint**:

```powershell
npm run lint
```

By default, the development server runs at `http://localhost:3000`.

**Available npm scripts** (from `package.json`):

- `dev` — starts the Next.js development server (`next dev`)
- `build` — builds the application for production (`next build`)
- `start` — starts the production server (`next start`)
- `lint` — runs `eslint`
