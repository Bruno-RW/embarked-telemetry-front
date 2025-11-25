# Frontend - Telemetria Embarcada

## Estrutura do Projeto

```
frontend/
├── app/
│   ├── globals.css            # Estilos globais
│   ├── layout.tsx             # Layout da aplicação (Next.js app router)
│   └── page.tsx               # Página raiz
├── src/
│   ├── assets/                # Imagens, ícones, fontes
│   ├── core/
│   │   └── routes/
│   │       └── backend.ts     # Auxiliares de rotas / URLs base do backend
│   ├── features/              # Pastas de features (componentes + lógica)
│   ├── shared/                # Componentes/utilitários compartilhados
│   ├── api/
│   │   └── data/
│   │       └── getData.ts     # Auxiliares de busca de dados (axios/swr)
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
├── package.json               # scripts npm & dependências
├── next.config.ts             # Configuração do Next.js
└── README.md
```

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
