import React from "react";
import { Space, H1, H2 } from "cherry-components";
import { Page } from "../../../../components/Pages";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const installCode = `npm install cherry-components`;
const componentsCode = `import {
	Accordion,
	Button,
	Container,
	FontStyle,
	Row,
	Col,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	RangeSlider,
	Select,
	Textarea,
	ToggleInput,
	Input,
	Label,
	MinHeight,
	Space,
	TableOverflow,
	ToastNotificationsContext,
	ToastNotificationsProvider,
	ToastNotifications,
	globalStyles
} from "cherry-components";`;

function Index() {
	return (
		<Page title="Install Cherry Components">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Install Cherry Components</H1>
			<Space xs={10} lg={30} />
			<p>
				Cherry components are built in React and styled with Emotion.
				Each element of the design system is a component on it's own.
				Components can be personalized by passing various props to
				change the states and styles.
			</p>
			<Space size={1} />
			<CodeBlock language="shell" value={installCode} />
			<Space size={10} />
			<H2>Component List</H2>
			<p>
				To import elements from the design system, include{" "}
				<strong>cherry-components</strong> library in your packages.
			</p>
			<Space size={1} />
			<CodeBlock
				language="jsx"
				value={componentsCode}
				description="The library includes all the elements from the design system."
			/>
			<Space size={10} />
			<p>
				If you don't need all the components, import only what you use.
			</p>
			<p>That's it 🎉 you are ready to use Cherry.</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/postcss/theme"
					as="/docs/code/postcss/theme"
					prev
				>
					PostCSS Theme
				</DocNav>
				<DocNav
					href="/docs/code/react-components/colors"
					as="/docs/code/react-components/colors"
					next
				>
					Emotion Colors
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
