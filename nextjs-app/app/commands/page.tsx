import { Metadata } from "next";
import { Docs } from "@/components/Docs";
import { config } from "@/utils/config";

const content = `# Commands
In this page, you can find all the commands available in Doccupine CLI.

## Run Doccupine CLI
Create a new directory for your project and navigate to it in your terminal. Run the following command to create a new Doccupine project:

\`\`\`bash
npx doccupine
\`\`\`

Once you run the command, Doccupine will ask you to select a directory to store your MDX files. Choose the directory where you want to create your documentation files.
After selecting the directory, Doccupine will ask you to enter the name of the directory for the generated website. Enter the name of the directory where you want to create your website.

This will start the development server on port 3000. Open your browser and navigate to http://localhost:3000 to view your documentation.

## Options

| Flag | Description |
|---|---|
| \`--port <port>\` | Port for the dev server (default: \`3000\`). Auto-increments if taken. |
| \`--verbose\` | Show all Next.js output including compilation details. |
| \`--reset\` | Re-prompt for watch/output directories. |

## Verbose mode

\`\`\`bash
npx doccupine --verbose
\`\`\`

<Callout type="note">
  This will show Next.js output in the terminal, providing detailed logs useful for debugging during development.
</Callout>

## Generate the website

\`\`\`bash
npx doccupine build
\`\`\`

This scaffolds the Next.js app from your MDX files without starting the development server. To produce a production build, run \`npm install && npm run build\` in the generated output directory.

## Show current configuration

\`\`\`bash
npx doccupine config --show
\`\`\`

This will show the current configuration for Doccupine.

## Reset configuration

\`\`\`bash
npx doccupine config --reset
\`\`\`

This will reset the current configuration for Doccupine.`;

export const metadata: Metadata = {
  title: `Commands ${config.name ? "- " + config.name : "- Doccupine"}`,
  description: `In this page, you can find all the commands available in Doccupine CLI.`,
  icons: `${config.icon || "https://docs.doccupine.com/favicon.ico"}`,
  openGraph: {
    title: `Commands ${config.name ? "- " + config.name : "- Doccupine"}`,
    description: `In this page, you can find all the commands available in Doccupine CLI.`,
    images: `${config.image || "https://docs.doccupine.com/preview.png"}`,
  },
};

export default function Page() {
  return <Docs content={content} />;
}
