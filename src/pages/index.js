import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { Page } from "../components/Pages";
import {
	Container,
	Row,
	Col,
	Space,
	Button,
	H1,
	H2,
	H3,
	H4,
	Link,
} from "../components/Layout";
import { LogoWrapper } from "../components/LogoWrapper/LogoWrapper";
import { BigNumber } from "../components/BigNumber";

function Index({ posts = [] }) {
	return (
		<Page title="Design System">
			<Container>
				<Space xs={20} lg={150} />
				<Row gutterLg="medium">
					<Col xs={12} lg={8}>
						<H1 size="hero1">A design system to build the web.</H1>
						<Space xs="none" lg={10} />
						<p>
							Cherry is the foundation for your design system,
							from design to code. With examples of
							implementations in modern front-end technologies.
							Customizable and scalable, ready to be used
							out-of-the-box.
						</p>
						<Space xs={10} lg={20} />
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
				<Row>
					<Col xs={12} lg={8}>
						<H2 size="h1">
							<BigNumber number="1" color="secondary" />
							Start with design
						</H2>
						<p>
							You start by designing your website. Cherry provides
							a template that defines all standard web patterns
							and typographys for your design system.
						</p>
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
						<Image
							src="/img/design.png"
							alt="Design illustration"
							width={109.5}
							height={147}
						/>
					</Col>
				</Row>
				<Space xs={20} lg={80} />
				<hr />
				<Space xs={20} lg={80} />
				<Row>
					<Col xs={12} lg={8}>
						<H3 size="h1">
							<BigNumber number="2" color="tertiary" />
							Continue in code
						</H3>
						<p>
							Each design element comes with a code implemented in
							various modern front-end technologies or can be used
							as components.
						</p>
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
						<Image
							src="/img/code.png"
							alt="Code illustration"
							width={114}
							height={127.12}
						/>
					</Col>
				</Row>
				<Space xs={20} lg={80} />
				<hr />
				<Space xs={20} lg={80} />
				<Row>
					<Col xs={12} lg={8}>
						<H4 size="h1">
							<BigNumber number="3" color="primary" />
							Scale your design system
						</H4>
						<p>
							Cherry follows it’s own naming convention from
							design to code. Expanding and customizing your
							design system has never been easier.
						</p>
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
						<Image
							src="/img/scale.png"
							alt="Scale illustration"
							width={114}
							height={104.63}
						/>
					</Col>
				</Row>
				<Space xs={20} lg={80} />
				<hr />
				<Row>
					<Col xs={12} textAlign="center">
						<Space xs={20} lg={80} />
						<Link href="/docs" as="/docs" size="big">
							Get Started
						</Link>
						<Space xs={30} lg={80} />
					</Col>
				</Row>
			</Container>
		</Page>
	);
}

export default Index;
