import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	FontStyle,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";

const hero1Code = `<H1 size="hero1">Hero1</H1>`;
const hero2Code = `<H1 size="hero2">Hero2</H1>`;
const hero3Code = `<H1 size="hero3">Hero3</H1>`;
const h1Code = `<H1>Heading1</H1>`;
const h2Code = `<H2>Heading2</H2>`;
const h3Code = `<H3>Heading3</H3>`;
const h4Code = `<H4>Heading4</H4>`;
const h5Code = `<H5>Heading5</H5>`;
const h6Code = `<H6>Heading6</H6>`;
const eyebrowCode = `<FontStyle variant="eyebrow">Eyebrow</FontStyle>`;
const subtitleCode = `<FontStyle variant="subtitle">Subtitle</FontStyle>`;
const buttonCode = `<FontStyle variant="button">Button</FontStyle>`;
const buttonBigCode = `<FontStyle variant="buttonBig">Button Big</FontStyle>`;
const leadCode = `<FontStyle variant="lead">Lead</FontStyle>`;
const inputCode = `<FontStyle variant="input">Input</FontStyle>`;
const inputBigCode = `<FontStyle variant="input">Input Big</FontStyle>`;
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
		<Page title="Typography Components">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Typography Components</H1>
			<Space xs={10} lg={30} />
			<p>
				In this page you can find the Components to create typography
				elements. All components have two sizes, one for mobile and one
				for desktop. The definitions of the sizes can be found in the
				Emotion theme configuration <strong>theme.js</strong>.
			</p>
			<p>
				If you haven't imported the global styles (
				<strong>globalStyles</strong>), please make sure to do so in
				order to apply the typography styles for the HTML tags like
				paragraphs, lists, blockquotes and others global typography
				definitions.
			</p>
			<Space size={10} />
			<CodeBlock
				language="jsx"
				value={hero1Code}
				description={<H1 size="hero1">Hero1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={hero2Code}
				description={<H1 size="hero2">Hero2</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={hero3Code}
				description={<H1 size="hero3">Hero3</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={h1Code}
				description={<H1>Heading1</H1>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={h2Code}
				description={<H2>Heading2</H2>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={h3Code}
				description={<H3>Heading3</H3>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={h4Code}
				description={<H4>Heading4</H4>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={h5Code}
				description={<H5>Heading5</H5>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={h6Code}
				description={<H6>Heading6</H6>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={eyebrowCode}
				description={<FontStyle variant="eyebrow">Eyebrow</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={subtitleCode}
				description={<FontStyle variant="subtitle">Subtitle</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={buttonCode}
				description={<FontStyle variant="button">Button</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={buttonBigCode}
				description={
					<FontStyle variant="buttonBig">Button Big</FontStyle>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={leadCode}
				description={<FontStyle variant="lead">Lead</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputCode}
				description={<FontStyle variant="input">Input</FontStyle>}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
				value={inputBigCode}
				description={
					<FontStyle variant="inputBig">Input Big</FontStyle>
				}
			/>
			<Space size={20} />
			<CodeBlock
				language="jsx"
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
				language="jsx"
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
				language="jsx"
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
				language="jsx"
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
