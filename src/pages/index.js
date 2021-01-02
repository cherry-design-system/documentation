import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { Page } from "../components/Pages";
import {
	Container,
	Row,
	Col,
	Space,
	H1,
	Button,
	Input,
	Select,
	Textarea,
	H2,
	H3,
	H4,
} from "../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page title="Home" description="Hello world">
			<Container>
				<Space xsSize={20} lgSize={150} />
				<Row gutterLg="medium">
					<Col xs={12} lg={8}>
						<H1 size="hero1">A design system to build the web.</H1>
						<Space xsSize="none" lgSize={10} />
						<p>
							Cherry is the foundation for your design system,
							from design to code. With examples of
							implementations in modern front-end technologies.
							Customizable and scalable, ready to be used out of
							the box.
						</p>
						<Space xsSize="none" lgSize={20} />
						<Button>Get Started</Button>
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
				<Space xsSize={20} lgSize={150} />
				<hr />
				<Space xsSize={20} lgSize={80} />
				<Row>
					<Col xs={12} lg={8}>
						<H2 size="h1">Start with design</H2>
						<p>
							You start by designing your website. Cherry provides
							a design template that defines all standard web
							patterns and typographys.
						</p>
						<Space xsSize="none" lgSize={20} />
						<Button variant="secondary" frame>
							Design
						</Button>
					</Col>
					<Col xs={12} lg={4} textAlign="center">
						<Image
							src="/img/design.png"
							alt="Design illustration"
							width={109.5}
							height={147}
						/>
					</Col>
				</Row>
				<Space xsSize={20} lgSize={80} />
				<hr />
				<Space xsSize={20} lgSize={80} />
				<Row>
					<Col xs={12} lg={8}>
						<H3 size="h1">Code your design</H3>
						<p>
							All the design patterns are implemented in various
							modern front-end technologies or can be used as
							components.
						</p>
						<Space xsSize="none" lgSize={20} />
						<Button variant="tertiary" frame>
							Code
						</Button>
					</Col>
					<Col xs={12} lg={4} textAlign="center">
						<Image
							src="/img/code.png"
							alt="Code illustration"
							width={114}
							height={127.12}
						/>
					</Col>
				</Row>
				<Space xsSize={20} lgSize={80} />
				<hr />
				<Space xsSize={20} lgSize={80} />
				<Row>
					<Col xs={12} lg={8}>
						<H4 size="h1">Scale your design system</H4>
						<p>
							Cherry follows it’s own naming convention from
							design to code. Expanding and customizing your
							design system has never been easier.
						</p>
						<Space xsSize="none" lgSize={20} />
						<Button variant="primary" frame>
							Scale
						</Button>
					</Col>
					<Col xs={12} lg={4} textAlign="center">
						<Image
							src="/img/scale.png"
							alt="Scale illustration"
							width={114}
							height={104.63}
						/>
					</Col>
				</Row>
				<Space xsSize={20} lgSize={80} />
				<hr />
				<Row>
					<Col xs={12} textAlign="center">
						<Space xsSize={20} lgSize={80} />
						<Button>Get Started</Button>
						<Space xsSize={20} lgSize={80} />
					</Col>
				</Row>
			</Container>
		</Page>
	);
}

export default Index;
