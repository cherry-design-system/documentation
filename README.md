# Cherry Design System Documentation

The documentation site for [Cherry Design System](https://github.com/cherry-design-system), built with [Doccupine](https://docs.doccupine.com).

## What is Doccupine?

Doccupine is a documentation platform that transforms MDX files into a full-featured Next.js documentation site. It includes AI-powered search (RAG), Model Context Protocol (MCP) support, and a themeable component library.

Learn more at [docs.doccupine.com](https://docs.doccupine.com).

## Project Structure

```
docs/               # MDX documentation files
nextjs-app/         # Generated Next.js site
doccupine.json      # Doccupine configuration
```

- **`docs/`** - Write documentation as MDX files with frontmatter for title, category, and ordering.
- **`nextjs-app/`** - The generated Next.js app that serves the documentation site.
- **`doccupine.json`** - Configures the watch directory (`docs/`), output directory (`nextjs-app/`), and dev server port.
