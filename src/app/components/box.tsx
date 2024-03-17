"use client";
import React from "react";
import {
	Box as CherryBox,
	Flex,
	IconFigma,
	Theme,
	styledH5,
	styledStrong,
} from "cherry-styled-components/src/lib";
import styled from "styled-components";
import Link from "next/link";
import { IconLink } from "./icon-link";

interface StyledBoxProps {
	$title: string;
	$text?: string;
	$icon?: any;
	$iconLink?: any;
	href: string;
	target?: "_blank" | "_self" | "_parent" | "_top";
	theme?: Theme;
	children?: React.ReactNode;
}

const StyledBox = styled(Link)<StyledBoxProps>`
	cursor: pointer;
	flex: 1;
	margin: 0;
	padding: 20px;
	display: block;
	text-decoration: none;
	border: solid 1px ${({ theme }) => theme.colors.grayLight};
	border-radius: ${({ theme }) => theme.spacing.radius.lg};
	transition: all 0.3s ease;
	background: ${({ theme }) => theme.colors.light};
	box-shadow: ${({ theme }) => theme.shadows.xs};

	@media (hover: hover) {
		&:hover {
			border-color: ${({ theme }) => theme.colors.primary};

			& strong {
				color: ${({ theme }) => theme.colors.primaryDark};
			}
		}
	}
`;

const StyledSmallerBox = styled(StyledBox)`
	padding: 12px 20px 8px 35px;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	margin-left: -20px;
`;

const StyledTitle = styled.strong<StyledBoxProps>`
	color: ${({ theme }) => theme.colors.primary};
	${({ theme }) => styledH5(theme)};
	transition: all 0.3s ease;
	display: flex;
	flex-wrap: wrap;

	& svg {
		vertical-align: middle;
		width: 16px;
		margin: auto 5px auto 0;
	}
`;

const StyledSmallerTitle = styled(StyledTitle)`
	${({ theme }) => styledStrong(theme)};
`;

const StyledText = styled.span<StyledBoxProps>`
	color: ${({ theme }) => theme.colors.dark};
	margin: 0;
	padding: 10px 0 0 0;
	display: block;
`;

function Box({ ...props }: StyledBoxProps) {
	if (props.$iconLink) {
		return (
			<Flex $gap="none" $wrap="nowrap">
				<IconLink
					href={props.href}
					target={props.target}
					$bgColor="#000000"
				>
					{props.$iconLink}
				</IconLink>
				<StyledSmallerBox
					href={props.href}
					target={props.target}
					$title={props.$title}
					$text={props.$text}
				>
					<StyledSmallerTitle {...props}>
						{props.$icon && props.$icon}
						{props.$title}
					</StyledSmallerTitle>
					{props.$text && (
						<StyledText {...props}>{props.$text}</StyledText>
					)}
				</StyledSmallerBox>
			</Flex>
		);
	}

	return (
		<StyledBox
			href={props.href}
			target={props.target}
			$title={props.$title}
			$text={props.$text}
		>
			<StyledTitle {...props}>
				{props.$icon && props.$icon}
				{props.$title}
			</StyledTitle>
			{props.$text && <StyledText {...props}>{props.$text}</StyledText>}
		</StyledBox>
	);
}

export { Box };
