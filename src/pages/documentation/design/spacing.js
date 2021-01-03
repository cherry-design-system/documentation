import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import { Space, H1, TableOverflow } from "../../../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Spacing"
			description="In order to keep consistency between elements, Cherry provides a set of pre-defined values for the spacings."
		>
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Design Spacing</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				In order to keep consistency between elements, Cherry provides a
				set of pre-defined values for the spacings.
			</p>
			<Space size={10} />
			<TableOverflow>
				<table>
					<tr>
						<th>Size</th>
						<th>Unit</th>
					</tr>
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
						<td>180</td>
						<td>px</td>
					</tr>
				</table>
			</TableOverflow>
		</Page>
	);
}

export default Index;
