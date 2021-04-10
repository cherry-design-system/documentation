import React from "react";
import Image from "next/image";
import { Container, H3, Space } from "cherry-components";
import { projectStyles } from "./Projects.styles";

function Projects() {
	return (
		<>
			<Container textAlign="center">
				<hr className="no-margin" />
				<Space xs={40} lg={80} />
				<H3 size="hero3">Open Source Projects</H3>
				<Space xs={40} lg={80} />
			</Container>
			<div css={(theme) => projectStyles(theme)}>
				<a
					href="https://www.wordpressify.co/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="wordpressify"
				>
					<span>
						<Image
							src="/img/projects/wordpressify.svg"
							alt="WordPressify Logo"
							width={364.87}
							height={35}
						/>
						<p>Automate your WordPress development workflow.</p>
					</span>
				</a>
				<a
					href="https://www.gopablo.co/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="gopablo"
				>
					<span>
						<Image
							src="/img/projects/gopablo.svg"
							alt="GoPablo Logo"
							width={293.9}
							height={110}
						/>
						<p>Create optimized static websites.</p>
					</span>
				</a>
				<a
					href="https://www.nextify.me/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="nextify"
				>
					<span>
						<Image
							src="/img/projects/nextify.svg"
							alt="Nextify Logo"
							width={186.28}
							height={75}
						/>
						<p>React apps using Next.js and Emotion.</p>
					</span>
				</a>
				<a
					href="https://www.fuzzymail.co/?ref=wordpressify.co"
					target="_blank"
					rel="noreferrer"
					className="fuzzymail"
				>
					<span>
						<Image
							src="/img/projects/fuzzymail.svg"
							alt="FuzzyMail Logo"
							width={242.44}
							height={65}
						/>
						<p>Responsive email template generator.</p>
					</span>
				</a>
			</div>
		</>
	);
}

export { Projects };
