import React from "react";
import { Page } from "../../../components/Pages";
import {
	Space,
	H1,
	Link,
	Col,
	Row,
	TableOverflow,
} from "../../../components/Layout";
import { ColorBox, ColorBoxContainer } from "../../../components/ColorBox";

function Index({ posts = [] }) {
	return (
		<Page title="Typography">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Typography</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Cherry covers a wide range of typography variations, covering
				the most common web patterns like headings, subtitles,
				paragraphs and so on. There are 2 types of typography
				definitions, one for mobile and one for desktop.
			</p>
			<Space size={10} />
			<TableOverflow>
				<table>
					<tr>
						<th>Name</th>
						<th>Font-Family</th>
						<th>🖥&nbsp;&nbsp; Font-Size</th>
						<th>🖥&nbsp;&nbsp; Line-Height</th>
						<th>📱&nbsp; Font-Size</th>
						<th>📱&nbsp; Line-Height</th>
						<th>Letter-Spacing</th>
					</tr>
					<tr>
						<td>Hero1</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Hero2</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Hero3</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Heading1</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Heading2</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Heading3</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Heading4</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Heading5</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Heading6</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Eyebrow</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Subtitle</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Button</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Button Big</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Lead</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Input</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Input Big</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Strong</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Text</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Small</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
					<tr>
						<td>Blockquote</td>
						<td>Inter</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
						<td>00</td>
					</tr>
				</table>
			</TableOverflow>
			<Space size={20} />
		</Page>
	);
}

export default Index;
