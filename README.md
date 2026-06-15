# Context Nexus

> Shared intents as single source of truth.

**Context Nexus** is a framework for AI-augmented development — a living knowledge system co-built by humans and AI agents. It structures everything a team knows, wants, requires, and does into four registers so that AI agents can reliably consume it rather than hallucinate.

This repository is the official website for the framework, available in English and French.

## The four registers

| Register | Answers | Who authors it |
|---|---|---|
| **Knowledge** | What we know | Humans & AI (by observation) |
| **Intent** | What we want | Humans only |
| **Contracts** | What we require | Humans only |
| **Operations** | What we do | Humans & AI (by observation) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
```

```bash
npm run build    # Production build → dist/
npm run preview  # Serve the built dist/ locally
```

Node LTS is required. There are no tests or linters.

## Tech stack

- **[Astro 5](https://astro.build)** — fully static, no server runtime
- **TypeScript** — all i18n and component props are typed
- **Plain CSS** — design system in `src/styles/global.css`, no Tailwind

## Project structure

```
src/
  i18n/          # All user-visible strings (en.ts, fr.ts)
  components/    # Reusable Astro components
  layouts/       # Master shell (Layout.astro)
  pages/
    index.astro          # Language-detect redirect
    [lang]/              # /en/ and /fr/ routes
      index.astro
      concepts.astro
      implementation.astro
      example.astro
      registers/
        knowledge.astro
        intent.astro
        contracts.astro
        operations.astro
  styles/
    global.css   # Full design system (~1 000 lines)
```

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the site and deploys `dist/` via rsync over SSH.

Required repository secrets:

| Secret | Description |
|---|---|
| `SSH_PRIVATE_KEY` | Private key for the deploy user |
| `SSH_KNOWN_HOSTS` | Server fingerprint |
| `SSH_USER` | SSH username |
| `SSH_HOST` | Server hostname or IP |
| `SSH_TARGET_DIR` | Remote path to deploy into |
| `SSH_PORT` | SSH port (optional, defaults to `22`) |

## Contributing

All text content lives in `src/i18n/en.ts` and `src/i18n/fr.ts` — both files must be updated together when adding or changing copy. Pages themselves contain no hardcoded strings.

---

A framework imagined at [Zenika](https://zenika.com) · Not an official product.
