import React from "react";
import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{process.env.DISABLE_GTM === "false" && (
						<script
							dangerouslySetInnerHTML={{
								__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
							new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
							j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
							'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-K8M4PWZ');`,
							}}
						></script>
					)}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
