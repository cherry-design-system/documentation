import { withRouter, useRouter } from "next/router";
import { ThemeProvider, css } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Col, Container, MinHeight, Row } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";

function App({ Component, pageProps }) {
	const { query } = useRouter();
	const router = useRouter();

	return (
		<>
			{globalStyles}
			<ThemeProvider theme={theme}>
				<Header />
				<MinHeight>
					{router.pathname.includes("/documentation") ? (
						<Container fluid>
							<Row gutterLg="medium">
								<Col xs={12} lg={3} fullScreen>
									<Sidebar />
								</Col>
								<Col xs={12} lg={9} fullScreen>
									<Component {...pageProps} />
								</Col>
							</Row>
						</Container>
					) : (
						<Component {...pageProps} />
					)}
				</MinHeight>
				<Footer />
			</ThemeProvider>
		</>
	);
}

export default withRouter(App);
