import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Box, Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";
import Image from "next/image";

function Index() {
	return (
		<Page title="WordPress Websites">
			<Space xs={20} lg={40} />
			<H1 size="hero1">WordPress Websites</H1>
			<Space xs={20} lg={30} />
			<p>
				WordPressify is a simple tool that helps you build WordPress
				themes and plugins. It takes care of the development experience
				by providing a web server with a database out of the box,
				zero-configuration required. It includes Cherry out-of-the-box.
			</p>
			<Space size={10} />
			<Box noPadding>
				<a
					href="https://www.wordpressify.co/?ref=cherry.design"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/img/docs/scale/wordpressify.jpg"
						alt="WordPressify"
						width={1280}
						height={670}
					/>
				</a>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.wordpressify.co/?ref=cherry.design"
			>
				WordPressify
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/scale/static-websites"
					as="/docs/scale/static-websites"
					prev
				>
					Static Site
				</DocNav>
				<DocNav
					href="/docs/scale/react-apps"
					as="/docs/scale/react-apps"
					next
				>
					React Apps
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
