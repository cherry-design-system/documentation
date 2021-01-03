import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Burger } from "../Layout/Burger";
import { sidebarStyles } from "./Sidebar.styles";

function Sidebar({ className }) {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const router = useRouter();

	const localRef = React.createRef();

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
								<Link href="/documentation" as="/documentation">
									<a
										className={
											router.pathname === "/documentation"
												? "active"
												: ""
										}
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
								<Link
									href="/documentation/design"
									as="/documentation/design"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/documentation/design"
												? "active"
												: ""
										}
									>
										Introduction
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/documentation/design/colors"
									as="/documentation/design/colors"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/documentation/design/colors"
												? "active"
												: ""
										}
									>
										Colors
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/documentation/design/typography"
									as="/documentation/design/typography"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/documentation/design/typography"
												? "active"
												: ""
										}
									>
										Typography
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/documentation/design/buttons"
									as="/documentation/design/buttons"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/documentation/design/buttons"
												? "active"
												: ""
										}
									>
										Buttons
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/documentation/design/inputs"
									as="/documentation/design/inputs"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/documentation/design/inputs"
												? "active"
												: ""
										}
									>
										Inputs
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/documentation/design/spacing"
									as="/documentation/design/spacing"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/documentation/design/spacing"
												? "active"
												: ""
										}
									>
										Spacing
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/documentation/design/grid"
									as="/documentation/design/grid"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/documentation/design/grid"
												? "active"
												: ""
										}
									>
										Grid
									</a>
								</Link>
							</li>
							<li>
								<Link href="/documentation" as="/documentation">
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
								<Link
									href="/documentation/code"
									as="/documentation/code"
								>
									<a
										className={
											router.pathname ===
											"/documentation/code"
												? "active"
												: ""
										}
										onClick={() => setMenuOpen(false)}
									>
										Introduction
									</a>
								</Link>
							</li>
							<li>
								<Link href="/documentation" as="/documentation">
									<a onClick={() => setMenuOpen(false)}>
										Meta Tags
									</a>
								</Link>
							</li>
							<li>
								<strong>Sass</strong>
								<ul>
									<li>
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Buttons
											</a>
										</Link>
									</li>
									<li>
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Buttons
											</a>
										</Link>
									</li>
									<li>
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
											>
												Buttons
											</a>
										</Link>
									</li>
									<li>
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
										<Link
											href="/documentation"
											as="/documentation"
										>
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
								<Link
									href="/documentation/scale"
									as="/documentation/scale"
								>
									<a
										className={
											router.pathname ===
											"/documentation/scale"
												? "active"
												: ""
										}
										onClick={() => setMenuOpen(false)}
									>
										Introduction
									</a>
								</Link>
							</li>
							<li>
								<Link href="/documentation" as="/documentation">
									<a onClick={() => setMenuOpen(false)}>
										Design System
									</a>
								</Link>
							</li>
							<li>
								<Link href="/documentation" as="/documentation">
									<a onClick={() => setMenuOpen(false)}>
										Sass
									</a>
								</Link>
							</li>
							<li>
								<Link href="/documentation" as="/documentation">
									<a onClick={() => setMenuOpen(false)}>
										PostCSS
									</a>
								</Link>
							</li>
							<li>
								<Link href="/documentation" as="/documentation">
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
