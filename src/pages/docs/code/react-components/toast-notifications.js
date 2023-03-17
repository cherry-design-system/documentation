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

const appWrap = `import {
	ToastNotifications,
	ToastNotificationsProvider,
} from "cherry-components";

function App({ Component, pageProps }) {
	return (
		<ToastNotificationsProvider>
			<Component {...pageProps} />
			<ToastNotifications />
		</ToastNotificationsProvider>
	);
}

export default App;`;

const useContextCode = `import React, { useContext } from "react";
import { ToastNotificationsContext } from "cherry-components";

function Page() {
	const { addNotification } = useContext(ToastNotificationsContext);

	return (
		<div>
			<button onClick={() => {
				addNotification("Default notification");
			}}>
				Trigger Notification
			</button>
		</div>
	);
}

export default Page;`;

const defaultNotification = `<Button onClick={() => { addNotification("Default notification"); }}>
	Default Notification
</Button>`;

const successNotification = `<Button
	onClick={() => {
		addNotification("Success notification", {
			color: "success",
			autoHide: 3500,
		});
	}}
>
	Success Notification
</Button>`;

const errorNotification = `<Button
	onClick={() => {
		addNotification("Error notification", {
			color: "error",
			autoHide: 3500,
		});
	}}
>
	Error Notification
</Button>`;

const warningNotification = `<Button
	onClick={() => {
		addNotification("Warning notification", {
			color: "warning",
			autoHide: 3500,
		});
	}}
>
	Warning Notification
</Button>`;

function Index() {
	const { addNotification } = useContext(ToastNotificationsContext);

	return (
		<Page title="Toast Notifications">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Toast Notifications</H1>
			<Space xs={10} lg={30} />
			<p>
				Toast Notifications notify the user of a system occurrence. The
				notifications should have a consistent location in each
				application. There are 3 different types of notifications,
				<strong>info</strong>, <strong>success</strong>,{" "}
				<strong>error</strong>, <strong>warning</strong>.
			</p>
			<Space size={10} />
			<H2>Context</H2>
			<Space size={10} />
			<p>
				In order for notifications to work, the application has to be
				wrapped with the React Context component provided by Cherry.
			</p>
			<Space size={1} />
			<CodeBlock
				language="tsx"
				value={appWrap}
				description="Wrap everything with the ToastNotificationsProvider. Include also the ToastNotifications component as a child, it takes care of the notifications rendering. "
			/>
			<Space size={10} />
			<p>
				Notifications can be triggered from anywhere, in a button, input
				or after a certain event is executed. To create a new
				notification make use of the context.
			</p>
			<Space size={1} />
			<CodeBlock language="tsx" value={useContextCode} />
			<Space size={10} />
			<CodeBlock
				language="tsx"
				value={defaultNotification}
				description={
					<Button
						onClick={() => {
							addNotification("Default notification");
						}}
					>
						Default Notification
					</Button>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="tsx"
				value={successNotification}
				description={
					<Button
						onClick={() => {
							addNotification("Success notification", {
								color: "success",
								autoHide: 3500,
							});
						}}
					>
						Success Notification
					</Button>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="tsx"
				value={errorNotification}
				description={
					<Button
						onClick={() => {
							addNotification("Error notification", {
								color: "error",
								autoHide: 3500,
							});
						}}
					>
						Error Notification
					</Button>
				}
			/>
			<Space size={10} />
			<CodeBlock
				language="tsx"
				value={warningNotification}
				description={
					<Button
						onClick={() => {
							addNotification("Warning notification", {
								color: "warning",
								autoHide: 3500,
							});
						}}
					>
						Warning Notification
					</Button>
				}
			/>
			<Space size={20} />
			<H2 size="h3">addNotification Parameters</H2>
			<p>
				Below you can find the available parameters for the{" "}
				<strong>addNotification()</strong> function.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>text</td>
							<td>The first paramenter is the text content</td>
							<td>String</td>
						</tr>
						<tr>
							<td>config</td>
							<td>
								The second parameter is optional configuration
							</td>
							<td>Object</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={10} />
			<p>
				The optional configuration object takes a few properties listed
				below.
			</p>
			<TableOverflow>
				<table>
					<thead>
						<tr>
							<th>Property</th>
							<th>Description</th>
							<th>Type</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>autoHide</td>
							<td>Duration in milliseconds</td>
							<td>Number</td>
						</tr>
						<tr>
							<td>color</td>
							<td>Defines the notification color</td>
							<td>"info" | "error" | "success" | "warning"</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2 size="h3">ToastNotifications Props</H2>
			<p>
				Below you can find the available props for the{" "}
				<strong>{"<ToastNotifications />"}</strong> component.
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
							<td>align</td>
							<td>Horizontal alignment.</td>
							<td>"right" | "left" | "center"</td>
						</tr>
						<tr>
							<td>bottom</td>
							<td>
								Show notification from the bottom of the screen.
							</td>
							<td>Boolean</td>
						</tr>
					</tbody>
				</table>
			</TableOverflow>
			<Space size={20} />
			<H2 size="h3">All Variation</H2>
			<Space size={20} />
			<Flex gap>
				<Button
					onClick={() => {
						addNotification("Info notification", {
							autoHide: 3500,
						});
					}}
					frame
				>
					Info
				</Button>
				<Button
					onClick={() => {
						addNotification("Success notification", {
							color: "success",
							autoHide: 3500,
						});
					}}
					frame
				>
					Success
				</Button>
				<Button
					onClick={() => {
						addNotification("Error notification", {
							color: "error",
							autoHide: 3500,
						});
					}}
					frame
				>
					Error
				</Button>
				<Button
					onClick={() => {
						addNotification("Warning notification", {
							color: "warning",
							autoHide: 3500,
						});
					}}
					frame
				>
					Warning
				</Button>
			</Flex>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/grid"
					as="/docs/code/react-components/grid"
					prev
				>
					Grid Components
				</DocNav>
				<DocNav
					href="/docs/code/react-components/accordion"
					as="/docs/code/react-components/accordion"
					next
				>
					Accordion
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
