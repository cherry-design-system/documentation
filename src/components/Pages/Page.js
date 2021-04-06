import React from "react";
import Head from "next/head";
import { withRouter } from "next/router";

export const appleTouchIcon =
	"https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/180.png";
export const favIcon32 =
	"https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/32.png";
export const favIcon16 =
	"https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/16.png";
export const favIcon =
	"https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/favicon.ico";
export const safariPinnedTab =
	"https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/512.svg";
export const preview =
	"https://cherry-documentation.s3-eu-west-1.amazonaws.com/img/meta/preview.jpg";

const Page = ({
	title = "Cherry",
	description = "Cherry is the foundation for your design system, from design to code. With examples of implementations in modern front-end technologies. Customizable and scalable, ready to be used out-of-the-box.",
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
			<link rel="manifest" href="/site.webmanifest" />
			<meta name="theme-color" content="#F43F5E" />
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
			<link rel="mask-icon" href={safariPinnedTab} color="#F43F5E" />
			<link rel="icon" type="image/png" sizes="32x32" href={favIcon32} />
			<link rel="icon" type="image/png" sizes="16x16" href={favIcon16} />
			<link rel="shortcut icon" href={favIcon} />
			<title>{title + " - Cherry"}</title>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				rel="preload"
				as="style"
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				media="print"
				onLoad="this.media='all'"
			/>
			<noscript>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				/>
			</noscript>
		</Head>
		{children}
	</React.Fragment>
);

const PageWithRouter = withRouter(Page);

export { PageWithRouter as Page };
