import Link from "next/link";
import React from "react";
import { textStyles } from "./Text.styles";

function Text({ className, children, maxWidth }) {
	return (
		<p className={className} css={(theme) => textStyles(theme, maxWidth)}>
			{children && children}
		</p>
	);
}

export { Text };
