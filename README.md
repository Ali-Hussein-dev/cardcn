# Cardcn

A collection of beautiful, customizable card components built with React, shadcn/ui, and Tailwind CSS..

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: TypeScript
- **Deployment**: Cloudflare Workers
- **Linting/Formatting**: Biome

## Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/cardcn.git
cd cardcn
```

1. Install dependencies:

```bash
pnpm install
# or
npm install
# or
bun install
```

1. Start the development server:

```bash
pnpm dev
```

The app will be available at `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm serve` - Preview production build
- `pnpm test` - Run tests
- `pnpm format` - Format code with Biome
- `pnpm lint` - Lint code with Biome
- `pnpm check` - Run all Biome checks
- `pnpm build:reg` - Build shadcn registry
- `pnpm deploy` - Deploy to Cloudflare Workers

## Project Structure

```text
cardcn/
├── src/
│   ├── components/
│   │   ├── cards/          # Card components (card-1.tsx, card-2.tsx, etc.)
│   │   ├── ui/             # shadcn/ui components
│   │   ├── card-container.tsx
│   │   ├── copy-button.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   └── ...
│   ├── routes/             # TanStack Router routes
│   ├── lib/                # Utility functions
│   └── styles.css          # Global styles
├── public/
│   └── r/                  # Registry JSON files
├── wrangler.jsonc          # Cloudflare Workers config
└── components.json         # shadcn/ui config
```

## Adding New Cards

1. Create a new card component in `src/components/cards/card-X.tsx`
2. Import and add it to the cards array in `src/routes/index.tsx`
3. The card will automatically appear in the gallery

## Using Cards in Your Project

1. Browse the cards on the website
2. Click on a card to view its code
3. Copy the code using the copy button
4. Install required shadcn/ui components if needed:

```bash
pnpx shadcn@latest add card
```

## Deployment

This project is configured to deploy to Cloudflare Workers:

```bash
pnpm deploy
```

Make sure you have:

- Cloudflare account configured
- Wrangler CLI installed
- Proper authentication set up

## Sponsors

This project is sponsored by:

**[ShadcnStudio](https://shadcnstudio.com/?utm_source=cardcn&utm_medium=banner&utm_campaign=github)** - Shadcn blocks & templates

[Become a sponsor](https://github.com/sponsors/Ali-Hussein-dev)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
