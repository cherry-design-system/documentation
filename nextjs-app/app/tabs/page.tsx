import { Metadata } from "next";
import { Docs } from "@/components/Docs";
import { config } from "@/utils/config";

const content = `# Tabs
Use the Tabs component to display different content sections in a switchable panel layout.

Tabs are useful for grouping related information while keeping the interface tidy. You can create as many tabs as needed, and each one can hold other components, text, or code snippets.

## Tabs Usage
You can use the Tabs component directly within your MDX files without any import. The following example shows a basic usage:

~~~mdx
<Tabs>
  <TabContent title="First tab">
    ☝️ This is the content shown only when the first tab is active.

    Tabs can include all kinds of components. For example, a simple Java program:
    \`\`\`java
      class HelloWorld {
          public static void main(String[] args) {
              System.out.println("Hello, World!");
          }
      }
    \`\`\`
  </TabContent>
  <TabContent title="Second tab">
    ✌️ Content inside this second tab is separate from the first.
  </TabContent>
  <TabContent title="Third tab">
    💪 This third tab contains its own unique content.
  </TabContent>
</Tabs>
~~~

<Tabs>
  <TabContent title="First tab">
    ☝️ This is the content shown only when the first tab is active.

    Tabs can include all kinds of components. For example, a simple Java program:
    \`\`\`java
    class HelloWorld {
        public static void main(String[] args) {
            System.out.println("Hello, World!");
        }
    }
    \`\`\`
  </TabContent>
  <TabContent title="Second tab">
    ✌️ Content inside this second tab is separate from the first.
  </TabContent>
  <TabContent title="Third tab">
    💪 This third tab contains its own unique content.
  </TabContent>
</Tabs>

## Properties

<Field value="title" type="string">
  The title of the tab.
</Field>

<Field value="children" type="node" required>
  The content of the tabs.
</Field>`;

export const metadata: Metadata = {
  title: `Tabs ${config.name ? "- " + config.name : "- Doccupine"}`,
  description: `Use the Tabs component to display different content sections in a switchable panel layout.`,
  icons: `${config.icon || "https://docs.doccupine.com/favicon.ico"}`,
  openGraph: {
    title: `Tabs ${config.name ? "- " + config.name : "- Doccupine"}`,
    description: `Use the Tabs component to display different content sections in a switchable panel layout.`,
    images: `${config.image || "https://docs.doccupine.com/preview.png"}`,
  },
};

export default function Page() {
  return <Docs content={content} />;
}
