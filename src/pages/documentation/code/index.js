import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import { Space, H1, Row, Col, Box } from "../../../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page title="Code Documentation">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Code</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Every element of the design system comes with a implementation
				in code. Cherry can be used in Sass, PostCSS or as React
				Components. You have access to the source code in our GitHub{" "}
				<a
					href="https://github.com/cherry-design-system/?ref=cherry.design"
					target="_blank"
					rel="noopener noreferrer"
				>
					repositories
				</a>
				.
			</p>
			<Space size={20} />
			<Row>
				<Col xs={12} lg={4} textAlign="center">
					<Box
						href="/documentation/code/sass"
						as="/documentation/code/sass"
					>
						<Image
							src="/img/documentation/code/sass.png"
							alt="Sass Logo"
							width={120}
							height={90}
						/>
						<strong data-tertiary>Sass</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xsSize={20} lgSize="none" />
					<Box href="/documentation/code" as="/documentation/code">
						<Image
							src="/img/documentation/code/postcss.png"
							alt="PostCSS Logo"
							width={90}
							height={90}
						/>
						<strong data-tertiary>PostCSS</strong>
					</Box>
				</Col>
				<Col xs={12} lg={4} textAlign="center">
					<Space xsSize={20} lgSize="none" />
					<Box href="/documentation/code" as="/documentation/code">
						<Image
							src="/img/documentation/code/react.png"
							alt="React Logo"
							width={100.58}
							height={90}
						/>
						<strong data-tertiary>React Components</strong>
					</Box>
					<Space size={20} />
				</Col>
			</Row>
		</Page>
	);
}

export default Index;
