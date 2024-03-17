"use client";
import React from "react";
import {
	Box as CherryBox,
	Theme,
	styledH5,
} from "cherry-styled-components/src/lib";
import styled from "styled-components";
import Link from "next/link";

interface StyledBoxProps {
	$title: string;
	$text: string;
	href: string;
	theme?: Theme;
	children?: React.ReactNode;
}

const StyledBox = styled(Link)<StyledBoxProps>`
	margin: 0;
	padding: 20px;
	display: block;
	text-decoration: none;
	border: solid 1px ${({ theme }) => theme.colors.grayLight};
	border-radius: ${({ theme }) => theme.spacing.radius.lg};
	transition: all 0.3s ease;

	@media (hover: hover) {
		&:hover {
			border-color: ${({ theme }) => theme.colors.primary};

			& strong {
				color: ${({ theme }) => theme.colors.primaryDark};
			}
		}
	}
`;

const StyledTitle = styled.strong<StyledBoxProps>`
	color: ${({ theme }) => theme.colors.primary};
	${({ theme }) => styledH5(theme)};
	transition: all 0.3s ease;
	display: block;
`;

const StyledText = styled.span<StyledBoxProps>`
	color: ${({ theme }) => theme.colors.dark};
	margin: 0;
	padding: 10px 0 0 0;
	display: block;
`;

function Box({ ...props }: StyledBoxProps) {
	return (
		<StyledBox href={props.href} $title={props.$title} $text={props.$text}>
			<StyledTitle {...props}>{props.$title}</StyledTitle>
			<StyledText {...props}>{props.$text}</StyledText>
		</StyledBox>
	);
}

export { Box };
