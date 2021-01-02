import React from "react";
import { css } from "@emotion/react";
import { Page } from "../../../components/Pages";
import {
	Container,
	Space,
	H1,
	Row,
	Col,
	Box,
} from "../../../components/Layout";
import { Sidebar } from "../../../components/Sidebar";

function Index({ posts = [] }) {
	return (
		<Page title="Scale Documentation">
			<Container fluid>
				<Row gutterLg="medium">
					<Col xs={12} lg={3} fullScreen>
						<Sidebar />
					</Col>
					<Col xs={12} lg={9} fullScreen>
						<Space xsSize={20} />
						<H1 size="hero1">Scale introduction</H1>
						<Space xsSize="none" lgSize={10} />
						<p>
							Donec ullamcorper nulla non metus auctor fringilla.
							Maecenas faucibus mollis interdum. Duis mollis, est
							non commodo luctus, nisi erat porttitor ligula, eget
							lacinia odio sem nec elit. Aenean eu leo quam.
							Pellentesque ornare sem lacinia quam venenatis
							vestibulum. Vestibulum id ligula porta felis euismod
							semper. Sed posuere consectetur est at lobortis.
						</p>
					</Col>
				</Row>
			</Container>
		</Page>
	);
}

export default Index;
