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
	display: flex;
	border-radius: ${({ theme }) => theme.spacing.radius.xs};
	border: 1px solid ${({ theme }) => theme.colors.grayLight};
`;

const StyledCenterContainer = styled.div<PreviewTileProps>`
	display: flex;
	margin: auto;
`;

const StyledContent = styled.div<PreviewTileProps>``;

function PreviewTile({ ...props }: PreviewTileProps) {
	return (
		<StyledPreviewTile {...props}>
			<StyledCenterContainer {...props}>
				{props.children}
			</StyledCenterContainer>
			<StyledContent {...props}>
				<ul>
					<li>
						{props.$title}
						<span>{props.$subTitle}</span>
					</li>
					<li>
						{props.$rightTitle}
						<span><span>{props.$rightSubTitle}</span></span>
					</li>
				</ul>
			</StyledContent>
		</StyledPreviewTile>
	);
}

export { PreviewTile };
