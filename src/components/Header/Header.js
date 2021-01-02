import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Logo } from "../../assets/svg/Logo";
import { GitHub } from "../../assets/svg/GitHub";
import { Container } from "../Layout";
import { headerStyles } from "./Header.styles";

function Header() {
	const router = useRouter();

	return (
		<header css={(theme) => headerStyles(theme)}>
			<Container
				fluid={router.pathname === "/documentation" ? true : false}
			>
				<div data-inner-wrapper>
					<Link href="/" as="/">
						<a>
							<Logo />
						</a>
					</Link>
					<ul>
						<li>
							<Link href="/documentation" as="/documentation">
								<a>
									<span data-desktop>Documentation</span>
									<span data-mobile>Docs</span>
								</a>
							</Link>
						</li>
						<li>
							<a href="#" data-github>
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
