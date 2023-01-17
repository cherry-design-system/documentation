import { css } from "@emotion/react";
import { rgba } from "polished";
import {
	resetButtonStyles,
	shadowStyles,
} from "../../assets/styles/helperStyles";

export const notificationsStyles = (theme) => css`
	position: fixed;
	top: 8px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 99999;
	margin: 0;
	padding: 0;
	list-style: none;

	& li {
		display: block;
		background: ${theme.colors.info};
		color: ${theme.colors.light};
		border-radius: 6px;
		margin: 10px 0;
		${shadowStyles(theme)};
		transition: all 0.3s ease;
		opacity: 0;
		pointer-events: none;
		transform: translateY(-20px);

		& span {
			display: inline-flex;
			padding: 8px 0 8px 12px;
		}

		&.visible {
			animation: none;
			opacity: 1;
			pointer-events: all;
			transform: translateY(0);
		}

		& .close-button {
			${resetButtonStyles};
			margin: auto 0 auto 10px;
			padding: 14px 12px;
			display: inline-flex;
			border-left: solid 1px ${rgba(theme.colors.light, 0.3)};
			background: ${rgba(theme.colors.light, 0)};
			transition: all 0.3s ease;

			& svg {
				width: 12px;
				height: auto;
				opacity: 1;
			}

			& * {
				margin: auto;
			}

			@media (hover: hover) {
				&:hover {
					background: ${rgba(theme.colors.light, 0.1)};
				}
			}
		}
	}
`;
