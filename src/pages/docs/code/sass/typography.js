import React from "react";
import { Page } from "../../../../components/Pages";
import { Space, H1, H2, H3, H4, H5, H6 } from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";
import {
	buttonBigFontStyles,
	buttonFontStyles,
	eyebrowFontStyles,
	inputBigFontStyles,
	inputFontStyles,
	leadFontStyles,
	subTitleFontStyles,
} from "../../../../assets/styles/helperStyles";

const hero1Code = `<h1 class="hero1">Hero1</h1>`;
const hero2Code = `<h1 class="hero2">Hero2</h1>`;
const hero3Code = `<h1 class="hero3">Hero3</h1>`;
const h1Code = `<h1>Heading1</h1>`;
const h2Code = `<h2>Heading2</h2>`;
const h3Code = `<h3>Heading3</h3>`;
const h4Code = `<h4>Heading4</h4>`;
const h5Code = `<h5>Heading5</h5>`;
const h6Code = `<h6>Heading6</h6>`;
const eyebrowCode = `<p class="font-style-eyebrow">Eyebrow</p>`;
const subtitleCode = `<p class="font-style-subtitle">Subtitle</p>`;
const buttonCode = `<span class="font-style-button">Button</span>`;
const buttonBigCode = `<span class="font-style-button-big">Button Big</span>`;
const leadCode = `<span class="font-style-lead">Lead</span>`;
const inputCode = `<span class="font-style-input">Input</span>`;
const inputBigCode = `<span class="font-style-input-big">Input Big</span>`;
const strongCode = `<strong>
	Strong - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</strong>`;
const textCode = `<p>
	Text - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</p>`;
const smallCode = `<small>
	Small - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</small>`;
const blockquoteCode = `<blockquote>
	Blockquote - Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec id elit non mi porta gravida at eget metus.
</blockquote>`;

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
				value={hero1Code}
				description={<H1 size="hero1">Hero1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={hero2Code}
				description={<H1 size="hero2">Hero2</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={hero3Code}
				description={<H1 size="hero3">Hero3</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h1Code}
				description={<H1>Heading1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h2Code}
				description={<H2>Heading2</H2>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h3Code}
				description={<H3>Heading3</H3>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h4Code}
				description={<H4>Heading4</H4>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h5Code}
				description={<H5>Heading5</H5>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={h6Code}
				description={<H6>Heading6</H6>}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={eyebrowCode}
				description={
					<span css={(theme) => eyebrowFontStyles(theme)}>
						Eyebrow
					</span>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={subtitleCode}
				description={
					<span css={(theme) => subTitleFontStyles(theme)}>
						Subtitle
					</span>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonCode}
				description={
					<span css={(theme) => buttonFontStyles(theme)}>Button</span>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={buttonBigCode}
				description={
					<span css={(theme) => buttonBigFontStyles(theme)}>
						Button Big
					</span>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={leadCode}
				description={
					<span css={(theme) => leadFontStyles(theme)}>Lead</span>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={inputCode}
				description={
					<span css={(theme) => inputFontStyles(theme)}>Input</span>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={inputBigCode}
				description={
					<span css={(theme) => inputBigFontStyles(theme)}>
						Input Big
					</span>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={strongCode}
				description={
					<strong>
						Strong - Fusce dapibus, tellus ac cursus commodo, tortor
						mauris condimentum nibh, ut fermentum massa justo sit
						amet risus. Duis mollis, est non commodo luctus, nisi
						erat porttitor ligula, eget lacinia odio sem nec elit.
						Donec id elit non mi porta gravida at eget metus.
					</strong>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={textCode}
				description={
					<p>
						Text - Fusce dapibus, tellus ac cursus commodo, tortor
						mauris condimentum nibh, ut fermentum massa justo sit
						amet risus. Duis mollis, est non commodo luctus, nisi
						erat porttitor ligula, eget lacinia odio sem nec elit.
						Donec id elit non mi porta gravida at eget metus.
					</p>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={smallCode}
				description={
					<p>
						<small>
							Small - Fusce dapibus, tellus ac cursus commodo,
							tortor mauris condimentum nibh, ut fermentum massa
							justo sit amet risus. Duis mollis, est non commodo
							luctus, nisi erat porttitor ligula, eget lacinia
							odio sem nec elit. Donec id elit non mi porta
							gravida at eget metus.
						</small>
					</p>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="html"
				value={blockquoteCode}
				description={
					<p>
						<blockquote>
							Small - Fusce dapibus, tellus ac cursus commodo,
							tortor mauris condimentum nibh, ut fermentum massa
							justo sit amet risus. Duis mollis, est non commodo
							luctus, nisi erat porttitor ligula, eget lacinia
							odio sem nec elit. Donec id elit non mi porta
							gravida at eget metus.
						</blockquote>
					</p>
				}
			/>
			<Space size={20} />
		</Page>
	);
}

export default Index;