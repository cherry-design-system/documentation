import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1 } from "../../components/Layout";
import { CodeBlock } from "../../components/CodeBlock";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdown = `console.log('It works!')
const CodeBlock = ({ language, value }) => {
	return (
		<SyntaxHighlighter showLineNumbers={true} language={language}>
			{value}
		</SyntaxHighlighter>
	);
};`;

function Index({ posts = [] }) {
	return (
		<Page title="Documentation Sample">
			<Space xsSize={20} />
			<H1 size="hero1">Sample</H1>
			<Space xsSize="none" lgSize={10} />
			<p>
				Cherry is the starting point for your design system. It comes
				with a minimal set of pre-defined styles for the most common web
				patterns. It covers the design aspects of your website by
				providing a Figma template with the original designs. Each
				element of the design system is implemented in code using
				various modern fron-end technologies. This facilitates
				co-creation from design to code. If you are not a designer you
				can still use Cherry components to build your layouts out of the
				box.
			</p>
			<Space size={10} />
			<CodeBlock language="jsx" value={markdown} />
			<Space size={20} />
		</Page>
	);
}

export default Index;
