import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Container, Space, H1, Row, Col } from "../../components/Layout";
import { Sidebar } from "../../components/Sidebar";

function Index({ posts = [] }) {
	return (
		<Page title="Documentation" description="Hello world">
			<Container fluid>
				<Row gutterLg="medium">
					<Col xs={12} lg={3} fullScreen>
						<Sidebar />
					</Col>
					<Col xs={12} lg={9} fullScreen>
						<Space xsSize={20} />
						<H1 size="hero1">Getting started with Cherry Design</H1>
						<Space xsSize="none" lgSize={10} />
						<p>
							Cherry is the starting point for your design system.
							It comes with a minimal set of pre-defined styles
							for the most common web patterns and covers the
							design aspect of your website with a Figma template.
							There is a code implementation for each component in
							various modern front-end technologies. This
							facilitates co-creation from design to code. If you
							are not a designer you can still use Cherry
							components to build your layouts.
						</p>
					</Col>
				</Row>
			</Container>
		</Page>
	);
}

export default Index;
