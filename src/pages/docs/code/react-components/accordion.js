import React, { useContext } from "react";
import {
	Space,
	Button,
	H1,
	H2,
	TableOverflow,
	Row,
	Col,
} from "cherry-components";
import { Page } from "../../../../components/Pages";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";
import { ToastNotificationsContext } from "../../../../components/ToastNotifications";
import { Flex } from "../../../../components/Layout/Flex";
import { Accordion } from "../../../../components/Accordion";

const accordionCode = `import { Accordion } from "cherry-components";

function App() {
	return (
		<Accordion title="Beautiful Title">
			Officia adipisicing fugiat non magna Lorem eu mollit sint ipsum.
		</Accordion>
	);
}

export default App;`;

function Index() {
	const { addNotification } = useContext(ToastNotificationsContext);

	return (
		<Page title="Accordion">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Accordion</H1>
			<Space xs={10} lg={30} />
			<p>
				Accordions are vertically stacked set of sections, where each
				section contains a header and a collapsible content. The header
				typically contains a label or title, while the content section
				contains additional information or detail that can be hidden or
				shown by clicking or tapping on the header.
			</p>
			<Space size={1} />
			<CodeBlock language="tsx" value={accordionCode} />
			<Space size={20} />
			<H2 size="h3">Accordion Props</H2>
			<p>
				Below you can find the available props for the{" "}
				<strong>{"<Accordion />"}</strong> component.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Prop</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>title</td>
							<td>Accordion title</td>
							<td>String | ReactNode</td>
						</tr>
						<tr>
							<td>children</td>
							<td>Children elements</td>
							<td>ReactNode</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2>Demo</H2>
			<Space size={20} />
			<Accordion title="Accordion 1">
				Pariatur quis nisi enim nisi aute Lorem dolor incididunt non
				quis. Cupidatat tempor sint velit magna Lorem commodo pariatur
				sunt dolor non nostrud sit qui qui velit.
			</Accordion>
			<Accordion title="Accordion 2">
				Est enim veniam anim ullamco quis ipsum reprehenderit veniam ex
				qui excepteur. Nisi et ullamco in pariatur. Pariatur Lorem sit
				eiusmod velit nisi cillum pariatur labore amet pariatur amet et
				ad. Nisi eu laborum aliquip Lorem adipisicing cupidatat eu
				eiusmod minim deserunt ut exercitation laborum. Occaecat est
				nostrud in sunt labore tempor ipsum eiusmod officia consectetur
				ea aute nostrud. Enim Lorem Lorem magna aute sit laboris
				excepteur ex sunt Lorem.
			</Accordion>
			<Accordion title="Accordion 3">
				Esse ex dolor deserunt fugiat duis enim incididunt qui nostrud
				laborum anim aliquip.
			</Accordion>
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/grid"
					as="/docs/code/react-components/grid"
					prev
				>
					Grid Components
				</DocNav>
				<DocNav
					href="/docs/code/react-components/breakpoints"
					as="/docs/code/react-components/breakpoints"
					next
				>
					Emotion Breakpoints
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
