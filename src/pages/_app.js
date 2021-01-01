import { withRouter, useRouter } from "next/router";
import { ThemeProvider, css } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";
import { Header } from "../components/Header/Header";

function App({ Component, pageProps, router }) {
	const { query } = useRouter();

	return (
		<>
			{globalStyles}
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default withRouter(App);
