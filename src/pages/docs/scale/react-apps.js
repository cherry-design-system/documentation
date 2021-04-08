import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Box, Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";
import Image from "next/image";

function Index() {
	return (
		<Page title="React Apps">
			<Space xs={20} lg={40} />
			<H1 size="hero1">React Apps</H1>
			<Space xs={20} lg={30} />
			<p>
				Nextify is a simple boilerplate for React apps with Next.js and
				Emotion. Next.js gives you the best developer experience with
				all the features you need for production. Emotion is a high
				performance, lightweight css-in-js library. It includes Cherry
				out-of-the-box and you can pass the Emotion theme down to Cherry
				React Components.
			</p>
			<Space size={10} />
			<Box noPadding>
				<a
					href="https://www.nextify.me/?ref=cherry.design"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/img/docs/scale/nextify.jpg"
						alt="Nextify"
						width={1280}
						height={670}
					/>
				</a>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link external href="https://www.nextify.me/?ref=cherry.design">
				Nextify
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/scale/wordpress-websites"
					as="/docs/scale/wordpress-websites"
					prev
				>
					WordPress Websites
				</DocNav>
				<DocNav
					href="/docs/scale/email-templates"
					as="/docs/scale/email-templates"
					next
				>
					Email Templates
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
