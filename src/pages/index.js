import React, { useContext } from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import {
	Col,
	Container,
	Input,
	Row,
	Space,
	H1,
	H2,
	H3,
	H4,
	Button,
} from "cherry-components";
import { Page } from "../components/Pages";
import { LogoWrapper } from "../components/LogoWrapper";
import { BigNumber } from "../components/BigNumber";
import { Projects } from "../components/Projects";
import { Socials } from "../components/Socials";
import { ImageWrapper } from "../components/ImageWrapper";
import { Link } from "../components/Layout";
import { OverflowHidden } from "../components/Layout/OverflowHidden";
import { Text } from "../components/Layout/Text/Text";
import { ToastNotificationsContext } from "../components/ToastNotifications/ToastNotificationsContext";

function Index() {
	const { addNotification } = useContext(ToastNotificationsContext);
	return (
		<Page title="Design System">
			<Container>
				<Space xs={20} lg={150} />
				<OverflowHidden>
					<Row gutterLg="big">
						<Col xs={12} lg={8}>
							<H1 size="hero1">
								A design system to build the web.
							</H1>
							<Space xs="none" lg={10} />
							<Text>
								Cherry is the foundation for your design system,
								from design to code. With examples of
								implementations in modern front-end
								technologies. Customizable and scalable, ready
								to be used out-of-the-box.
							</Text>
							<Space xs={10} lg={20} />
							<Space size={5} horizontal />
							<Button
								variant="primary"
								onClick={() => {
									addNotification(
										"1",
										"Hello, world 1",
										3500,
									);
								}}
							>
								Show Toast
							</Button>
							<Button
								variant="primary"
								onClick={() => {
									addNotification(
										"2",
										"Hello, world 2",
										3500,
									);
								}}
							>
								Show Toast
							</Button>
							<Button
								variant="primary"
								onClick={() => {
									addNotification(
										"3",
										"Hello, world 3",
										3500,
									);
								}}
							>
								Show Toast
							</Button>

							<Space xs={10} lg={20} />
							<Space size={5} horizontal />
							<Link href="/docs" as="/docs">
								Get Started
							</Link>
							<Space xs={10} lg="none" />
						</Col>
						<Col xs={12} lg={4} textAlign="center">
							<Image
								src="/img/illustration.png"
								alt="Cherry home page illustration"
								width={267.92}
								height={314}
							/>
						</Col>
					</Row>
				</OverflowHidden>
				<Space xs={20} lg="none" />
				<LogoWrapper>
					<Image
						src="/img/docs/design/figma-logo.png"
						alt="Figma Logo"
						width={29.34}
						height={44}
					/>
					<Image
						src="/img/docs/code/sass.png"
						alt="Sass Logo"
						width={58.71}
						height={44}
					/>
					<Image
						src="/img/docs/code/postcss.png"
						alt="PostCSS Logo"
						width={44}
						height={44}
					/>
					<Image
						src="/img/docs/code/react.png"
						alt="React Logo"
						width={44}
						height={44}
					/>
					<Image
						src="/img/docs/scale/wordpress.png"
						alt="WordPress Logo"
						width={44}
						height={44}
					/>
					<Image
						src="/img/docs/scale/html5.png"
						alt="HTML5 Logo"
						width={31.18}
						height={44}
					/>
				</LogoWrapper>
				<Space xs={10} lg={150} />
				<hr />
				<Space xs={20} lg={80} />
				<Row gutterLg="default">
					<Col xs={12} lg={8}>
						<H2 size="h1">
							<BigNumber number="1" color="secondary" />
							Start with design
						</H2>
						<Text maxWidth>
							You start by designing your website. Cherry provides
							a Figma template that defines all standard web
							patterns and typographys for your design system.
						</Text>
						<Space xs={10} lg={20} />
						<Link
							variant="secondary"
							frame
							href="/docs/design"
							as="/docs/design"
						>
							Design
						</Link>
					</Col>
					<Col xs={12} lg={4} textAlign="right">
						<ImageWrapper>
							<Image
								src="/img/design.png"
								alt="Design illustration"
								width={109.5}
								height={147}
							/>
						</ImageWrapper>
					</Col>
				</Row>
				<Space xs={10} lg={80} />
				<hr />
				<Space xs={20} lg={80} />
				<Row gutterLg="default">
					<Col xs={12} lg={8}>
						<H3 size="h1">
							<BigNumber number="2" color="tertiary" />
							Continue in code
						</H3>
						<Text maxWidth>
							Each design element comes with a code implemented in
							various modern front-end technologies or can be used
							as components.
						</Text>
						<Space xs={10} lg={20} />
						<Link
							variant="tertiary"
							frame
							href="/docs/code"
							as="/docs/code"
						>
							Code
						</Link>
					</Col>
					<Col xs={12} lg={4} textAlign="right">
						<ImageWrapper>
							<Image
								src="/img/code.png"
								alt="Code illustration"
								width={114}
								height={127.12}
							/>
						</ImageWrapper>
					</Col>
				</Row>
				<Space xs={20} lg={80} />
				<hr />
				<Space xs={20} lg={80} />
				<Row gutterLg="default">
					<Col xs={12} lg={8}>
						<H4 size="h1">
							<BigNumber number="3" color="primary" />
							Scale your design system
						</H4>
						<Text maxWidth>
							Cherry follows it’s own naming convention from
							design to code. Expanding and customizing your
							design system has never been easier.
						</Text>
						<Space xs={10} lg={20} />
						<Link
							variant="primary"
							frame
							href="/docs/scale"
							as="/docs/scale"
						>
							Scale
						</Link>
					</Col>
					<Col xs={12} lg={4} textAlign="right">
						<ImageWrapper>
							<Image
								src="/img/scale.png"
								alt="Scale illustration"
								width={114}
								height={104.63}
							/>
						</ImageWrapper>
					</Col>
				</Row>
				<Space xs={20} lg={80} />
			</Container>
			<Projects />
			<Space xs={20} lg={80} />
			<Container>
				<Row gutterLg="default">
					<Col xs={12} textAlign="center">
						<Link href="/docs" as="/docs" size="big">
							Get Started
						</Link>
						<Space xs={20} lg={80} />
					</Col>
				</Row>
			</Container>
		</Page>
	);
}

export default Index;
