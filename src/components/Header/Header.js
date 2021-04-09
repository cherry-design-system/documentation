import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "cherry-components";
import { Logo } from "../../assets/svg/Logo";
import { GitHub } from "../../assets/svg/GitHub";
import { headerStyles } from "./Header.styles";

function Header() {
	const [isLoaded, setIsLoaded] = useState(false);
	const [version, setVersion] = useState(null);

	const fetchGitHubVersion = async () => {
		await fetch(
			"https://raw.githubusercontent.com/cherry-design-system/react-components/main/package.json",
		)
			.then((response) => response.json())
			.then((data) => {
				setVersion(data.version);
			});
	};

	useEffect(() => {
		fetchGitHubVersion();
		return setIsLoaded(true);
	}, []);

	return (
		<header css={(theme) => headerStyles(theme, isLoaded)}>
			<Container className="container">
				<div className="inner-wrapper" id="header-inner">
					<Link href="/" as="/">
						<a className="logo">
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
							{version && (
								<small className="version">v{version}</small>
							)}
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
