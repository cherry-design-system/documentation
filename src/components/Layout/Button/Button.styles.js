import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const buttonStyles = (theme, variant, size, frame, disabled) => css`
	${resetButtonStyles};

	${size === "default"
		? css`
				font-size: ${theme.sizes.button.size.mobile};

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.button.size.desktop};
				}
		  `
		: css`
				font-size: ${theme.sizes.buttonBig.size.mobile};

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.buttonBig.size.desktop};
				}
		  `}

	${variant === "primary" &&
	!frame &&
	css`
		padding: 15px 25px;
		border-radius: 100px;
		background: ${theme.colors.primary};
		color: ${theme.colors.light};
		font-weight: 600;
		box-shadow: 0 0 0 0 ${theme.colors.primaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				background: ${theme.colors.primaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
		}
	`}

	${variant === "primary" &&
	frame &&
	css`
		padding: 15px 25px;
		border-radius: 100px;
		border: solid 2px ${theme.colors.primary};
		color: ${theme.colors.primary};
		font-weight: 600;
		box-shadow: 0 0 0 0 ${theme.colors.primaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				border: solid 2px ${theme.colors.primaryDark};
				color: ${theme.colors.primaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
		}
	`}

	${variant === "secondary" &&
	!frame &&
	css`
		padding: 15px 25px;
		border-radius: 100px;
		background: ${theme.colors.secondary};
		color: ${theme.colors.light};
		font-weight: 600;
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				background: ${theme.colors.secondaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}
	`}

	${variant === "secondary" &&
	frame &&
	css`
		padding: 15px 25px;
		border-radius: 100px;
		border: solid 2px ${theme.colors.secondary};
		color: ${theme.colors.secondary};
		font-weight: 600;
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				border: solid 2px ${theme.colors.secondaryDark};
				color: ${theme.colors.secondaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
		}
	`}

	${variant === "tertiary" &&
	!frame &&
	css`
		padding: 15px 25px;
		border-radius: 100px;
		background: ${theme.colors.tertiary};
		color: ${theme.colors.light};
		font-weight: 600;
		box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				background: ${theme.colors.tertiaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
		}
	`}

	${variant === "tertiary" &&
	frame &&
	css`
		padding: 15px 25px;
		border-radius: 100px;
		border: solid 2px ${theme.colors.tertiary};
		color: ${theme.colors.tertiary};
		font-weight: 600;
		box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};

		@media (hover: hover) {
			&:hover:not([disabled]) {
				border: solid 2px ${theme.colors.tertiaryDark};
				color: ${theme.colors.tertiaryDark};
			}
		}

		&:focus:not([disabled]) {
			box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
		}

		&:active:not([disabled]) {
			box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
		}
	`}

	${disabled &&
	!frame &&
	css`
		background: ${theme.colors.grayLight};
		color: ${theme.colors.gray};
		cursor: not-allowed;
	`}

	${disabled &&
	frame &&
	css`
		border: solid 2px ${theme.colors.grayLight};
		color: ${theme.colors.gray};
		cursor: not-allowed;
	`}
`;
