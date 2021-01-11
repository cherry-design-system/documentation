import { css } from "@emotion/react";
import { rgba } from "polished";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const footerStyles = (theme) => css`
	background: ${rgba(theme.colors.grayLight, 0.3)};
	text-align: center;

	${mq(Breakpoints.lg)} {
		text-align: left;
	}
`;

export const footerLeftColStyles = (theme) => css`
	& [data-icon-link] {
		display: inline-block;
		margin-right: 20px;
	}

	& a:not([data-icon-link]) {
		font-weight: 600;
	}
`;

export const footerRightColStyles = (theme) => css`
	${mq(Breakpoints.lg)} {
		text-align: right;
	}
`;
