import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Burger } from "../Layout/Burger";
import { sidebarStyles } from "./Sidebar.styles";

function Sidebar({ className }) {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const router = useRouter();

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
								<Link href="/docs" as="/docs">
									<a
										className={
											router.pathname === "/docs"
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
								<Link href="/docs/design" as="/docs/design">
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname === "/docs/design"
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
									href="/docs/design/colors"
									as="/docs/design/colors"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/design/colors"
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
									href="/docs/design/typography"
									as="/docs/design/typography"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/design/typography"
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
									href="/docs/design/buttons"
									as="/docs/design/buttons"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/design/buttons"
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
									href="/docs/design/inputs"
									as="/docs/design/inputs"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/design/inputs"
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
									href="/docs/design/spacing"
									as="/docs/design/spacing"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/design/spacing"
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
									href="/docs/design/grid"
									as="/docs/design/grid"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/design/grid"
												? "active"
												: ""
										}
									>
										Grid
									</a>
								</Link>
							</li>
							<li>
								<Link
									href="/docs/design/meta-images"
									as="/docs/design/meta-images"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/design/meta-images"
												? "active"
												: ""
										}
									>
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
								<Link href="/docs/code" as="/docs/code">
									<a
										className={
											router.pathname === "/docs/code"
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
								<Link
									href="/docs/code/meta-tags"
									as="/docs/code/meta-tags"
								>
									<a
										onClick={() => setMenuOpen(false)}
										className={
											router.pathname ===
											"/docs/code/meta-tags"
												? "active"
												: ""
										}
									>
										Meta Tags
									</a>
								</Link>
							</li>
							<li>
								<strong>Sass</strong>
								<ul>
									<li>
										<Link
											href="/docs/code/sass"
											as="/docs/code/sass"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/sass"
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
											href="/docs/code/sass/colors"
											as="/docs/code/sass/colors"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/sass/colors"
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
											href="/docs/code/sass/typography"
											as="/docs/code/sass/typography"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/sass/typography"
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
											href="/docs/code/sass/buttons"
											as="/docs/code/sass/buttons"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/sass/buttons"
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
											href="/docs/code/sass/inputs"
											as="/docs/code/sass/inputs"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/sass/inputs"
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
											href="/docs/code/sass/spacing"
											as="/docs/code/sass/spacing"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/sass/spacing"
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
											href="/docs/code/sass/grid"
											as="/docs/code/sass/grid"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/sass/grid"
														? "active"
														: ""
												}
											>
												Grid
											</a>
										</Link>
									</li>
									<li>
										<Link href="/docs" as="/docs">
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
											href="/docs/code/postcss"
											as="/docs/code/postcss"
										>
											<a
												onClick={() =>
													setMenuOpen(false)
												}
												className={
													router.pathname ===
													"/docs/code/postcss"
														? "active"
														: ""
												}
											>
												Introduction
											</a>
										</Link>
									</li>
									<li>
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
										<Link href="/docs" as="/docs">
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
								<Link href="/docs/scale" as="/docs/scale">
									<a
										className={
											router.pathname === "/docs/scale"
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
								<Link href="/docs" as="/docs">
									<a onClick={() => setMenuOpen(false)}>
										Design System
									</a>
								</Link>
							</li>
							<li>
								<Link href="/docs" as="/docs">
									<a onClick={() => setMenuOpen(false)}>
										Sass
									</a>
								</Link>
							</li>
							<li>
								<Link href="/docs" as="/docs">
									<a onClick={() => setMenuOpen(false)}>
										PostCSS
									</a>
								</Link>
							</li>
							<li>
								<Link href="/docs" as="/docs">
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
