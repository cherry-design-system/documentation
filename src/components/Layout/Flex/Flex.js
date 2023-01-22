import React, { ReactNode } from "react";
import { flexStyles } from "./Flex.styles";

function Flex({ children, inline = false, justifyContent, className, gap }) {
	return (
		<div
			css={(theme) => flexStyles(theme, inline, justifyContent, gap)}
			className={className ? `flex ${className}` : "flex"}
		>
			{children}
		</div>
	);
}

export { Flex };
