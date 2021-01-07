import React from "react";
import { fontStyles } from "./FontStyle.styles";

function FontStyle({ className, children, variant, ...props }) {
	return (
		<span
			className={className}
			css={(theme) => fontStyles(theme, variant)}
			{...props}
		>
			{children}
		</span>
	);
}

export { FontStyle };
