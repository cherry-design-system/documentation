import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../../components/Pages";
import { Space, H1 } from "../../../components/Layout";

function Index({ posts = [] }) {
	return (
		<Page title="Code Documentation">
			<Space xsSize={20} lgSize={40} />
			<H1 size="hero1">Code introduction</H1>
			<Space xsSize={10} lgSize={30} />
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
