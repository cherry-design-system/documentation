import { Metadata } from "next";
import { Docs } from "@/components/Docs";
import { config } from "@/utils/config";

const content = `# Global Configuration
Use a \`config.json\` file to define project‑wide metadata for your documentation site. These values are applied to every generated page unless a page overrides them in its own frontmatter.

## config.json
Place a \`config.json\` at your project root (the same folder where you execute \`npx doccupine\`) to define global metadata for your documentation site.

\`\`\`json
{
  "name": "Doccupine",
  "description": "Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.",
  "icon": "https://docs.doccupine.com/favicon.ico",
  "image": "https://docs.doccupine.com/preview.png"
}
\`\`\`

## Fields
All fields are optional. Doccupine uses sensible defaults when a field is not set.

- **name**: The primary name of your documentation website. Displayed in the site title and used in various UI elements.
- **description**: A concise summary of your project, used in site metadata (e.g., HTML meta description) and social previews when not overridden.
- **icon**: The favicon for your site. You can provide a full URL or a relative path to an asset in your project.
- **image**: The Open Graph image used when links to your docs are shared on social platforms. Accepts a full URL or a relative path.

## Per-page overrides
Any page can override global values by defining the matching key in its frontmatter. When present, the page's value takes precedence over \`config.json\` for that page only.

| Frontmatter field | Overrides | Effect |
|---|---|---|
| **title** | - | Page title in metadata and Open Graph |
| **description** | \`description\` | Meta description and Open Graph description |
| **name** | \`name\` | Site name shown in the title suffix (e.g. "Page - My Docs") |
| **icon** | \`icon\` | Favicon for this page |
| **image** | \`image\` | Open Graph preview image |
| **section** | - | Assigns the page to a [section](/sections) |
| **sectionOrder** | - | Controls section position in the tab bar |
| **sectionLabel** | - | Renames the default "Docs" tab (use on \`index.mdx\`) |

<Callout type="note">
  If a key is not specified in a page's frontmatter, Doccupine falls back to the corresponding value in \`config.json\`.
</Callout>

Example frontmatter in an \`.mdx\` file:

\`\`\`text
---
title: "My Feature"
description: "A focused description just for this page."
name: "My Product Docs"
icon: "/custom-favicon.ico"
image: "/custom-preview.png"
date: "2026-02-19"
category: "Guides"
---
\`\`\`

`;

export const metadata: Metadata = {
  title: `Globals ${config.name ? "- " + config.name : "- Doccupine"}`,
  description: `Configure global settings for your documentation.`,
  icons: `${config.icon || "https://docs.doccupine.com/favicon.ico"}`,
  openGraph: {
    title: `Globals ${config.name ? "- " + config.name : "- Doccupine"}`,
    description: `Configure global settings for your documentation.`,
    images: `${config.image || "https://docs.doccupine.com/preview.png"}`,
  },
};

export default function Page() {
  return <Docs content={content} />;
}
