import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1, Box, Link } from "../../../components/Layout";
import { DocNav, DocNavWrapper } from "../../../components/DocNav";
import Image from "next/image";

function Index({ posts = [] }) {
	return (
		<Page title="Email Templates">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Email Templates</H1>
			<Space xs={20} lg={30} />
			<p>
				FuzzyMail is a simple tool for generating beautiful email
				templates. Supporting old email clients while maintaining
				responsiveness. Fuzzymail is supported on over 60+ email
				clients. It follows Cherry conventions.
			</p>
			<Space size={10} />
			<Box noPadding>
				<a
					href="https://www.fuzzymail.co/?ref=cherry.design"
					target="_blank"
					rel="noreferrer"
				>
					<Image
						src="/img/docs/scale/fuzzymail.jpg"
						alt="FuzzyMail"
						width={1280}
						height={670}
					/>
				</a>
			</Box>
			<Space size={10} />
			<hr />
			<Space size={10} />
			<Link external href="https://www.fuzzymail.co/?ref=cherry.design">
				FuzzyMail
			</Link>
			<Space size={20} />
			<DocNavWrapper>
				<DocNav
					href="/docs/scale/react-apps"
					as="/docs/scale/react-apps"
					prev
				>
					React Apps
				</DocNav>
				<DocNav href="/docs" as="/docs" next>
					Docs Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
