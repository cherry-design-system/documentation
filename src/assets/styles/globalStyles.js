import { Global, css } from "@emotion/react";
import { Breakpoints, mq } from "./mq";
import { theme } from "./theme";

const globalStyles = (
	<Global
		styles={css`
			@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");

			html,
			body {
				margin: 0;
				padding: 0;
				min-height: 100%;
			}

			body {
				-moz-osx-font-smoothing: grayscale;
				-webkit-font-smoothing: antialiased;
				font-family: ${theme.fonts.text};
				font-size: ${theme.sizes.text.size.mobile};
				line-height: ${theme.sizes.text.lineheight.mobile};
				padding-top: ${theme.spacing.paddingTopBody.mobile};
				color: ${theme.colors.dark};
				margin: 0;

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.text.size.desktop};
					line-height: ${theme.sizes.text.lineheight.desktop};
					padding-top: ${theme.spacing.paddingTopBody.desktop};
				}
			}

			* {
				box-sizing: border-box;

				&:before,
				&:after {
					box-sizing: border-box;
				}

				&::selection {
					background: ${theme.colors.primary};
					color: ${theme.colors.light};
				}
			}

			main {
				display: block;
			}

			hr {
				background: none;
				border: none;
				border-bottom: solid 1px ${theme.colors.grayLight};
				box-sizing: content-box;
				height: 0;
				overflow: visible;
			}

			b,
			strong {
				font-weight: bolder;
			}

			pre,
			code,
			kbd,
			samp {
				font-family: monospace, monospace;
			}

			pre {
				border-radius: 6px;
			}

			small {
				font-size: ${theme.sizes.small.size.mobile};
				line-height: ${theme.sizes.small.lineheight.mobile};

				${mq(Breakpoints.lg)} {
					font-size: ${theme.sizes.small.size.desktop};
					line-height: ${theme.sizes.small.lineheight.desktop};
				}
			}

			sub,
			sup {
				font-size: 75%;
				line-height: 0;
				position: relative;
				vertical-align: baseline;
			}

			sub {
				bottom: -0.25em;
			}

			sup {
				top: -0.5em;
			}

			a,
			button {
				cursor: pointer;
				outline: none;
				text-decoration: none;
				transition: all 0.3s ease;
			}

			a {
				background-color: transparent;
				color: ${theme.colors.grayDark};

				@media (hover: hover) {
					&:hover {
						color: ${theme.colors.primary};
					}
				}
			}

			p {
				color: ${theme.colors.gray};
				margin: 10px 0;
			}

			figure {
				margin: 0;
			}

			fieldset {
				appearance: none;
				border: none;
			}

			img,
			svg {
				transition: all 0.3s ease;

				& * {
					transition: all 0.3s ease;
				}
			}

			img {
				display: inline-block;
				max-width: 100%;
				width: auto;
				height: auto;
				border-style: none;
				object-fit: contain;
			}

			strong,
			b {
				font-weight: 700;
				color: ${theme.colors.dark};
			}
		`}
	/>
);

export { globalStyles };
