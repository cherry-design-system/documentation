import { css } from "@emotion/react";
import { resetButtonStyles } from "../../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const burgerStyles = (theme, isOpen) => css`
	${resetButtonStyles};
	margin: auto;
	width: 46px;
	height: 46px;
	position: relative;
	cursor: pointer;
	overflow: hidden;

	position: fixed;
	z-index: 9999;
	bottom: 15px;
	right: 15px;
	border-radius: 50%;
	background: ${theme.colors.light};
	box-shadow: 0px 13px 31px rgba(12, 20, 33, 0.04),
		0px 9.45547px 20.8947px rgba(12, 20, 33, 0.032375),
		0px 6.58125px 13.5141px rgba(12, 20, 33, 0.027),
		0px 4.31641px 8.38574px rgba(12, 20, 33, 0.023125),
		0px 2.6px 5.0375px rgba(12, 20, 33, 0.02),
		0px 1.37109px 2.99707px rgba(12, 20, 33, 0.016875),
		0px 0.56875px 1.79219px rgba(12, 20, 33, 0.013),
		inset 0px 2px 1px #ffffff;

	${mq(Breakpoints.lg)} {
		display: none;
	}

	& span {
		display: block;
		width: 24px;
		height: 2px;
		background: ${theme.colors.primary};
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate3d(0, 0, 0) translate(-50%, -50%);
		transition: all 0.3s ease;

		&:before,
		&:after {
			content: "";
			display: block;
			height: 2px;
			width: 24px;
			background: ${theme.colors.primary};
			position: absolute;
			transition: all 0.3s ease;
		}

		&:before {
			top: -10px;
		}

		&:after {
			top: 10px;
		}
	}

	${isOpen &&
	css`
		& span {
			width: 0;

			&:before {
				transform: translate3d(0, 0, 0) translate(-12px, 11px)
					rotate(45deg);
				transition-delay: 0.3s;
			}

			&:after {
				transform: translate3d(0, 0, 0) translate(-12px, -9px)
					rotate(-45deg);
				transition-delay: 0.4s;
			}
		}
	`}
`;
