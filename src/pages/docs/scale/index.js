import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import { Space, H1, Row, Col, Box } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index() {
	return (
		<Page title="Scale">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Scale</H1>
			<Space xs={20} lg={30} />
			<p>
				Cherry comes as a template for your design system. It contains
				only the essential elements and patterns for a modern website.
				It is meant to be extended and used as a starting point for your
				own design system. It follows the same naming convention from
				Design to Code and carries the same patterns across different
				technologies.
			</p>
			<p>
				All Cherry repositories are free and open-source. You can
				implement the source code directly in your development
				environment.
			</p>
			<Space size={1} />
			<hr />
			<Space size={1} />
			<p>
				Cherry is included in a few open-source projects and you can get
				started building: Static Websites, WordPress Websites, React
				Apps or Email Templates, by typing one command. That's some
				speed!
			</p>
			<Space size={10} />
			<Row>
				<Col xs={6} textAlign="center">
					<Box
						href="/docs/scale/static-websites"
						as="/docs/scale/static-websites"
					>
						<Image
							src="/img/docs/scale/gopablo-logo.svg"
							alt="Static Websites - GoPablo"
							width={100.59}
							height={90}
						/>
						<strong className="primary" title="Static Websites">
							Static Websites
						</strong>
					</Box>
				</Col>
				<Col xs={6} textAlign="center">
					<Box
						href="/docs/scale/wordpress-websites"
						as="/docs/scale/wordpress-websites"
					>
						<Image
							src="/img/docs/scale/wordpressify-logo.svg"
							alt="WordPress Websites - Wordpressify"
							width={90}
							height={90}
						/>
						<strong className="primary" title="WordPress Websites">
							WordPress Websites
						</strong>
					</Box>
				</Col>
				<Col xs={6} textAlign="center">
					<Space size={20} />
					<Box
						href="/docs/scale/react-apps"
						as="/docs/scale/react-apps"
					>
						<Image
							src="/img/docs/scale/nextify-logo.svg"
							alt="React - Nextify"
							width={90}
							height={90}
						/>
						<strong className="primary" title="React Apps">
							React Apps
						</strong>
					</Box>
					<Space size={20} />
				</Col>
				<Col xs={6} textAlign="center">
					<Space size={20} />
					<Box
						href="/docs/scale/email-templates"
						as="/docs/scale/email-templates"
					>
						<Image
							src="/img/docs/scale/fuzzymail-logo.svg"
							alt="Email Templates - FuzzyMail"
							width={90}
							height={90}
						/>
						<strong className="primary" title="Email Templates">
							Email Templates
						</strong>
					</Box>
					<Space size={20} />
				</Col>
			</Row>
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/theme"
					as="/docs/code/react-components/theme"
					prev
				>
					Emotion Theme
				</DocNav>
				<DocNav
					href="/docs/scale/static-websites"
					as="/docs/scale/static-websites"
					next
				>
					Static Websites
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
