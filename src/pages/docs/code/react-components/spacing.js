import React from "react";
import { Page } from "../../../../components/Pages";
import {
	Space,
	H1,
	H2,
	TableOverflow,
	H3,
} from "../../../../components/Layout";
import { CodeBlock } from "../../../../components/CodeBlock";

const spaceCode = `<Space xs="none" lg={160} />
<Space xs={24} lg="none" horizontal />`;

function Index({ posts = [] }) {
	return (
		<Page title="Spacing Component">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Spacing Component</H1>
			<Space xs={10} lg={30} />
			<p>
				Spacings are defined in the design system. Cherry has a special{" "}
				<strong>{"<Space />"}</strong> component that generates any
				desired space. The component can have various sizes depending on
				the media query. To change it to horizontal (in-line) use the
				prop <strong>horizontal</strong>.
			</p>
			<Space size={10} />
			<CodeBlock language="jsx" value={spaceCode} description={""} />
			<Space size={20} />
			<H2 size="h3">Props</H2>
			<p>
				Below you can find all the available props for this component.
			</p>
			<TableOverflow>
				<table>
					<tr>
						<th>Property</th>
						<th>Description</th>
						<th>Type</th>
					</tr>
					<tr>
						<td>horizontal</td>
						<td>Switch to horizontal (in-line) spaces</td>
						<td>Boolean</td>
					</tr>
					<tr>
						<td>size</td>
						<td>Defines the space for all media queries</td>
						<td>Number | "none"</td>
					</tr>
					<tr>
						<td>xs</td>
						<td>Defines the space for XS media query</td>
						<td>Number | "none"</td>
					</tr>
					<tr>
						<td>sm</td>
						<td>Defines the space for SM media query</td>
						<td>Number | "none"</td>
					</tr>
					<tr>
						<td>md</td>
						<td>Defines the space for MD media query</td>
						<td>Number | "none"</td>
					</tr>
					<tr>
						<td>lg</td>
						<td>Defines the space for LG media query</td>
						<td>Number | "none"</td>
					</tr>
					<tr>
						<td>xl</td>
						<td>Defines the space for XL media query</td>
						<td>Number | "none"</td>
					</tr>
					<tr>
						<td>xxl</td>
						<td>Defines the space for XXL media query</td>
						<td>Number | "none"</td>
					</tr>
					<tr>
						<td>xxxl</td>
						<td>Defines the space for XXXL media query</td>
						<td>Number | "none"</td>
					</tr>
				</table>
			</TableOverflow>
			<Space size={20} />
		</Page>
	);
}

export default Index;
