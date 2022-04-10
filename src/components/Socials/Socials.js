import React from "react";
import Image from "next/image";
import { Col, Container, H3, Row, Space } from "cherry-components";
import { useTheme } from "@emotion/react";
import { Twitter } from "../../assets/svg/Twitter";
import { GitHub } from "../../assets/svg/GitHub";
import { Dribbble } from "../../assets/svg/Dribbble";
import { Pictogram } from "../../assets/svg/Pictogram";
import { Discord } from "../../assets/svg/Discord";
import { Figma } from "../../assets/svg/Figma";
import {
	rightFlextyles,
	rightSideStyles,
	socialStyles,
} from "./Socials.styles";

function Socials() {
	const theme = useTheme();
	return (
		<>
			<hr className="no-margin" />
			<Space xs={20} lg={80} />
			<Container css={(theme) => socialStyles(theme)} theme={theme}>
				<Row gutterLg="default">
					<Col xs={12} lg={5}>
						<H3 size="h5">Follow the creator</H3>
						<Space xs={20} lg={20} />
						<ul className="socials-list">
							<li className="rounded user">
								<span className="profile">
									<Image
										src="/img/luan.jpg"
										alt="Luan Gjokaj"
										width={40}
										height={40}
									/>
								</span>
								<em className="label">Luan Gjokaj</em>
							</li>
							<li>
								<a
									href="https://twitter.com/LuanGjokaj?ref=cherry.design"
									target="_blank"
									rel="noreferrer"
									className="icon-link twitter"
								>
									<span>
										<Twitter />
									</span>
									<em className="label">Twitter</em>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/luangjokaj?ref=cherry.design"
									target="_blank"
									rel="noreferrer"
									className="icon-link github"
								>
									<span>
										<GitHub />
									</span>
									<em className="label">GitHub</em>
								</a>
							</li>
							<li>
								<a
									href="https://dribbble.com/luangjokaj?ref=cherry.design"
									target="_blank"
									rel="noreferrer"
									className="icon-link dribbble"
								>
									<span>
										<Dribbble />
									</span>
									<em className="label">Dribbble</em>
								</a>
							</li>
						</ul>
					</Col>
					<Col xs={12} lg={7} css={rightFlextyles}>
						<div css={rightSideStyles}>
							<Space xs={20} lg="none" />
							<H3 size="h5">Join the community</H3>
							<Space xs={20} lg={20} />
							<ul className="socials-list">
								<li className="rounded user">
									<span className="product">
										<span>
											<Pictogram />
										</span>
									</span>
									<em className="label">Cherry</em>
								</li>
								<li>
									<a
										href="https://discord.com/invite/uQFdMddMZw?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
										className="icon-link discord"
									>
										<span>
											<Discord />
										</span>
										<em className="label">Discord</em>
									</a>
								</li>
								<li>
									<a
										href="https://www.figma.com/community/file/943862931766586094/Cherry-Design-System?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
										className="icon-link figma"
									>
										<span>
											<Figma />
										</span>
										<em className="label">UI Kit</em>
									</a>
								</li>
								<li>
									<a
										href="https://www.figma.com/community/plugin/1091785956842659849/Cherry-Theme-Generator?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
										className="icon-link figma"
									>
										<span>
											<Figma />
										</span>
										<em className="label">Figma Plugin</em>
									</a>
								</li>
								<li>
									<a
										href="https://github.com/cherry-design-system/sass/discussions?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
										className="icon-link github"
									>
										<span>
											<GitHub />
										</span>
										<em className="label">Sass</em>
									</a>
								</li>
								<li>
									<a
										href="https://github.com/cherry-design-system/postcss/discussions?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
										className="icon-link github"
									>
										<span>
											<GitHub />
										</span>
										<em className="label">PostCSS</em>
									</a>
								</li>
								<li>
									<a
										href="https://github.com/cherry-design-system/react-components/discussions?ref=cherry.design"
										target="_blank"
										rel="noreferrer"
										className="icon-link github"
									>
										<span>
											<GitHub />
										</span>
										<em className="label">React</em>
									</a>
								</li>
							</ul>
							<Space xs={20} lg={60} />
						</div>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export { Socials };
