import { css } from "@emotion/react";

export const textStyles = (theme, maxWidth) => css`
	${maxWidth &&
	css`
		max-width: 420px;
	`}
`;
