# Frontend - Telemetria Embarcada

## Estrutura do Projeto

```
frontend/
├── app/
│   ├── globals.css                # Estilos globais
│   ├── layout.tsx                 # Layout da aplicação (Next.js app router)
│   └── (default)/
│       ├── page.tsx               # Página do painel
│       └── components/
│           ├── MapWrapper.tsx     # Carregador dinâmico do mapa (SSR-safe)
│           ├── StatCard.tsx       # Componente de card de estatísticas
│           └── TelemetryMap.tsx   # Mapa Leaflet com marcadores
├── src/
│   ├── assets/                    # Imagens, ícones, fontes
│   ├── core/
│   │   └── routes/
│   │       └── backend.ts         # Auxiliares de rotas / URLs base do backend
│   └── shared/
│       ├── api/
│       │   └── data/
│       │       └── getData.ts     # Auxiliares de busca de dados (axios/swr)
│       ├── components/
│       │   └── ui/                # Componentes shadcn/ui (Card, etc.)
│       ├── context/
│       │   └── data/
│       │       └── DataContext.tsx
│       ├── hooks/
│       │   └── data/
│       │       └── useData.tsx    # Hook personalizado para dados de telemetria
│       ├── lib/
│       │   ├── utils.ts           # Funções utilitárias (cn, etc.)
│       │   └── fonts/
│       │       └── inter.ts       # Configuração de fontes
│       ├── providers/
│       │   ├── ContextProvider.tsx
│       │   └── data/
│       │       └── DataProvider.tsx # Provider de dados SWR (atualiza a cada 2 min)
│       └── types/
│           └── data/
│               ├── address.ts     # Definição do tipo Address
│               ├── location.ts    # Definição do tipo Location
│               └── telemetry.ts   # Definição do tipo Telemetry
├── components.json                # Configuração do shadcn/ui
├── package.json                   # Scripts npm & dependências
├── next.config.ts                 # Configuração do Next.js
└── README.md
```

## Funcionalidades

- **Painel de Telemetria**: Visão geral em tempo real dos dados de telemetria embarcada
- **Mapa Interativo**: Mapa baseado em Leaflet mostrando todas as localizações de telemetria com marcadores
- **Cards de Estatísticas**: Exibe total de registros, cidades únicas, ruas únicas e média de satélites
- **Localizações Recentes**: Barra lateral mostrando as 10 entradas de telemetria mais recentes (ordenadas por data)
- **Atualização Automática**: Os dados são atualizados automaticamente a cada 2 minutos

## Stack Tecnológica

- **Next.js 16** - Framework React com App Router
- **React 19** - Biblioteca de UI
- **TypeScript** - Segurança de tipos
- **Tailwind CSS 4** - Estilização
- **shadcn/ui** - Componentes de UI
- **Leaflet / React-Leaflet** - Mapas interativos
- **SWR** - Busca de dados com cache e revalidação
- **Axios** - Cliente HTTP
- **Lucide React** - Ícones

## Começando

- **Pré-requisitos**: Node.js (versão 16+ recomendada) e npm instalados.
- **Instalar dependências**:

```powershell
npm install
```

- **Executar em desenvolvimento** (hot-reload):

```powershell
npm run dev
```

- **Compilar para produção**:

```powershell
npm run build
```

- **Iniciar servidor de produção** (após compilação):

```powershell
npm run start
```

- **Lint**:

```powershell
npm run lint
```

Por padrão, o servidor de desenvolvimento é executado em `http://localhost:3000`.

**Scripts npm disponíveis** (do `package.json`):

- `dev` — inicia o servidor de desenvolvimento do Next.js (`next dev`)
- `build` — compila a aplicação para produção (`next build`)
- `start` — inicia o servidor de produção (`next start`)
- `lint` — executa `eslint`
