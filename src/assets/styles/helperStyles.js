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

export const shadowStyles = css`
	box-shadow: 0px 13px 31px rgba(12, 20, 33, 0.04),
		0px 9.45547px 20.8947px rgba(12, 20, 33, 0.032375),
		0px 6.58125px 13.5141px rgba(12, 20, 33, 0.027),
		0px 4.31641px 8.38574px rgba(12, 20, 33, 0.023125),
		0px 2.6px 5.0375px rgba(12, 20, 33, 0.02),
		0px 1.37109px 2.99707px rgba(12, 20, 33, 0.016875),
		0px 0.56875px 1.79219px rgba(12, 20, 33, 0.013),
		inset 0px 2px 1px #ffffff;
`;
