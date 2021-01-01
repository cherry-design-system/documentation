import { css } from "@emotion/react";

export const resetButtonStyles = css`
	appearance: none;
	background: none;
	border: none;
	border-radius: 0;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;

export const resetListStyles = css`
	list-style: none;
	margin: 0;
	padding: 0;

	& li {
		padding: 0;
		margin: 0;
	}
`;
