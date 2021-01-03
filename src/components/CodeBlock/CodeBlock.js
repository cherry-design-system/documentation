import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ language, value }) {
	return (
		<SyntaxHighlighter language={language} style={materialOceanic}>
			{value}
		</SyntaxHighlighter>
	);
}

export { CodeBlock };
