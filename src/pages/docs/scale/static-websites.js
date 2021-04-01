import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Box, Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";
import Image from "next/image";

function Index({ posts = [] }) {
	return (
		<Page title="Static Websites">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Static Websites</H1>
			<Space xs={20} lg={30} />
			<p>
				GoPablo is a static site generator with a modern development
				workflow, integrated web server, auto-reload, CSS preprocessors,
				and ES6 ready. Generates optimized distribution files ready to
				be deployed. It includes Cherry out-of-the-box, and it purges
				unused classes in production.
			</p>
			<Space size={10} />
			<Box noPadding>
				<a
					href="https://www.gopablo.co/?ref=cherry.design"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/img/docs/scale/gopablo.jpg"
						alt="GoPablo"
						width={1280}
						height={670}
					/>
				</a>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link external href="https://www.gopablo.co/?ref=cherry.design">
				GoPablo
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs/scale" as="/docs/scale/" prev>
					Scale Introduction
				</DocNav>
				<DocNav
					href="/docs/scale/wordpress-websites"
					as="/docs/scale/wordpress-websites"
					next
				>
					WordPress Websites
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
