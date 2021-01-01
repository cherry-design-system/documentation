import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

export const appleTouchIcon =
	"https://cherry-website.s3-eu-west-1.amazonaws.com/img/meta/180-apple-touch-icon.png";
export const favIcon32 =
	"https://cherry-website.s3-eu-west-1.amazonaws.com/img/meta/32.png";
export const favIcon16 =
	"https://cherry-website.s3-eu-west-1.amazonaws.com/img/meta/16.png";
export const favIcon =
	"https://cherry-website.s3-eu-west-1.amazonaws.com/img/meta/favicon.ico";
export const safariPinnedTab =
	"https://cherry-website.s3-eu-west-1.amazonaws.com/img/meta/512.svg";
export const preview =
	"https://cherry-website.s3-eu-west-1.amazonaws.com/img/meta/preview.png";

const Page = ({
	title = "Cherry",
	description,
	image = preview,
	children,
	router,
}) => (
	<React.Fragment>
		<Head>
			<meta httpEquiv="" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=1"
			/>
			<meta name="description" content={description} />
			<meta property="og:title" content={title + " - Cherry"} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:title" content={title + " - Cherry"} />
			<meta name="twitter:image" content={image} />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={appleTouchIcon}
			/>
			<link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
			<link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
			<link rel="manifest" href="/site.webmanifest" />
			<link rel="mask-icon" href={safariPinnedTab} color="#000000" />
			<link rel="shortcut icon" href={favIcon} />
			<meta name="theme-color" content="#000" />

			<title>{title + " - Cherry"}</title>
		</Head>
		{children}
	</React.Fragment>
);

const PageWithRouter = withRouter(Page);

export { PageWithRouter as Page };
