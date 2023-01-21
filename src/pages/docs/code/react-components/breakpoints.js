import React from "react";
import { Space, H1, H2 } from "cherry-components";
import { Page } from "../../../../components/Pages";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const mqCode = `import { localTheme as theme } from "./theme";
const breakpoints = theme.spacing.breakpoints;

const Breakpoints = {
	xs: 0,
	sm: 1,
	md: 2,
	lg: 3,
	xl: 4,
	xxl: 5,
	xxxl: 6,
};

function mq(minWidth) {
	return \`@media screen and (min-width: \${breakpoints[minWidth]}px)\`;
}

export { mq, Breakpoints };
`;

const xsCode = `\${mq(Breakpoints.xs)} {
	// Media query for the Extra Small size = 0px
}`;

const smCode = `\${mq(Breakpoints.sm)} {
	// Media query for the Small size = 576px
}`;

const mdCode = `\${mq(Breakpoints.md)} {
	// Media query for the Medium size = 768px
}`;

const lgCode = `\${mq(Breakpoints.lg)} {
	// Media query for the Large size = 992px
}`;

const xlCode = `\${mq(Breakpoints.xl)} {
	// Media query for the XL Large size = 1200px
}`;

const xxlCode = `\${mq(Breakpoints.xxl)} {
	// Media query for the XXL Large size = 1440px
}`;

const xxxlCode = `\${mq(Breakpoints.xxxl)} {
	// Media query for the XXXL Large size = 1920px
}`;

function Index() {
	return (
		<Page title="Emotion Breakpoints">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Emotion Breakpoints</H1>
			<Space xs={1} lg={30} />
			<p>
				Responsive web design is a web design method that enables the
				website to fit the screens of different devices automatically.
				Breakpoints define the screen size of the device. Cherry is
				built with the mobile first approach and uses Emotion to
				generate styles.
			</p>
			<Space size={1} />
			<CodeBlock language="jsx" value={mqCode} />
			<Space size={1} />
			<Space size={1} />
			<CodeBlock language="jsx" value={xsCode} />
			<Space size={1} />
			<CodeBlock language="jsx" value={smCode} />
			<Space size={1} />
			<CodeBlock language="jsx" value={mdCode} />
			<Space size={1} />
			<CodeBlock
				language="jsx"
				value={lgCode}
				description={<H2 size="h6">🖥 Desktop starts here</H2>}
			/>
			<Space size={10} />
			<CodeBlock language="jsx" value={xlCode} />
			<Space size={1} />
			<CodeBlock language="jsx" value={xxlCode} />
			<Space size={1} />
			<CodeBlock language="jsx" value={xxxlCode} />
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/toast-notifications"
					as="/docs/code/react-components/toast-notifications"
					prev
				>
					Toast Notifications
				</DocNav>
				<DocNav
					href="/docs/code/react-components/theme"
					as="/docs/code/react-components/theme"
					next
				>
					Emotion Theme
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
