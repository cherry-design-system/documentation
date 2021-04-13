import { css } from "@emotion/react";
import { resetButtonStyles } from "../../assets/styles/helperStyles";

export const themeSwitcherStyles = (theme) => css`
	${resetButtonStyles};
	position: relative;
	z-index: 99999;
	overflow: hidden;
	width: 32px;
	height: 22px;
	display: flex;

	& .moon,
	& .sun {
		transition: all 0.3s ease;
		position: absolute;
		top: 50%;
		left: 50%;
		opacity: 0;
		width: 16px;
		height: 16px;
	}

	& .sun {
		transform: translate3d(0, 0, 0) translate(-50%, -50%) translateY(-20px);
		padding-right: 1px;
	}

	& .moon {
		transform: translate3d(0, 0, 0) translate(-50%, -50%) translateY(20px);
	}

	${!theme.isDark
		? css`
				& .moon {
					transform: translate3d(0, 0, 0) translate(-50%, -50%)
						translateY(0);
					opacity: 1;
				}
		  `
		: css`
				& .sun {
					transform: translate3d(0, 0, 0) translate(-50%, -50%)
						translateY(0);
					opacity: 1;
				}
		  `};
`;
