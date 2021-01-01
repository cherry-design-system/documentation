import React from "react";
import { css } from "@emotion/react";
import Image from "next/image";
import { Page } from "../components/Pages";
import { Container, Row, Col, Space, H1 } from "../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page title="Home" description="Hello world">
			<Container>
				<Space xsSize={20} lgSize={150} />
				<Row gutterLg="medium">
					<Col xs={12} lg={8}>
						<H1 size="hero1">A design system to build the web.</H1>
						<p>
							Cherry is the foundation for your design system,
							from design to code. With examples of
							implementations in modern front-end technologies.
							Customizable and scalable, ready to be used out of
							the box.
						</p>
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
			</Container>
		</Page>
	);
}

export default Index;
