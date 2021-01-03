import React from "react";
import { labelStyles } from "./Label.styles";

function Label({ className, children, error, success, ...props }) {
	return (
		<label
			className={className}
			css={(theme) => labelStyles(theme, error, success)}
			{...props}
		>
			{children}
		</label>
	);
}

export { Label };
