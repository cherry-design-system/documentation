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
			<Container fluid={router.pathname.includes("/docs")}>
				<div className="inner-wrapper">
					<Link href="/" as="/">
						<a>
							<Logo />
						</a>
					</Link>
					<ul>
						<li>
							<Link href="/docs" as="/docs">
								<a>
									<span className="desktop">
										Documentation
									</span>
									<span className="mobile">Docs</span>
								</a>
							</Link>
						</li>
						<li>
							<a
								href="https://github.com/cherry-design-system/?ref=cherry.design"
								target="_blank"
								rel="noopener noreferrer"
								className="github"
							>
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
