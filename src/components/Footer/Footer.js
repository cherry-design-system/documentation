import React from "react";
import { Container, Space } from "../Layout";
import { Logo } from "../../assets/svg/Logo";
import { footerStyles } from "./Footer.styles";

function Footer({ className }) {
	return (
		<footer className={className} css={(theme) => footerStyles(theme)}>
			<Container textAlign="right">
				<Space xsSize={30} lgSize={80} />
				<Logo />
				<p>© Copyright 2021 - All rights reserved. </p>
				<Space xsSize={10} lgSize={70} />
			</Container>
		</footer>
	);
}

export { Footer };
