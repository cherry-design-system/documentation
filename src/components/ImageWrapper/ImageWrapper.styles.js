import { css } from "@emotion/react";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const imageWrapperStyles = (theme) => css`
	display: flex;
	height: 100%;

	& > div {
		margin: auto 0 auto auto !important;
	}
`;
