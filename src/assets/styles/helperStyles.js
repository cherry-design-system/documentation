import { css } from "@emotion/react";

export const resetButtonStyles = css`
	appearance: none;
	background: none;
	border: none;
	border-radius: 0;
	cursor: pointer;
`;

export const noListStyles = css`
	list-style: none;
	margin: 0;
	padding: 0;

	& li {
		padding: 0;
		margin: 0;
	}
`;
