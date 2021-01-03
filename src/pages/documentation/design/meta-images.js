import React from "react";
import Image from "next/image";
import { Page } from "../../../components/Pages";
import {
	Space,
	H1,
	Row,
	Col,
	Box,
	TableOverflow,
} from "../../../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page
			title="Design Meta Images"
			description="In the Cherry template you can find all the various sizes for your website favicon, manifest icons and other metadata requirements."
		>
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Design Meta Images</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				In the Cherry template you can find all the various sizes for
				your website favicon, manifest icons and other metadata
				requirements.
			</p>
			<Space size={10} />
			<TableOverflow>
				<table>
					<tr>
						<th>Size</th>
						<th>Description</th>
					</tr>
					<tr>
						<td>16px • 16px</td>
						<td>Favicon</td>
					</tr>
					<tr>
						<td>32px • 32px</td>
						<td>Favicon</td>
					</tr>
					<tr>
						<td>48px • 48px</td>
						<td>Favicon</td>
					</tr>
					<tr>
						<td>128px • 128px</td>
						<td>Favicon</td>
					</tr>
					<tr>
						<td>256px • 256px</td>
						<td>Favicon</td>
					</tr>
					<tr>
						<td>72px • 72px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>96px • 96px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>120px • 120px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>128px • 128px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>144px • 144px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>152px • 152px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>180px • 180px</td>
						<td>Manifest / Apple Touch Icon</td>
					</tr>
					<tr>
						<td>192px • 192px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>384px • 384px</td>
						<td>Manifest</td>
					</tr>
					<tr>
						<td>512px • 512px</td>
						<td>Manifest / Mask Icon</td>
					</tr>
					<tr>
						<td>1280px • 670px</td>
						<td>Open Graph / Twitter Card</td>
					</tr>
				</table>
			</TableOverflow>
		</Page>
	);
}

export default Index;
