import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const inputStyles = (
	theme,
	type,
	variant,
	size,
	disabled,
	success,
	error,
) => css`
	appearance: none;
	border: none;
	transition: all 0.3s ease;
	line-height: 1;

	${size === "default"
		? css`
				font-size: ${theme.sizes.input.size.mobile};
				line-height: 1;

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.input.size.desktop};
				}
		  `
		: css`
				font-size: ${theme.sizes.inputBig.size.mobile};

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.inputBig.size.desktop};
				}
		  `}

	${disabled &&
	css`
		background: ${theme.colors.grayLight};
		color: ${theme.colors.gray};
		cursor: not-allowed;
	`}

	${(type === "text") |
		(type === "number") |
		(type === "phone") |
		(type === "email") &&
	css`
		border-radius: 6px;
		padding: 15px 25px;
		background: ${theme.colors.light};
		border: solid 2px ${theme.colors.grayLight};
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};

		${error &&
		css`
			border-color: ${theme.colors.error};
		`}

		${success &&
		css`
			border-color: ${theme.colors.success};
		`}

			@media (hover: hover) {
			&:hover:not([disabled]) {
				border-color: ${theme.colors.secondary};
			}
		}

		&:focus:not([disabled]) {
			border-color: ${theme.colors.secondary};
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
			outline: none;
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}
	`}
`;
