import React from "react";
import Image from "next/image";
import { Space, H1, H2 } from "cherry-components";
import { Page } from "../../../components/Pages";
import { Box, Link } from "../../../components/Layout";
import { DocNavWrapper, DocNav } from "../../../components/DocNav";

function Index() {
	return (
		<Page
			title="Design Documentation"
			description="Cherry provides a UI Kit template in Figma with all the standard web elements. The document template is divided in a few pages to keep everything organized."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry provides a UI Kit template in Figma with all the standard
				web elements. The document template is divided in a few pages to
				keep everything organized.
			</p>
			<ol>
				<li>
					<strong>Branding</strong> - Contains the colors definition
					and all the typography styles, both for desktop and mobile.
				</li>
				<li>
					<strong>Interface</strong> - You can find all the form
					elements, buttons, inputs, checkboxes, radio buttons and
					drop-down selects.
				</li>
				<li>
					<strong>Patterns</strong> - The desktop and mobile header
					can be found here.
				</li>
				<li>
					<strong>Icons</strong> - Cherry uses open source icons from
					Ionicons.
				</li>
				<li>
					<strong>Spacing & Grid</strong> - Spacing definitions and
					Cherry Grid, the 12 column layout system.
				</li>
				<li>
					<strong>Meta Images</strong> - Favicon and all the rest of
					icons required for metadata.
				</li>
			</ol>
			<Space size={10} />
			<Box noPadding>
				<a
					href="https://www.figma.com/community/file/943862931766586094/Cherry-Design-System"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/img/docs/design/figma.jpg"
						alt="Cherry Figma Design System"
						width={1726}
						height={1078}
					/>
				</a>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/community/file/943862931766586094/Cherry-Design-System"
			>
				Figma UI Kit
			</Link>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<H2>Figma Plugin</H2>
			<p>
				Cherry has its own Figma Plugin to generate design tokens
				automatically with a click of a button.{" "}
				<strong>Cherry Theme Generator</strong> exports all values of
				the design system. It supports PostCSS, Sass, and React
				Components.
			</p>
			<Space size={10} />
			<Box noPadding>
				<a
					href="https://www.figma.com/community/plugin/1091785956842659849/Cherry-Theme-Generator"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/img/docs/design/cherry-theme-generator-figma-plugin.jpg"
						alt="Scale illustration"
						width={1920*2}
						height={960*2}
					/>
				</a>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link
				external
				href="https://www.figma.com/community/plugin/1091785956842659849/Cherry-Theme-Generator"
			>
				Cherry Theme Generator
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav href="/docs" as="/docs" prev>
					Docs Introduction
				</DocNav>
				<DocNav
					href="/docs/design/colors"
					as="/docs/design/colors"
					next
				>
					Design Colors
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
