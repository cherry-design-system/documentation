import React from "react";
import { Col, Container, H3, Row, Space } from "../Layout";
import { socialStyles } from "./Socials.styles";

function Socials() {
	return (
		<>
			<hr />
			<Space xs={20} lg={70} />
			<Container css={(theme) => socialStyles(theme)}>
				<Row>
					<Col xs={12} lg={6}>
						<H3 size="h5">Follow the creator</H3>
					</Col>
					<Col xs={12} lg={6}>
						<H3 size="h5">Join the community</H3>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export { Socials };
