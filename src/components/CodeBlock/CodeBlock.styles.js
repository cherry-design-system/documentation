import { css } from "@emotion/react";
import { darken } from "polished";

export const syntaxWrapperStyles = (theme) => css`
	& pre {
		margin: 10px 0 !important;
		font-family: monospace !important;
		background: ${darken(0.1, "#111827")} !important;

		& code {
			font-family: monospace !important;
			background: ${darken(0.1, "#111827")} !important;
		}
	}
`;

export const boxDescriptionStyles = (theme) => css`
	border: solid 1px ${theme.colors.grayLight};
	border-bottom-left-radius: 12px;
	border-bottom-right-radius: 12px;
	overflow: hidden;
	margin-top: -20px;
	padding: 30px 20px 20px 20px;

	& p:only-of-type {
		padding: 0;
		margin: 0;
	}

	& blockquote {
		padding: 0;
		margin: 0;
	}
`;
