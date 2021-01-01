import React from "react";
import Link from "next/link";
import { Logo } from "../../assets/svg/Logo";
import { GitHub } from "../../assets/svg/GitHub";
import { Container } from "../Layout";
import { headerStyles } from "./Header.styles";

function Header() {
	return (
		<header css={(theme) => headerStyles(theme)}>
			<Container>
				<div data-inner-wrapper>
					<Link href="/" as="/">
						<a>
							<Logo />
						</a>
					</Link>
					<ul>
						<li>
							<Link href="/" as="/">
								<a>
									<span data-desktop>Documentation</span>
									<span data-mobile>Docs</span>
								</a>
							</Link>
						</li>
						<li>
							<a href="#">
								<GitHub />
							</a>
						</li>
					</ul>
				</div>
			</Container>
		</header>
	);
}

export { Header };
