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
	vertical-align: middle;
	margin: 0;

	${size === "default"
		? css`
				font-size: ${theme.sizes.input.size.mobile};

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
	`};

	&:focus:not([disabled]) {
		border-color: ${theme.colors.secondary};
		box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		outline: none;
	}

	&:active:not([disabled]) {
		box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
	}

	${(type === "checkbox") | (type === "radio") &&
	css`
		padding: 0;
		width: 22px;
		height: 22px;
		border-radius: 6px;
		border: solid 2px ${theme.colors.grayLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				border-color: ${theme.colors.secondary};
			}
		}
	`};

	${disabled &&
	css`
		background: ${theme.colors.grayLight};
		border-color: ${theme.colors.gray};
		color: ${theme.colors.gray};
		cursor: not-allowed;
	`}

	${type === "radio" &&
	css`
		border-radius: 50%;
	`}
`;

export const labelStyles = (theme, error, success) => css`
	color: ${theme.colors.gray};
	display: inline-block;
	vertical-align: middle;
	padding-left: 7px;
`;

export const checkboxStyles = (theme, type) => css`
	position: relative;
	display: inline-block;
	line-height: 1;

	${type === "checkbox" &&
	css`
		& input:checked ~ svg {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}

		& input:disabled ~ svg {
			opacity: 0;
		}

		& svg {
			position: absolute;
			top: 6px;
			left: 5px;
			opacity: 0;
			pointer-events: none;
			transform: translate3d(0, 0, 0) scale(0.7);
		}
	`}

	${type === "radio" &&
	css`
		& input:checked ~ em {
			opacity: 1;
			transform: translate3d(0, 0, 0) scale(1);
		}

		& em {
			display: block;
			position: absolute;
			left: 6px;
			top: 6px;
			width: 10px;
			height: 10px;
			border-radius: 50%;
			background: ${theme.colors.secondary};
			transition: all 0.3s ease;
			opacity: 0;
			pointer-events: none;
			transform: translate3d(0, 0, 0) scale(0.7);
		}
	`}
`;
