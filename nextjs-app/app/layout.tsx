import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { StyledComponentsRegistry } from "cherry-styled-components";
import { theme, themeDark } from "@/app/theme";
import { CherryThemeProvider } from "@/components/layout/CherryThemeProvider";
import { ChtProvider } from "@/components/Chat";
import { Header } from "@/components/layout/Header";
import {
  DocsWrapper,
  SectionBarProvider,
} from "@/components/layout/DocsComponents";
import {
  transformPagesToGroupedStructure,
  type PagesProps,
} from "@/utils/orderNavItems";
import { config } from "@/utils/config";
import { verifyBrandingKey } from "@/utils/branding";
import navigation from "@/navigation.json";
import { SectionBar } from "@/components/layout/SectionBar";
import { SectionNavProvider } from "@/components/SectionNavProvider";
const Chat = dynamic(() => import("@/components/Chat").then((mod) => mod.Chat));

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.name || "Doccupine",
  description:
    config.description ||
    "Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.",
  icons: config.icon || "https://docs.doccupine.com/favicon.ico",
  openGraph: {
    title: config.name || "Doccupine",
    description:
      config.description ||
      "Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.",
    images: config.image || "https://docs.doccupine.com/preview.png",
  },
};

const doccupinePages = [
  {
    slug: "accordion",
    title: "Accordion",
    description: "Interactive panels for toggling visibility of content.",
    date: "2026-02-19",
    category: "Components",
    path: "accordion.mdx",
    categoryOrder: 1,
    order: 4,
    section: "",
  },
  {
    slug: "ai-assistant",
    title: "AI Assistant",
    description:
      "Integrate AI capabilities into your Doccupine documentation using OpenAI, Anthropic, or Google Gemini.",
    date: "2026-02-19",
    category: "Configuration",
    path: "ai-assistant.mdx",
    categoryOrder: 3,
    order: 8,
    section: "",
  },
  {
    slug: "analytics",
    title: "Analytics",
    description:
      "Add PostHog analytics to your documentation site with an analytics.json file for both client-side and server-side tracking.",
    date: "2026-02-24",
    category: "Configuration",
    path: "analytics.mdx",
    categoryOrder: 3,
    order: 10,
    section: "",
  },
  {
    slug: "buttons",
    title: "Buttons",
    description:
      "A flexible action component supporting variants, sizes, icons, and links.",
    date: "2026-02-19",
    category: "Components",
    path: "buttons.mdx",
    categoryOrder: 1,
    order: 7,
    section: "",
  },
  {
    slug: "callouts",
    title: "Callouts",
    description:
      "Make your content stand out by using callouts for extra emphasis.",
    date: "2026-02-19",
    category: "Components",
    path: "callouts.mdx",
    categoryOrder: 1,
    order: 7,
    section: "",
  },
  {
    slug: "cards",
    title: "Cards",
    description:
      "Cards act as visual containers for your content, giving you flexibility to combine text, icons, images, and links in a clean and organized way.",
    date: "2026-02-19",
    category: "Components",
    path: "cards.mdx",
    categoryOrder: 1,
    order: 6,
    section: "",
  },
  {
    slug: "code",
    title: "Code",
    description:
      "Learn how to display inline code and code blocks in documentation.",
    date: "2026-02-19",
    category: "Components",
    path: "code.mdx",
    categoryOrder: 1,
    order: 3,
    section: "",
  },
  {
    slug: "columns",
    title: "Columns",
    description:
      "Columns are used to organize content in a grid-like structure.",
    date: "2026-02-19",
    category: "Components",
    path: "columns.mdx",
    categoryOrder: 1,
    order: 12,
    section: "",
  },
  {
    slug: "commands",
    title: "Commands",
    description:
      "In this page, you can find all the commands available in Doccupine CLI.",
    date: "2026-02-19",
    category: "Getting Started",
    path: "commands.mdx",
    categoryOrder: 0,
    order: 1,
    section: "",
  },
  {
    slug: "components",
    title: "Components",
    description:
      "Explore the full library of built-in components available in your documentation pages.",
    date: "2026-02-19",
    category: "Components",
    path: "components.mdx",
    categoryOrder: 1,
    order: 0,
    section: "",
  },
  {
    slug: "deployment-and-hosting",
    title: "Deployment & Hosting",
    description:
      "Deploy your documentation site with the Doccupine Platform or self-host on any platform that supports Next.js.",
    date: "2026-02-19",
    category: "Configuration",
    path: "deployment-and-hosting.mdx",
    categoryOrder: 3,
    order: 11,
    section: "",
  },
  {
    slug: "fields",
    title: "Fields",
    description: "Configure parameters for your API or SDK documentation.",
    date: "2026-02-19",
    category: "Components",
    path: "fields.mdx",
    categoryOrder: 1,
    order: 10,
    section: "",
  },
  {
    slug: "fonts",
    title: "Fonts",
    description:
      "Customize the documentation typography with a fonts.json file (Google Fonts or local custom fonts).",
    date: "2026-02-19",
    category: "Configuration",
    path: "fonts.mdx",
    categoryOrder: 3,
    order: 7,
    section: "",
  },
  {
    slug: "footer-links",
    title: "Footer Links",
    description: "Add static links at the bottom of the documentation pages.",
    date: "2026-02-19",
    category: "Configuration",
    path: "footer-links.mdx",
    categoryOrder: 3,
    order: 4,
    section: "",
  },
  {
    slug: "globals",
    title: "Globals",
    description: "Configure global settings for your documentation.",
    date: "2026-02-19",
    category: "Configuration",
    path: "globals.mdx",
    categoryOrder: 3,
    order: 1,
    section: "",
  },
  {
    slug: "headers-and-text",
    title: "Headers and Text",
    description:
      "Learn how to structure and style your content with headers, formatting, and links.",
    date: "2026-02-19",
    category: "Components",
    path: "headers-and-text.mdx",
    categoryOrder: 1,
    order: 1,
    section: "",
  },
  {
    slug: "icons",
    title: "Icons",
    description:
      "Integrate visual icons from well-known libraries to enrich your documentation.",
    date: "2026-02-19",
    category: "Components",
    path: "icons.mdx",
    categoryOrder: 1,
    order: 9,
    section: "",
  },
  {
    slug: "image-and-embeds",
    title: "Images and embeds",
    description:
      "Enrich your documentation with visuals, videos, and interactive embeds.",
    date: "2026-02-19",
    category: "Components",
    path: "image-and-embeds.mdx",
    categoryOrder: 1,
    order: 8,
    section: "",
  },
  {
    slug: "",
    title: "Introduction",
    description:
      "Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.",
    date: "2026-02-19",
    category: "Getting Started",
    path: "index.mdx",
    categoryOrder: 0,
    order: 0,
    section: "",
  },
  {
    slug: "lists-and-tables",
    title: "Lists and tables",
    description: "Present structured information using lists or tables.",
    date: "2026-02-19",
    category: "Components",
    path: "lists-and-tables.mdx",
    categoryOrder: 1,
    order: 2,
    section: "",
  },
  {
    slug: "media-and-assets",
    title: "Media and assets",
    description:
      "Serve static files like images, favicons, fonts, and Open Graph previews from the public directory.",
    date: "2026-02-19",
    category: "Configuration",
    path: "media-and-assets.mdx",
    categoryOrder: 3,
    order: 6,
    section: "",
  },
  {
    slug: "model-context-protocol",
    title: "Model Context Protocol",
    description:
      "Connect your Doccupine documentation to AI tools with an MCP server for enhanced AI-powered documentation search.",
    date: "2026-02-19",
    category: "Configuration",
    path: "model-context-protocol.mdx",
    categoryOrder: 3,
    order: 9,
    section: "",
  },
  {
    slug: "navigation",
    title: "Navigation",
    description: "Organize and structure your navigation.",
    date: "2026-02-19",
    category: "Configuration",
    path: "navigation.mdx",
    categoryOrder: 3,
    order: 2,
    section: "",
  },
  {
    slug: "platform/ai-assistant",
    title: "AI Assistant",
    description:
      "Configure the built-in AI assistant that ships with every Doccupine documentation site.",
    date: "2026-02-19",
    category: "Configuration",
    path: "platform/ai-assistant.mdx",
    categoryOrder: 2,
    order: 6,
    section: "platform",
  },
  {
    slug: "platform/analytics",
    title: "Analytics",
    description:
      "Enable PostHog analytics to track page views on your documentation site.",
    date: "2026-02-24",
    category: "Configuration",
    path: "platform/analytics.mdx",
    categoryOrder: 2,
    order: 3,
    section: "platform",
  },
  {
    slug: "platform/billing",
    title: "Billing",
    description:
      "Manage your subscription, upgrade plans, and access the billing portal.",
    date: "2026-02-19",
    category: "Account",
    path: "platform/billing.mdx",
    categoryOrder: 4,
    order: 1,
    section: "platform",
  },
  {
    slug: "platform/build-and-deploy",
    title: "Build & Deploy",
    description:
      "Monitor your documentation site's build status and deployment history.",
    date: "2026-02-19",
    category: "Infrastructure",
    path: "platform/build-and-deploy.mdx",
    categoryOrder: 3,
    order: 1,
    section: "platform",
  },
  {
    slug: "platform/creating-a-project",
    title: "Creating a Project",
    description:
      "Set up a new documentation project with a managed or user-connected GitHub repository.",
    date: "2026-02-19",
    category: "Getting Started",
    path: "platform/creating-a-project.mdx",
    categoryOrder: 0,
    order: 1,
    section: "platform",
  },
  {
    slug: "platform/custom-domains",
    title: "Custom Domains",
    description:
      "Connect your own domain to your documentation site with automatic HTTPS.",
    date: "2026-02-19",
    category: "Infrastructure",
    path: "platform/custom-domains.mdx",
    categoryOrder: 3,
    order: 0,
    section: "platform",
  },
  {
    slug: "platform/external-links",
    title: "External Links",
    description:
      "Add quick-access link buttons to your site's footer for GitHub, Discord, and other external resources.",
    date: "2026-02-19",
    category: "Configuration",
    path: "platform/external-links.mdx",
    categoryOrder: 2,
    order: 5,
    section: "platform",
  },
  {
    slug: "platform/file-editor",
    title: "File Editor",
    description:
      "Browse, create, and edit your documentation files directly in the browser.",
    date: "2026-02-19",
    category: "Editing",
    path: "platform/file-editor.mdx",
    categoryOrder: 1,
    order: 0,
    section: "platform",
  },
  {
    slug: "platform/fonts-settings",
    title: "Fonts Settings",
    description:
      "Configure custom typography with Google Fonts or local font files.",
    date: "2026-02-19",
    category: "Configuration",
    path: "platform/fonts-settings.mdx",
    categoryOrder: 2,
    order: 4,
    section: "platform",
  },
  {
    slug: "platform",
    title: "Platform Overview",
    description:
      "Learn how to use the Doccupine platform to create, customize, and deploy documentation websites.",
    date: "2026-02-19",
    category: "Getting Started",
    path: "platform/index.mdx",
    categoryOrder: 0,
    order: 0,
    section: "platform",
  },
  {
    slug: "platform/navigation-settings",
    title: "Navigation Settings",
    description:
      "Define the sidebar structure for your documentation site using the drag-and-drop Navigation Builder.",
    date: "2026-02-24",
    category: "Configuration",
    path: "platform/navigation-settings.mdx",
    categoryOrder: 2,
    order: 2,
    section: "platform",
  },
  {
    slug: "platform/project-settings",
    title: "Project Settings",
    description: "Rename or delete your documentation project.",
    date: "2026-02-19",
    category: "Account",
    path: "platform/project-settings.mdx",
    categoryOrder: 4,
    order: 2,
    section: "platform",
  },
  {
    slug: "platform/publishing",
    title: "Publishing Changes",
    description:
      "Commit your edits to GitHub and deploy your documentation site with one click.",
    date: "2026-02-19",
    category: "Editing",
    path: "platform/publishing.mdx",
    categoryOrder: 1,
    order: 1,
    section: "platform",
  },
  {
    slug: "platform/site-settings",
    title: "Site Settings",
    description:
      "Configure your documentation site's name, description, icon, and image.",
    date: "2026-02-19",
    category: "Configuration",
    path: "platform/site-settings.mdx",
    categoryOrder: 2,
    order: 0,
    section: "platform",
  },
  {
    slug: "platform/team-members",
    title: "Team Members",
    description:
      "Invite collaborators and manage roles for your documentation project.",
    date: "2026-02-19",
    category: "Account",
    path: "platform/team-members.mdx",
    categoryOrder: 4,
    order: 0,
    section: "platform",
  },
  {
    slug: "platform/theme-settings",
    title: "Theme Settings",
    description:
      "Customize your documentation site's color palette, logos, and dark mode appearance.",
    date: "2026-02-19",
    category: "Configuration",
    path: "platform/theme-settings.mdx",
    categoryOrder: 2,
    order: 1,
    section: "platform",
  },
  {
    slug: "sections",
    title: "Sections",
    description:
      "Split your documentation into top-level sections with independent sidebars.",
    date: "2026-02-19",
    category: "Configuration",
    path: "sections.mdx",
    categoryOrder: 3,
    order: 3,
    section: "",
  },
  {
    slug: "steps",
    title: "Steps",
    description: "Guide readers step-by-step using the Steps component.",
    date: "2026-02-19",
    category: "Components",
    path: "steps.mdx",
    categoryOrder: 1,
    order: 13,
    section: "",
  },
  {
    slug: "tabs",
    title: "Tabs",
    description:
      "Use the Tabs component to display different content sections in a switchable panel layout.",
    date: "2026-02-19",
    category: "Components",
    path: "tabs.mdx",
    categoryOrder: 1,
    order: 5,
    section: "",
  },
  {
    slug: "theme",
    title: "Theme",
    description:
      "Customize the documentation UI colors with a theme.json file.",
    date: "2026-02-19",
    category: "Configuration",
    path: "theme.mdx",
    categoryOrder: 3,
    order: 5,
    section: "",
  },
  {
    slug: "update",
    title: "Update",
    description: "Easily manage and present change history.",
    date: "2026-02-19",
    category: "Components",
    path: "update.mdx",
    categoryOrder: 1,
    order: 11,
    section: "",
  },
];
const doccupineSections = [
  {
    label: "Docs",
    slug: "",
  },
  {
    label: "Platform",
    slug: "platform",
  },
];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const hideBranding = verifyBrandingKey();

  const pages: PagesProps[] = doccupinePages;

  return (
    <html lang="en">
      <head>
        {/* Prevents dark-mode FOUC on Safari/Firefox. These browsers don't support
            Sec-CH-Prefers-Color-Scheme (handled by middleware for Chrome), so on
            a first visit this blocking script detects prefers-color-scheme, sets
            the theme cookie, and hides the body until router.refresh() re-renders
            with the correct theme (see ClientThemeProvider). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var c=document.cookie.split(";").find(function(s){return s.trim().startsWith("theme=")});if(!c){var d=window.matchMedia&&window.matchMedia("(prefers-color-scheme:dark)").matches;document.cookie="theme="+(d?"dark":"light")+";path=/;max-age=31536000;SameSite=Lax";if(d){var s=document.createElement("style");s.id="__theme-init";s.textContent="html{background:#000!important;color-scheme:dark}body{visibility:hidden}";document.head.appendChild(s)}}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={font.className}>
        <StyledComponentsRegistry>
          <CherryThemeProvider theme={theme} themeDark={themeDark}>
            <ChtProvider isChatActive={process.env.LLM_PROVIDER ? true : false}>
              <Header>
                <SectionBar sections={doccupineSections} />
              </Header>
              {process.env.LLM_PROVIDER && <Chat />}
              <DocsWrapper>
                <SectionNavProvider
                  sections={doccupineSections}
                  allPages={pages}
                  hideBranding={hideBranding}
                >
                  {children}
                </SectionNavProvider>
              </DocsWrapper>
            </ChtProvider>
          </CherryThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
