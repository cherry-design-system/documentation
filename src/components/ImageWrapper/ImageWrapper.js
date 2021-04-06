import React from "react";
import { imageWrapperStyles } from "./ImageWrapper.styles";

function ImageWrapper({ className, children }) {
	return (
		<div className={className} css={(theme) => imageWrapperStyles(theme)}>
			{children}
		</div>
	);
}

export { ImageWrapper };
