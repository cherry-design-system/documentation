import { Metadata } from "next";
import { Docs } from "@/components/Docs";

const content = `# 404 Not Found

You just hit a route that doesn't exist.`;

export const metadata: Metadata = {
  title: "Not Found",
  description:
    "Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.",
  openGraph: {
    title: "Not Found",
    description:
      "Doccupine is a free and open-source documentation platform. Write MDX, get a production-ready site with AI chat, built-in components, and an MCP server - in one command.",
  },
};

export default function Page() {
  return <Docs content={content} />;
}
