"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { mq, Container, Flex } from "cherry-styled-components/src/lib";
import { Search } from "./search";
import { IconCherry, IconGitHub } from "./icons";
import { Theme } from "cherry-styled-components/src/lib";
import { rgba } from "polished";

const StyledHeader = styled.header<{ theme: Theme }>`
	background: ${({ theme }) =>
		theme.isDark
			? rgba(theme.colors.grayLight, 0.7)
			: rgba(theme.colors.light, 0.7)};
	border-radius: 100px;
	max-width: calc(100% - 40px);
	margin: 20px auto 0;
	position: sticky;
	top: 20px;
	z-index: 100;
	box-shadow: ${({ theme }) => theme.shadows.lg};
	backdrop-filter: blur(10px);

	${mq("lg")} {
		margin: 40px auto 0;
		max-width: 640px;
	}

	& a {
		display: inline-flex;
	}
`;

const StyledBg = styled.span<{ theme: Theme }>`
	width: 100vw;
	height: 100svh;
	background: url("/gradient.png") no-repeat;
	background-position: top;
	background-size: contain;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 0;
	opacity: 0.3;
	position: none;
`;

const StyledNav = styled.nav<{ theme: Theme }>`
	display: flex;
	gap: 20px;
	margin: auto 0;
`;

const StyledLink = styled(Link)<{ theme: Theme }>`
	display: inline-flex;
	vertical-align: middle;
	text-decoration: none;
	font-weight: 700;
	color: ${({ theme }) =>
		theme.isDark ? theme.colors.dark : theme.colors.dark};
	margin: auto 0;
	transition: all 0.3s ease;

	& img,
	& svg path {
		transition: all 0.3s ease;
	}

	& .logo {
		width: 148px;
		height: auto;
	}

	@media (hover: hover) {
		&:hover {
			color: ${({ theme }) =>
				theme.isDark
					? theme.colors.primaryLight
					: theme.colors.primaryDark};

			& svg:not(.logo) {
				& path {
					fill: ${({ theme }) =>
						theme.isDark
							? theme.colors.primaryLight
							: theme.colors.primaryDark};
				}
			}
		}
	}

	& svg:not(.logo) {
		& path {
			fill: ${({ theme }) =>
				theme.isDark ? theme.colors.dark : theme.colors.primary};
		}
	}

	&:active {
		& svg,
		& img {
			transform: scale(0.95);
		}
	}
`;

function Header() {
	return (
		<>
			<StyledBg />
			<StyledHeader>
				<Container $lgPadding={20}>
					<Flex $justifyContent="space-between">
						<StyledLink href="/" aria-label="Cherry Logo">
							<IconCherry className="logo" />
						</StyledLink>
						<StyledNav>
							<Search />
							<StyledLink href="/docs" aria-label="Documentation">
								Docs
							</StyledLink>
							<StyledLink
								href="https://github.com/cherry-design-system/styled-components"
								target="_blank"
								aria-label="GitHub Repository"
							>
								<IconGitHub />
							</StyledLink>
						</StyledNav>
					</Flex>
				</Container>
			</StyledHeader>
		</>
	);
}

export { Header };
