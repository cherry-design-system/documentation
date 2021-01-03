import { css } from "@emotion/react";
import { rgba } from "polished";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const footerStyles = (theme) => css`
	background: ${rgba(theme.colors.grayLight, 0.3)};

	& [data-container] {
		text-align: center;

		${mq(Breakpoints.lg)} {
			text-align: right;
		}
	}
`;
