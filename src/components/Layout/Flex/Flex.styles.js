import { css } from "@emotion/react";

export const flexStyles = (theme, inline, justifyContent, gap) => css`
	display: flex;

	${justifyContent &&
	css`
		justify-content: ${justifyContent};
	`}

	${inline &&
	css`
		display: inline-flex;
	`}

	${gap &&
	css`
		gap: 20px;
		flex-wrap: wrap;
	`}
`;
