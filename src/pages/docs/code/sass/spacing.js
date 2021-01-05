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

const spaceCode = `<div class="space size-160 xs-hide lg-show"></div>
<div class="space size-24 horizontal xs-show lg-hide"></div>`;

function Index({ posts = [] }) {
	return (
		<Page title="Sass Spacing">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Sass Spacing</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Spacings are defined in the design system, and for each size
				there is a class name. Assign the desired class name to a div
				element to add the space. Spaces push vertically by default. To
				change it to horizontal (in-line) use the{" "}
				<strong>.horizontal</strong> class name. Spaces can be specified
				to be shown in a specific media query, this allows different
				spacings in different screen resolutions.
			</p>
			<Space size={10} />
			<CodeBlock language="html" value={spaceCode} description={""} />
			<Space size={20} />
			<H2 size="h3">Classes</H2>
			<p>
				Below you can find the class names for all sizes. Make sure your
				element includes both classes as specified.
			</p>
			<TableOverflow>
				<table>
					<tr>
						<th>Size</th>
						<th>Class Name</th>
					</tr>
					<tr>
						<td>2px</td>
						<td>.space .size-2</td>
					</tr>
					<tr>
						<td>4px</td>
						<td>.space .size-4</td>
					</tr>
					<tr>
						<td>8px</td>
						<td>.space .size-8</td>
					</tr>
					<tr>
						<td>12px</td>
						<td>.space .size-12</td>
					</tr>
					<tr>
						<td>16px</td>
						<td>.space .size-16</td>
					</tr>
					<tr>
						<td>24px</td>
						<td>.space .size-24</td>
					</tr>
					<tr>
						<td>32px</td>
						<td>.space .size-32</td>
					</tr>
					<tr>
						<td>48px</td>
						<td>.space .size-48</td>
					</tr>
					<tr>
						<td>56px</td>
						<td>.space .size-56</td>
					</tr>
					<tr>
						<td>64px</td>
						<td>.space .size-64</td>
					</tr>
					<tr>
						<td>96px</td>
						<td>.space .size-96</td>
					</tr>
					<tr>
						<td>128px</td>
						<td>.space .size-128</td>
					</tr>
					<tr>
						<td>180px</td>
						<td>.space .size-180</td>
					</tr>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H3 size="h3">Show & Hide Spaces</H3>
			<p>
				Each element can be specified to be shown or hidden in a
				specific media query.
			</p>
			<TableOverflow>
				<table>
					<tr>
						<th>Description</th>
						<th>Class Name</th>
					</tr>
					<tr>
						<td>Horizontal space (in-line)</td>
						<td>.space.horizontal</td>
					</tr>
					<tr>
						<td>Hide on XS media query</td>
						<td>.xs-hide</td>
					</tr>
					<tr>
						<td>Show on XS media query</td>
						<td>.xs-show</td>
					</tr>
					<tr>
						<td>Hide on SM media query</td>
						<td>.sm-hide</td>
					</tr>
					<tr>
						<td>Show on SM media query</td>
						<td>.sm-show</td>
					</tr>
					<tr>
						<td>Hide on MD media query</td>
						<td>.md-hide</td>
					</tr>
					<tr>
						<td>Show on MD media query</td>
						<td>.md-show</td>
					</tr>
					<tr>
						<td>Hide on LG media query</td>
						<td>.lg-hide</td>
					</tr>
					<tr>
						<td>Show on LG media query</td>
						<td>.lg-show</td>
					</tr>
					<tr>
						<td>Hide on XL media query</td>
						<td>.xl-hide</td>
					</tr>
					<tr>
						<td>Show on XL media query</td>
						<td>.xl-show</td>
					</tr>
					<tr>
						<td>Hide on XXL media query</td>
						<td>.xxl-hide</td>
					</tr>
					<tr>
						<td>Show on XXL media query</td>
						<td>.xxl-show</td>
					</tr>
					<tr>
						<td>Hide on XXXL media query</td>
						<td>.xxxl-hide</td>
					</tr>
					<tr>
						<td>Show on XXXL media query</td>
						<td>.xxxl-show</td>
					</tr>
				</table>
			</TableOverflow>
			<Space size={20} />
		</Page>
	);
}

export default Index;
