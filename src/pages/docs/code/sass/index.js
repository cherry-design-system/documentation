import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2, H3 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";

const installCode = `npm install cherry-sass`;
const importCode = `@import "cherry-sass/src/cherry.scss";`;
const cherryScssCode = `@import "./theme";
@import "./helpers";
@import "./globals";
@import "./typography";
@import "./buttons";
@import "./inputs";
@import "./grid";
@import "./spacing";`;
const importDistCode = `@import "cherry-sass/dist/cherry.css";`;
const importHtmlCode = `<link rel="stylesheet" href="cherry-sass/dist/cherry.css">`;

function Index({ posts = [] }) {
	return (
		<Page title="Install Cherry for Sass">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Install Cherry for Sass</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Cherry is compiled in Sass, each element of the design system
				can be imported independently. You can import .scss files to
				your Sass project or import the minified version from the
				distribution files. To install Cherry for Sass, run the command:
			</p>
			<Space size={10} />
			<CodeBlock language="shell" value={installCode} />
			<Space size={20} />
			<H2>Import Scss</H2>
			<p>
				To import all Cherry elements, include the{" "}
				<strong>cherry.scss</strong> file in your entry point style
				file:
			</p>
			<Space size={10} />
			<CodeBlock language="scss" value={importCode} />
			<Space size={10} />
			<CodeBlock
				language="scss"
				value={cherryScssCode}
				description="Cherry.scss includes all the elements from the design system."
			/>
			<Space size={10} />
			<p>
				If you don't need all the elements, import only what you need,
				and make sure you have <strong>autoprefixer</strong> installed.
			</p>
			<Space size={10} />
			<H3 size="h2">Import Minified CSS</H3>
			<p>
				To import all Cherry elements from the minified CSS. Import the{" "}
				<strong>cherry.css</strong> file from the <strong>dist</strong>{" "}
				directory. Include it it in your main css file or directly in
				the head of the HTML.
			</p>
			<Space size={10} />
			<CodeBlock language="css" value={importDistCode} />
			<p>or</p>
			<CodeBlock language="css" value={importHtmlCode} />
			<Space size={10} />
			<p>That's it 🎉 you are ready to use Cherry.</p>
			<Space size={10} />
		</Page>
	);
}

export default Index;
