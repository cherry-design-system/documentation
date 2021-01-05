import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2, H3 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";

const hero1 = `<h1 class="hero1">Hero1</h1>`;
const hero2 = `<h1 class="hero2">Hero1</h1>`;
const hero3 = `<h1 class="hero3">Hero3</h1>`;
const h1 = `<h1>Hero3</h1>`;
const h2 = `<h2>Hero3</h2>`;
const h3 = `<h3>Hero3</h3>`;
const h4 = `<h4>Hero3</h4>`;
const h5 = `<h5>Hero3</h5>`;
const h6 = `<h6>Hero3</h6>`;

function Index({ posts = [] }) {
	return (
		<Page title="Sass Typography">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Sass Typography</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				In this page you can find the Sass Typography definitions. All
				variations have two sizes, one for mobile and one for desktop.
				The definitions of the classes can be found in the file{" "}
				<strong>typography.scss</strong>.
			</p>
			<p>
				If you haven't imported the entire Cherry files (cherry.scss),
				please make sure <strong>globals.scss</strong> is imported in
				order to apply the typography styles for the HTML tags like
				paragraphs, lists, blockquotes and others global typography
				definitions.
			</p>
			<Space size={10} />
			<CodeBlock
				language="html"
				value={hero1}
				description={<H1 size="hero1">Hero1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={hero2}
				description={<H1 size="hero2">Hero2</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={hero2}
				description={<H1 size="hero3">Hero3</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h1}
				description={<H1>Heading1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h2}
				description={<H2>Heading2</H2>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h3}
				description={<H3>Heading3</H3>}
			/>
			<Space size={20} />
		</Page>
	);
}

export default Index;
