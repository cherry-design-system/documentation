import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import { Space, H1, Link, Box } from "../../../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page title="Design Documentation">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Design</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Cherry provides a UI Kit template in Figma with all the standard
				web elements. The document template is divided in a few pages to
				keep everything organized.
				<ol>
					<li>
						<strong>Branding</strong> - Contains the colors
						definition and all the typography styles, both for
						desktop and mobile.
					</li>
					<li>
						<strong>Interface</strong> - You can find all the form
						elements, buttons, inputs, checkboxes, radio buttons and
						drop-down selects.
					</li>
					<li>
						<strong>Icons</strong> - Cherry uses open source icons
						from Ionicons.
					</li>
					<li>
						<strong>Spacing & Grid</strong> - Spacing definitions
						and Cherry Grid, the 12 column layout system.
					</li>
					<li>
						<strong>Meta Images</strong> - Favicon and all the rest
						of icons required for metadata.
					</li>
				</ol>
			</p>
			<Space size={10} />
			<Box noPadding>
				<Image
					src="/img/documentation/design/figma.jpg"
					alt="Scale illustration"
					width={1916}
					height={1051}
				/>
			</Box>
			<Space size={20} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=0%3A1"
			>
				Figma UI Kit
			</Link>
			<Space size={20} />
		</Page>
	);
}

export default Index;
