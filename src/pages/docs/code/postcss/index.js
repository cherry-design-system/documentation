import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2, H3, H4 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";

const installCode = `npm install cherry-postcss`;
const importCode = `@import "cherry-postcss/src/cherry.css";`;
const cherryCssCode = `@import "./theme";
@import "./helpers";
@import "./globals";
@import "./typography";
@import "./buttons";
@import "./inputs";
@import "./grid";
@import "./spacing";`;
const postcssPluginsCode = `module.exports = {
	plugins: [
		require("postcss-import"),
		require("postcss-preset-env")({
			stage: 0,
			features: {
				"nesting-rules": true,
				"color-mod-function": true,
				"custom-media": true,
			},
		}),
		require("postcss-mixins"),
		require("autoprefixer"),
		require("cssnano")(),
	],
};`;
const importDistCode = `@import "cherry-postcss/dist/cherry.css";`;
const importHtmlCode = `<link rel="stylesheet" href="cherry-postcss/dist/cherry.css">`;

function Index({ posts = [] }) {
	return (
		<Page title="Install Cherry for PostCSS">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Install Cherry for PostCSS</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Cherry is compiled in PostCSS, each element of the design system
				can be imported independently. You can import .css files to your
				PostCSS project or import the minified version from the
				distribution files. To install Cherry for PostCSS, run the
				command:
			</p>
			<Space size={10} />
			<CodeBlock language="shell" value={installCode} />
			<Space size={20} />
			<H2>Import CSS</H2>
			<p>
				To import all Cherry elements, include the{" "}
				<strong>cherry.css</strong> file in your entry point style file:
			</p>
			<Space size={10} />
			<CodeBlock language="css" value={importCode} />
			<Space size={10} />
			<CodeBlock
				language="css"
				value={cherryCssCode}
				description="Cherry.css includes all the elements from the design system."
			/>
			<Space size={10} />
			<p>
				If you don't need all the elements, import only what you need.
			</p>
			<Space size={20} />
			<H3 size="h3">PostCSS Plugins</H3>
			<Space size={20} />
			<CodeBlock
				language="js"
				value={postcssPluginsCode}
				description="postcss.config.js"
			/>
			<Space size={20} />
			<H4 size="h2">Import Minified CSS</H4>
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
