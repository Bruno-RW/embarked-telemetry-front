# Frontend - Embedded Telemetry

## Project Structure

```
frontend/
├── app/
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Application layout (Next.js app router)
│   └── (default)/
│       ├── page.tsx               # Dashboard page
│       └── components/
│           ├── MapWrapper.tsx     # Dynamic map loader (SSR-safe)
│           ├── StatCard.tsx       # Statistics card component
│           └── TelemetryMap.tsx   # Leaflet map with markers
├── src/
│   ├── assets/                    # Images, icons, fonts
│   ├── core/
│   │   └── routes/
│   │       └── backend.ts         # Route helpers / backend base URLs
│   └── shared/
│       ├── api/
│       │   └── data/
│       │       └── getData.ts     # Data fetching helpers (axios/swr)
│       ├── components/
│       │   └── ui/                # shadcn/ui components (Card, etc.)
│       ├── context/
│       │   └── data/
│       │       └── DataContext.tsx
│       ├── hooks/
│       │   └── data/
│       │       └── useData.tsx    # Custom hook for telemetry data
│       ├── lib/
│       │   ├── utils.ts           # Utility functions (cn, etc.)
│       │   └── fonts/
│       │       └── inter.ts       # Font configuration
│       ├── providers/
│       │   ├── ContextProvider.tsx
│       │   └── data/
│       │       └── DataProvider.tsx # SWR data provider (auto-refresh every 2 min)
│       └── types/
│           └── data/
│               ├── address.ts     # Address type definition
│               ├── location.ts    # Location type definition
│               └── telemetry.ts   # Telemetry type definition
├── components.json                # shadcn/ui configuration
├── package.json                   # npm scripts & dependencies
├── next.config.ts                 # Next.js configuration
└── README.md
```

## Features

- **Telemetry Dashboard**: Real-time overview of embedded telemetry data
- **Interactive Map**: Leaflet-based map showing all telemetry locations with markers
- **Statistics Cards**: Display total records, unique cities, unique roads, and average satellites
- **Recent Locations**: Sidebar showing the 10 most recent telemetry entries (sorted by date)
- **Auto-refresh**: Data automatically updates every 2 minutes

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - UI components
- **Leaflet / React-Leaflet** - Interactive maps
- **SWR** - Data fetching with caching and revalidation
- **Axios** - HTTP client
- **Lucide React** - Icons

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
