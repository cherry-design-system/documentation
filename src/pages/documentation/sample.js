import React from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Page } from "../../components/Pages";
import { Space, H1 } from "../../components/Layout";
import { CodeBlock } from "../../components/CodeBlock";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdown = `.parent {
	color: var(--color-dark);

		& .child {
				color: var(--color-light);
			}
		}
}`;

function Index({ posts = [] }) {
	return (
		<Page title="Documentation Sample">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Sample</H1>
			<Space xsSize={10} lgSize={30} />
			<p>
				Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
				auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
				ligula, eget lacinia odio sem nec elit. Sed posuere consectetur
				est at lobortis. Donec ullamcorper nulla non metus auctor
				fringilla. Maecenas sed diam eget risus varius blandit sit amet
				non magna. Duis mollis, est non commodo luctus, nisi erat
				porttitor ligula, eget lacinia odio sem nec elit. Maecenas
				faucibus mollis interdum. Fusce dapibus, tellus ac cursus
				commodo, tortor mauris condimentum nibh, ut fermentum massa
				justo sit amet risus. Nulla vitae elit libero, a pharetra augue.
				Donec sed odio dui. Cras mattis consectetur purus sit amet
				fermentum. Cum sociis natoque penatibus et magnis dis parturient
				montes, nascetur ridiculus mus. Nulla vitae elit libero, a
				pharetra augue.
			</p>
			<Space size={10} />
			<CodeBlock language="css" value={markdown} />
			<Space size={20} />
		</Page>
	);
}

export default Index;
