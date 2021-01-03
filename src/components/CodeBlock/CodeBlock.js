import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ language, value }) {
	return (
		<SyntaxHighlighter language={language} style={materialDark}>
			{value}
		</SyntaxHighlighter>
	);
}

export { CodeBlock };
