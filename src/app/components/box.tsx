"use client";
import React from "react";
import { Box as CherryBox, styledH5 } from "cherry-styled-components/src/lib";
import styled from "styled-components";
import Link from "next/link";

interface StyledBoxProps {
	title: string;
	text: string;
	href: string;
}

const StyledBox = styled(CherryBox)`
	padding: 20px;

	& a:not([class]) {
		text-decoration: none;
		${({ theme }) => styledH5(theme)};
	}

	& p {
		margin: 0;
		padding: 10px 0 0 0;
	}
`;

function Box({ title, text, href }: StyledBoxProps) {
	return (
		<StyledBox>
			<Link href={href}>{title}</Link>
			<p>{text}</p>
		</StyledBox>
	);
}

export { Box };
