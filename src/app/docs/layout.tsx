import { Container, MaxWidth } from "cherry-styled-components/src/lib";
import { Sidebar } from "@/app/components/sidebar";
import { Content } from "@/app/components/content";
import { DocsFooter } from "@/app/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container $fluid>
      <Sidebar />
      <MaxWidth $lg={600}>
        <Content>{children}</Content>
        <DocsFooter />
      </MaxWidth>
    </Container>
  );
}
