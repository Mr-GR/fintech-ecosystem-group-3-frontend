# EquiBank

Crisis-proof global payments for disaster relief.

## Overview

EquiBank is a unified, programmable financial network that connects central banks, governments, and aid organizations to deliver instant, transparent relief payments during disasters.

## Features

- **Instant Relief**: Automated verification and programmable disbursements send money in seconds, not weeks
- **Coordinated Liquidity**: Central banks, banks, and aid agencies coordinate liquidity injections in real time
- **Radical Transparency**: A shared ledger and dashboards show exactly where funds go and how they're used
- **Crisis-Ready Infrastructure**: Digital wallets that work even when local banking infrastructure is offline

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
equibank/
├── app/
│   ├── about/              # About & Whitepaper page
│   ├── financial-impact/   # Financial Impact page
│   ├── how-it-works/       # How EquiBank Works page
│   ├── globals.css         # Global styles & Tailwind directives
│   ├── layout.tsx          # Root layout with navigation
│   └── page.tsx            # Home/Landing page
├── components/             # Reusable components (if needed)
├── public/                 # Static assets
└── ...config files
```

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Inline SVG

## Pages

1. **Home** (`/`) - Landing page with problem, solution, timeline, benefits, and stakeholders
2. **How EquiBank Works** (`/how-it-works`) - Detailed workflow and technical implementation
3. **Financial Impact** (`/financial-impact`) - Economic benefits and cost savings analysis
4. **About** (`/about`) - Vision, research context, whitepaper download, and contact form

## Contributing

This is a demonstration project. For production use, consider:

- Implementing a real backend for the contact form
- Adding actual whitepaper PDF download functionality
- Integrating analytics
- Adding more interactive visualizations
- Implementing accessibility improvements

## License

All rights reserved.
