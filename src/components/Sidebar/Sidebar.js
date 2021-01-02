import Link from "next/link";
import React, { useState } from "react";
import { Burger } from "../Layout/Burger";
import { sidebarStyles } from "./Sidebar.styles";

function Sidebar({ className }) {
	const [isMenuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<Burger
				isOpen={isMenuOpen}
				onClick={() => setMenuOpen(!isMenuOpen)}
			/>
			<div
				className={className}
				css={(theme) => sidebarStyles(theme, isMenuOpen)}
			>
				<ul>
					<li>
						<strong>Getting started</strong>
						<ul>
							<li>
								<Link href="/" as="/">
									<a
										className="active"
										onClick={() => setMenuOpen(false)}
									>
										Introduction
									</a>
								</Link>
							</li>
						</ul>
					</li>

					<li>
						<strong>Design</strong>
						<ul>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Introduction
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Colors
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Typography
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Button
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Inputs
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Spacing
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Grid
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Meta Images
									</a>
								</Link>
							</li>
						</ul>
					</li>

					<li>
						<strong>Code</strong>
						<ul>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Linting & Code Styles
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Meta Tags
									</a>
								</Link>
							</li>
							<li>
								<strong>Sass</strong>
								<ul>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Introduction
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Colors
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Typography
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Button
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Inputs
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Spacing
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Grid
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Breakpoints
											</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<strong>PostCSS</strong>
								<ul>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Introduction
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Colors
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Typography
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Button
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Inputs
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Spacing
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Grid
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Breakpoints
											</a>
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<strong>React Components</strong>
								<ul>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Introduction
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Colors
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Typography
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Button
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Inputs
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Spacing
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Grid
											</a>
										</Link>
									</li>
									<li>
										<Link href="/" as="/">
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Breakpoints
											</a>
										</Link>
									</li>
								</ul>
							</li>
						</ul>
					</li>

					<li>
						<strong>Scale</strong>
						<ul>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Introduction
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Design System
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										Sass
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										PostCSS
									</a>
								</Link>
							</li>
							<li>
								<Link href="/" as="/">
									<a onClick={() => setMenuOpen(false)}>
										React Components
									</a>
								</Link>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
}

export { Sidebar };
