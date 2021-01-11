import React from "react";
import { useRouter } from "next/router";
import { Col, Container, Row, Space } from "../Layout";
import { Logo } from "../../assets/svg/Logo";
import { Riangle } from "../../assets/svg/Riangle";
import { DI } from "../../assets/svg/DI";
import {
	footerStyles,
	footerLeftColStyles,
	footerRightColStyles,
} from "./Footer.styles";

function Footer({ className }) {
	const router = useRouter();

	return (
		<footer className={className} css={(theme) => footerStyles(theme)}>
			<Container fluid={router.pathname.includes("/docs")}>
				<Row>
					<Col
						xs={12}
						lg={6}
						css={(theme) => footerLeftColStyles(theme)}
					>
						<Space xs={40} lg={100} />
						<a
							href="https://www.riangle.com/"
							target="_blank"
							rel="noopener noreferrer"
							data-icon-link
						>
							<Riangle />
						</a>
						<a
							href="https://www.deep-impact.ch"
							target="_blank"
							rel="noopener noreferrer"
							data-icon-link
						>
							<DI />
						</a>
						<p>
							Powered by{" "}
							<a
								href="https://www.riangle.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Riangle
							</a>{" "}
							and{" "}
							<a
								href="https://www.deep-impact.ch"
								target="_blank"
								rel="noopener noreferrer"
							>
								Deep-Impact AG
							</a>
							.
						</p>
						<Space xs="none" lg={20} />
					</Col>
					<Col
						xs={12}
						lg={6}
						css={(theme) => footerRightColStyles(theme)}
					>
						<Space xs={30} lg={80} />
						<Logo />
						<p>© Copyright 2021 - All rights reserved. </p>
						<Space xs={30} lg={70} />
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export { Footer };
