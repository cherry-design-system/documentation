import { css } from "@emotion/react";

export const labelStyles = (theme, error, success) => css`
	color: ${theme.colors.gray};
	display: inline-block;
	vertical-align: middle;
	padding-left: 7px;

	${error &&
	css`
		color: ${theme.colors.error};
	`};

	${success &&
	css`
		color: ${theme.colors.success};
	`};
`;
