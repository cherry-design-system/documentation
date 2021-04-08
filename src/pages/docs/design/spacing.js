import React from "react";
import Image from "next/image";
import { Space, TableOverflow, H1 } from "cherry-components";
import { Page } from "../../../components/Pages";
import { Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index() {
	return (
		<Page
			title="Design Spacing"
			description="In order to keep consistency between elements, Cherry provides a set of pre-defined values for the spacings."
		>
			<Space xs={20} lg={40} />
			<H1 size="hero1">Design Spacing</H1>
			<Space xs={10} lg={30} />
			<p>
				In order to keep consistency between elements, Cherry provides a
				set of pre-defined values for the spacings.
			</p>
			<Space size={10} />
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Size</th>
							<th>Unit</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>2</td>
							<td>px</td>
						</tr>
						<tr>
							<td>4</td>
							<td>px</td>
						</tr>
						<tr>
							<td>8</td>
							<td>px</td>
						</tr>
						<tr>
							<td>12</td>
							<td>px</td>
						</tr>
						<tr>
							<td>16</td>
							<td>px</td>
						</tr>
						<tr>
							<td>24</td>
							<td>px</td>
						</tr>
						<tr>
							<td>32</td>
							<td>px</td>
						</tr>
						<tr>
							<td>48</td>
							<td>px</td>
						</tr>
						<tr>
							<td>56</td>
							<td>px</td>
						</tr>
						<tr>
							<td>64</td>
							<td>px</td>
						</tr>
						<tr>
							<td>96</td>
							<td>px</td>
						</tr>
						<tr>
							<td>128</td>
							<td>px</td>
						</tr>
						<tr>
							<td>160</td>
							<td>px</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<Link
				external
				href="https://www.figma.com/file/oumA2pAqhEDMpTAtDgarxr/Cherry-Design-System?node-id=153%3A7"
			>
				Spacing in Figma
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/design/inputs"
					as="/docs/design/inputs"
					prev
				>
					Design Inputs
				</DocNav>
				<DocNav href="/docs/design/grid" as="/docs/design/grid" next>
					Design Grid
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
