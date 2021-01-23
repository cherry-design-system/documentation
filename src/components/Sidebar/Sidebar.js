import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Burger } from "../Layout/Burger";
import { navigationData } from "./navigation-data";
import { sidebarStyles } from "./Sidebar.styles";
import clsx from "clsx";

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
					{navigationData.map((item) => (
						<li key={item.label}>
							<strong>{item.label}</strong>
							{item.children && (
								<ul>
									{item.children.map(
										(childItem) =>
											childItem.href && (
												<li key={childItem.href}>
													<Link
														href={childItem.href}
														as={childItem.href}
													>
														<a
															href={
																childItem.href
															}
															className={
																router.pathname ===
																childItem.href
																	? "active"
																	: ""
															}
														>
															{childItem.label}
														</a>
													</Link>
												</li>
											),
									)}
									{item.children.map(
										(childItem) =>
											!childItem.href && (
												<li key={childItem.label}>
													<strong>
														{childItem.label}
													</strong>
													{childItem.children && (
														<ul>
															{childItem.children.map(
																(subItem) => (
																	<li
																		key={
																			subItem.href
																		}
																	>
																		<Link
																			href={
																				subItem.href
																			}
																			as={
																				subItem.href
																			}
																		>
																			<a
																				href={
																					subItem.href
																				}
																				onClick={() =>
																					setMenuOpen(
																						false,
																					)
																				}
																				className={
																					router.pathname ===
																					subItem.href
																						? "active"
																						: ""
																				}
																			>
																				{
																					subItem.label
																				}
																			</a>
																		</Link>
																	</li>
																),
															)}
														</ul>
													)}
												</li>
											),
									)}
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export { Sidebar };
