import { css } from "@emotion/react";
import {
	shadowHoverStyles,
	shadowStyles,
} from "../../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../../assets/styles/mq";

export const boxStyles = (theme, isLink) => css`
	padding: 20px;
	border-radius: 6px;
	${shadowStyles};

	${isLink &&
	css`
		display: block;

		@media (hover: hover) {
			&:hover {
				${shadowHoverStyles};

				& [data-primary] {
					color: ${theme.colors.primaryDark};
				}

				& [data-secondary] {
					color: ${theme.colors.secondaryDark};
				}

				& [data-tertiary] {
					color: ${theme.colors.tertiaryDark};
				}
			}
		}
	`}

	& [data-primary],
	& [data-secondary],
	& [data-tertiary] {
		transition: all 0.3s ease;
		font-size: ${theme.sizes.buttonBig.size.mobile};

		${mq(Breakpoints.lg)} {
			font-size: ${theme.sizes.buttonBig.size.desktop};
		}
	}

	& [data-primary] {
		display: block;
		color: ${theme.colors.primary};
	}

	& [data-secondary] {
		display: block;
		color: ${theme.colors.secondary};
	}

	& [data-tertiary] {
		display: block;
		color: ${theme.colors.tertiary};
	}
`;
