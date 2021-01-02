import { css } from "@emotion/react";
import { mq, Breakpoints } from "../../../assets/styles/mq";

const containerStyles = (theme, fluid, textAlign) => css`
	margin: auto;
	padding: 0 ${theme.spacing.marginContainer.mobile};

	${mq(Breakpoints.lg)} {
		padding: 0 ${theme.spacing.marginContainer.desktop};
	}

	${fluid
		? css`
				max-width: 100%;
				width: 100%;
		  `
		: css`
				max-width: ${theme.spacing.maxWidth};
		  `}

	${textAlign === "right" &&
	css`
		text-align: right;
	`}

	${textAlign === "left" &&
	css`
		text-align: left;
	`}

	${textAlign === "center" &&
	css`
		text-align: center;
	`}
`;

export { containerStyles };
