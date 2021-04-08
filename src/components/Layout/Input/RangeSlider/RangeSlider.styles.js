import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../../assets/styles/helperStyles";

export const rangeSliderStyles = (theme, size, variant, disabled) => css`
	padding: 0;
	height: 10px;
	font-size: 0;
	box-shadow: none;
	border: none;

	&::-webkit-slider-runnable-track {
		width: 100%;
		cursor: pointer;
		background: ${theme.colors.light};
		border-radius: 25px;
		border: 2px solid ${theme.colors.grayLight};
		transition: all 0.3s ease;

		${variant === "primary" &&
		css`
			box-shadow: 0 0 0 0 ${theme.colors.primaryLight};
		`}

		${variant === "secondary" &&
		css`
			box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
		`}

		${variant === "tertiary" &&
		css`
			box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};
		`}
	}

	&::-webkit-slider-thumb {
		${resetButtonStyles}
		border: 0 solid transparent;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;

		${variant === "primary" &&
		css`
			background: ${theme.colors.primary};
			box-shadow: 0 0 0 0 ${theme.colors.primaryLight};
		`}

		${variant === "secondary" &&
		css`
			background: ${theme.colors.secondary};
			box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
		`}

		${variant === "tertiary" &&
		css`
			background: ${theme.colors.tertiary};
			box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};
		`}
	}

	&::-moz-range-track {
		width: 100%;
		height: 6px;
		cursor: pointer;
		background: ${theme.colors.light};
		border-radius: 25px;
		border: 2px solid ${theme.colors.grayLight};
		transition: all 0.3s ease;

		${variant === "primary" &&
		css`
			box-shadow: 0 0 0 0 ${theme.colors.primaryLight};
		`}

		${variant === "secondary" &&
		css`
			box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
		`}

		${variant === "tertiary" &&
		css`
			box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};
		`}
	}

	&::-moz-range-thumb {
		border: 0 solid transparent;
		height: 22px;
		width: 22px;
		border-radius: 50%;
		cursor: pointer;
		transition: all 0.3s ease;

		${variant === "primary" &&
		css`
			background: ${theme.colors.primary};
			box-shadow: 0 0 0 0 ${theme.colors.primaryLight};
		`}

		${variant === "secondary" &&
		css`
			background: ${theme.colors.secondary};
			box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
		`}

		${variant === "tertiary" &&
		css`
			background: ${theme.colors.tertiary};
			box-shadow: 0 0 0 0 ${theme.colors.tertiaryLight};
		`}
	}

	@media (hover: hover) {
		&:hover:not([disabled]) {
			&::-webkit-slider-runnable-track {
				${variant === "primary" &&
				css`
					border-color: ${theme.colors.primary};
				`}

				${variant === "secondary" &&
				css`
					border-color: ${theme.colors.secondary};
				`}

				${variant === "tertiary" &&
				css`
					border-color: ${theme.colors.tertiary};
				`}
			}

			&::-moz-range-track {
				${variant === "primary" &&
				css`
					border-color: ${theme.colors.secondary};
				`}

				${variant === "secondary" &&
				css`
					border-color: ${theme.colors.secondary};
				`}

				${variant === "tertiary" &&
				css`
					border-color: ${theme.colors.tertiary};
				`}
			}
		}
	}

	&:focus:not([disabled]) {
		box-shadow: none;

		&::-webkit-slider-runnable-track {
			background: ${theme.colors.light};
			border-color: ${theme.colors.secondary};
			box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};

			${variant === "primary" &&
			css`
				border-color: ${theme.colors.primary};
				box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
			`}

			${variant === "secondary" &&
			css`
				border-color: ${theme.colors.secondary};
				box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
			`}

				${variant === "tertiary" &&
			css`
				border-color: ${theme.colors.tertiary};
				box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
			`}
		}

		&::-webkit-slider-thumb {
			border-color: ${theme.colors.grayLight};
			outline: none;

			${variant === "primary" &&
			css`
				box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
			`}

			${variant === "secondary" &&
			css`
				box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
			`}

			${variant === "tertiary" &&
			css`
				box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
			`}
		}

		&::-moz-range-track {
			${variant === "primary" &&
			css`
				border-color: ${theme.colors.light};
				box-shadow: 0 0 0 4px ${theme.colors.lightLight};
			`}

			${variant === "secondary" &&
			css`
				border-color: ${theme.colors.secondary};
				box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
			`}

			${variant === "tertiary" &&
			css`
				border-color: ${theme.colors.tertiary};
				box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
			`}
			
		}

		&::-moz-range-thumb {
			border-color: ${theme.colors.grayLight};
			outline: none;

			${variant === "primary" &&
			css`
				box-shadow: 0 0 0 4px ${theme.colors.primaryLight};
			`}

			${variant === "secondary" &&
			css`
				box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
			`}

			${variant === "tertiary" &&
			css`
				box-shadow: 0 0 0 4px ${theme.colors.tertiaryLight};
			`}
		}
	}

	&:active:not([disabled]) {
		box-shadow: none;

		&::-webkit-slider-runnable-track {
			${variant === "primary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
			`}

			${variant === "secondary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
			`}

			${variant === "tertiary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
			`}
		}

		&::-webkit-slider-thumb {
			${variant === "primary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
			`}

			${variant === "secondary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
			`}

			${variant === "tertiary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
			`}
		}

		&::-moz-range-track {
			${variant === "primary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
			`}

			${variant === "secondary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
			`}

			${variant === "tertiary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
			`}
		}

		&::-moz-range-thumb {
			${variant === "primary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.primaryLight};
			`}

			${variant === "secondary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
			`}

			${variant === "tertiary" &&
			css`
				box-shadow: 0 0 0 2px ${theme.colors.tertiaryLight};
			`}
		}
	}

	${size === "big"
		? css`
				min-width: 200px;
				height: 32px;

				&::-webkit-slider-runnable-track {
					height: 14px;
				}

				&::-webkit-slider-thumb {
					width: 32px;
					height: 32px;
					margin-top: -11px;
				}

				&::-moz-range-track {
					height: 10px;
				}

				&::-moz-range-thumb {
					width: 32px;
					height: 32px;
				}
		  `
		: css`
				min-width: 130px;
				height: 22px;

				&::-webkit-slider-runnable-track {
					height: 10px;
				}

				&::-webkit-slider-thumb {
					height: 22px;
					width: 22px;
					margin-top: -8px;
				}

				&::-moz-range-track {
					height: 6px;
				}

				&::-moz-range-thumb {
					width: 22px;
					height: 22px;
				}
		  `}

	${disabled &&
	css`
		&:disabled {
			background: transparent;
			border-color: transparent;
		}

		&::-webkit-slider-runnable-track {
			cursor: not-allowed;
			background: ${theme.colors.grayLight};
		}

		&::-webkit-slider-thumb {
			background: ${theme.colors.gray};
			cursor: not-allowed;
		}

		&::-moz-range-track {
			cursor: not-allowed;
			background: ${theme.colors.grayLight};
		}

		&::-moz-range-thumb {
			background: ${theme.colors.gray};
			cursor: not-allowed;
		}
	`}
`;
