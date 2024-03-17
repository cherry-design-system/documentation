"use client";
import React from "react";
import styled from "styled-components";
import { Theme } from "cherry-styled-components/src/lib";

interface PreviewTileProps {
	$title: string;
	$subTitle: string;
	$rightTitle: string;
	$rightSubTitle: string;
	$bgColor?: string;
	children?: React.ReactNode;
	theme?: Theme;
}

const StyledPreviewTile = styled.div<PreviewTileProps>`
	background: ${({ theme }) => theme.colors.light};
	display: flex;
	flex-wrap: wrap;
	border-radius: ${({ theme }) => theme.spacing.radius.lg};
	border: solid 1px ${({ theme }) => theme.colors.grayLight};
	overflow: clip;
	box-shadow: ${({ theme }) => theme.shadows.xs};
`;

const StyledCenterContainer = styled.div<PreviewTileProps>`
	display: flex;
	margin: auto;
	width: 100%;
	height: 150px;
	background: ${({ theme, $bgColor }) =>
		($bgColor && $bgColor) || theme.colors.grayLight};
	border-bottom: solid 1px ${({ theme }) => theme.colors.grayLight};
`;

const StyledContent = styled.div<PreviewTileProps>`
	padding: 20px;
	width: 100%;

	& span {
		display: block;

		&.highlight {
			padding: 5px 0 0 0;
			color: ${({ theme }) => theme.colors.info};
			font-family: ${({ theme }) => theme.fonts.mono};
		}
	}
`;

function PreviewTile({ ...props }: PreviewTileProps) {
	return (
		<StyledPreviewTile {...props}>
			<StyledCenterContainer {...props}>
				{props.children}
			</StyledCenterContainer>
			<StyledContent {...props}>
				<strong>{props.$title}</strong>
				<span className="highlight">{props.$subTitle}</span>
			</StyledContent>
		</StyledPreviewTile>
	);
}

export { PreviewTile };
