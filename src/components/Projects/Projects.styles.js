import { css } from "@emotion/react";
import { darken } from "polished";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const projectStyles = (theme) => css`
	display: flex;
	flex-wrap: wrap;
	overflow: 100%;

	& a {
		min-height: 350px;
		display: flex;
		width: 100%;
		padding: 20px;

		${mq(Breakpoints.lg)} {
			width: 50%;
			max-width: 50%;
			flex: 50%;
		}

		& span {
			display: block;
			margin: auto;
			text-align: center;
			transition: all 0.3s ease;
			transform: translate3d(0, 0, 0) scale(1);
		}

		& p {
			color: ${theme.colors.light};
		}

		@media (hover: hover) {
			&:hover {
				& span {
					transform: translate3d(0, 0, 0) scale(1.03);
				}
			}
		}

		&:active {
			& span {
				transform: translate3d(0, 0, 0) scale(0.97);
			}
		}

		&.wordpressify {
			background: #b8d401;

			@media (hover: hover) {
				&:hover {
					background: ${darken(0.1, "#b8d401")};
				}
			}
		}

		&.gopablo {
			background: #303030;

			@media (hover: hover) {
				&:hover {
					background: ${darken(0.1, "#303030")};
				}
			}
		}

		&.nextify {
			background: #0370f3;

			@media (hover: hover) {
				&:hover {
					background: ${darken(0.1, "#0370F3")};
				}
			}
		}

		&.fuzzymail {
			background: #59c8d0;

			@media (hover: hover) {
				&:hover {
					background: ${darken(0.1, "#59C8D0")};
				}
			}
		}
	}
`;
