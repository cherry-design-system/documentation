import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const inputStyles = (theme, type, variant, size, disabled) => css`
	${disabled &&
	css`
		background: ${theme.colors.grayLight};
		color: ${theme.colors.gray};
		cursor: not-allowed;
	`}
`;
