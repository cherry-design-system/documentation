import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1 } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";

function Index({ posts = [] }) {
	return (
		<Page title="Scale Documentation">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Scale</H1>
			<Space xs={20} lg={30} />
			<p>
				Cherry comes as a template for your design system. It contains
				only the essential elements and patterns for a modern website.
				Cherry it is meant to be extended and used as a starting point
				for your own design system. It follows the same naming
				convention from Design to Code and carries the same patterns
				across different technologies.
			</p>
			<p>
				All Cherry repositories are free and open-source. You can
				implement the source code directly in your development
				environment.
			</p>
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/react-components/theme"
					as="/docs/code/react-components/theme"
					prev
				>
					Emotion Theme
				</DocNav>
				<DocNav href="/docs" as="/docs" next>
					Docs Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
