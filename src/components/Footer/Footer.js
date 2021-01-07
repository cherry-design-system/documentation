import React from "react";
import { useRouter } from "next/router";
import { Container, Space } from "../Layout";
import { Logo } from "../../assets/svg/Logo";
import { footerStyles } from "./Footer.styles";

function Footer({ className }) {
	const router = useRouter();

	return (
		<footer className={className} css={(theme) => footerStyles(theme)}>
			<Container fluid={router.pathname.includes("/docs")}>
				<Space xs={40} lg={80} />
				<Logo />
				<p>© Copyright 2021 - All rights reserved. </p>
				<Space xs={30} lg={70} />
			</Container>
		</footer>
	);
}

export { Footer };
