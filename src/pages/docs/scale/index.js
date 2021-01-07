import React from "react";
import { Page } from "../../../components/Pages";
import { Space, H1 } from "../../../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page title="Scale Documentation">
			<Space xs={20} lg={40} />
			<H1 size="hero1">Scale</H1>
			<Space xs={20} lg={30} />
			<p>
				Donec ullamcorper nulla non metus auctor fringilla. Maecenas
				faucibus mollis interdum. Duis mollis, est non commodo luctus,
				nisi erat porttitor ligula, eget lacinia odio sem nec elit.
				Aenean eu leo quam. Pellentesque ornare sem lacinia quam
				venenatis vestibulum. Vestibulum id ligula porta felis euismod
				semper. Sed posuere consectetur est at lobortis.
			</p>
		</Page>
	);
}

export default Index;
