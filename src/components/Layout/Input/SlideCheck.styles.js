import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../assets/styles/helperStyles";

export const slideCheckStyles = (theme, size) => css`
	display: inline-block;
	margin: auto 0;
	position: relative;
	vertical-align: middle;

	& * {
		vertical-align: middle;
	}

	& input {
		${resetButtonStyles};
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		outline: none;
	}

	& input:checked ~ .slide-check {
		&:before {
			max-width: 46px;
			background: ${theme.colors.secondaryLight};
		}

		& span {
			transform: translate3d(0, 0, 0) translateX(23px);
		}
	}

	@media (hover: hover) {
		& input:hover:not([disabled]) ~ .slide-check {
			border-color: ${theme.colors.secondary};
		}
	}

	& input:focus:not([disabled]) ~ .slide-check {
		border-color: ${theme.colors.secondary};
		box-shadow: 0 0 0 4px ${theme.colors.secondaryLight};
		outline: none;
	}

	& input:active:not([disabled]) ~ .slide-check {
		box-shadow: 0 0 0 2px ${theme.colors.secondaryLight};
	}

	& input:disabled {
		cursor: not-allowed;
	}

	& input:disabled ~ .slide-check {
		border-color: ${theme.colors.gray};

		&:before {
			background: ${theme.colors.grayLight};
		}

		& span {
			background: ${theme.colors.gray};
		}
	}

	& .slide-check {
		border: solid 2px ${theme.colors.grayLight};
		border-radius: 30px;
		background: ${theme.colors.light};
		pointer-events: none;
		box-shadow: 0 0 0 0 ${theme.colors.secondaryLight};
		transition: all 0.3s ease;

		${size === "default"
			? css`
					height: 22px;
					width: 46px;
			  `
			: css`
					height: 32px;
					width: 56px;
			  `}

		&:before {
			content: "";
			display: block;
			position: absolute;
			top: 5px;
			left: 5px;
			width: calc(100% - 10px);
			height: calc(100% - 10px);
			max-width: 0;
			border-radius: 30px;
			transition: all 0.3s ease;
			background: ${theme.colors.light};
		}

		& span {
			display: block;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 50%;
			background: ${theme.colors.secondary};
			transition: all 0.3s ease;
			transform: translate3d(0, 0, 0) translateX(0);

			${size === "default"
				? css`
						width: 22px;
						height: 22px;
				  `
				: css`
						width: 32px;
						height: 32px;
				  `}
		}
	}
`;
