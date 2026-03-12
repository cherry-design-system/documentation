import { Metadata } from "next";
import { Docs } from "@/components/Docs";
import { config } from "@/utils/config";

const content = `# Welcome to Doccupine

Doccupine turns a folder of MDX files into a beautiful, production-ready documentation website. Write in standard Markdown, use any of the built-in components, and get a fully themed site with AI-powered search and automatic navigation - all from one command.

\`\`\`bash
npx doccupine
\`\`\`

That's it. Doccupine prompts you for a source directory, generates your site, and starts a dev server at \`http://localhost:3000\`. Every edit rebuilds instantly.

<Callout type="info">
  Want a managed experience instead? The [Doccupine Platform](/platform) gives you a browser-based editor, one-click publishing, custom domains, and team collaboration - no local setup needed.
</Callout>

## How it works

You write \`.mdx\` files using Markdown and built-in components like this one. Doccupine watches your files, generates pages, builds the sidebar from your frontmatter, and handles theming, AI chat, and deployment config for you.

Everything on this page - the callout above, the cards below, the code block - is a live example of what your docs can look like out of the box.

<Columns cols={2}>
  <Card title="Start writing" icon="pencil" href="/components">
    Rich docs from day one. 14+ components work out of the box - no imports needed.
  </Card>
  <Card title="Ship it" icon="rocket" href="/deployment-and-hosting">
    Deploy to the Doccupine Platform or self-host on any platform that supports Next.js.
  </Card>
</Columns>

## Configure your site

Doccupine works with no configuration, but when you're ready to customize, everything is controlled through simple JSON files in your project root.

- [Global settings](/globals) - Site name, description, favicon, and preview image via \`config.json\`
- [Navigation](/navigation) - Override the auto-generated sidebar with \`navigation.json\`
- [Theme](/theme) - Colors, logos, and dark mode palette via \`theme.json\`
- [Fonts](/fonts) - Google Fonts or local font files via \`fonts.json\`
- [AI Assistant](/ai-assistant) - Enable the built-in chat with your own API key
- [MCP Server](/model-context-protocol) - Let AI tools search your docs through \`/api/mcp\`
`;

export const metadata: Metadata = {
  title: `${config.name ? config.name + " -" : "Doccupine -"} Introduction`,
  description: `Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.`,
  icons: `${config.icon || "https://docs.doccupine.com/favicon.ico"}`,
  openGraph: {
    title: `${config.name ? config.name + " -" : "Doccupine -"} Introduction`,
    description: `Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.`,
    images: `${config.image || "https://docs.doccupine.com/preview.png"}`,
  },
};

export default function Home() {
  return <Docs content={content} />;
}
