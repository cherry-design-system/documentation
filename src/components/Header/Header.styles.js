import { css } from "@emotion/react";
import { resetListStyles } from "../../assets/styles/helperStyles";
import { Breakpoints, mq } from "../../assets/styles/mq";

export const headerStyles = (theme) => css`
	position: fixed;
	top: 0;
	left: 0;
	background: ${theme.colors.light};
	width: 100%;

	& [data-inner-wrapper] {
		padding: 20px 0;
		display: flex;
		justify-content: space-between;
		border-bottom: solid 1px ${theme.colors.grayLight};

		& a {
			display: inline-flex;
		}

		& ul {
			${resetListStyles};
			margin: auto -10px auto 0;
			padding: 0;
			display: flex;

			& li {
				display: flex;

				& a {
					margin: auto 0;
					padding: 0 10px;
					font-weight: 600;
					font-size: ${theme.sizes.button.size.mobile};
					line-height: ${theme.sizes.button.lineheight.mobile};

					${mq(Breakpoints.lg)} {
						font-size: ${theme.sizes.button.size.desktop};
						line-height: ${theme.sizes.button.lineheight.desktop};
					}

					& [data-mobile] {
						${mq(Breakpoints.lg)} {
							display: none;
						}
					}

					& [data-desktop] {
						display: none;

						${mq(Breakpoints.lg)} {
							display: initial;
						}
					}
				}
			}
		}
	}
`;
