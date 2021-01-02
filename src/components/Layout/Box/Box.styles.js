import { css } from "@emotion/react";
import {
	shadowHoverStyles,
	shadowStyles,
} from "../../../assets/styles/helperStyles";

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
			}
		}
	`}
`;
