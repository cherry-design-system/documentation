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
import { Socials } from "../Socials/Socials";
import { GitHub } from "../../assets/svg/GitHub";

function Footer({ className }) {
	const router = useRouter();

	return (
		<>
			<Socials />
			<footer className={className} css={(theme) => footerStyles(theme)}>
				<Container fluid={router.pathname.includes("/docs")}>
					<Space xs={40} lg={80} />
					<Row className="first-row">
						<Col xs={12} lg={6}>
							<a>
								<GitHub /> <span>GitHub</span>
							</a>
						</Col>
						<Col xs={12} lg={6}>
							<ul>
								<li>
									<a>Cherry</a>
								</li>
								<li>
									<a>GoPablo</a>
								</li>
								<li>
									<a>WordPressify</a>
								</li>
								<li>
									<a>Nextify</a>
								</li>
								<li>
									<a>FuzzyMail</a>
								</li>
							</ul>
						</Col>
					</Row>
					<Space xs={40} lg={80} />
					<hr />
					<Row>
						<Col xs={12} lg={6} className="left-col">
							<Space xs={40} lg={100} />
							<a
								href="https://www.riangle.com/?ref=cherry.design"
								target="_blank"
								rel="noopener noreferrer"
								className="icon-link"
							>
								<Riangle />
							</a>
							<a
								href="https://www.deep-impact.ch/?ref=cherry.design"
								target="_blank"
								rel="noopener noreferrer"
								className="icon-link"
							>
								<DI />
							</a>
							<p>
								Powered by{" "}
								<a
									href="https://www.riangle.com/?ref=cherry.design"
									target="_blank"
									rel="noopener noreferrer"
								>
									Riangle
								</a>{" "}
								and{" "}
								<a
									href="https://www.deep-impact.ch/?ref=cherry.design"
									target="_blank"
									rel="noopener noreferrer"
								>
									Deep-Impact AG
								</a>
								.
							</p>
							<Space xs="none" lg={20} />
						</Col>
						<Col xs={12} lg={6} className="right-col">
							<Space xs={30} lg={80} />
							<Logo />
							<p>© Copyright 2021 - All rights reserved. </p>
							<Space xs={30} lg={70} />
						</Col>
					</Row>
				</Container>
			</footer>
		</>
	);
}

export { Footer };
