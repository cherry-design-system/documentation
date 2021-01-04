import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";

const markdown = `npm install cherry-sass`;

function Index({ posts = [] }) {
	return (
		<Page title="Sass">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Sass</H1>
			<Space xsSize={10} lgSize={30} />
			<CodeBlock language="shell" value={markdown} />
			<Space size={20} />
		</Page>
	);
}

export default Index;
