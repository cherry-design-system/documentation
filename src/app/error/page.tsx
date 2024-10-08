import { Container } from "cherry-styled-components/src/lib";
import { OG_IMAGE } from "../utils/constants";

export const metadata = {
  title: "Error - Cherry Design System",
  openGraph: {
    title: "Error - Cherry Design System",
    images: OG_IMAGE,
  },
};

export default function ErrorPage() {
  return <Container>Sorry, something went wrong!</Container>;
}
