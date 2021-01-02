import React from "react";
import { labelStyles } from "./Label.styles";

function Label({ className, children, props, error, success }) {
	return (
		<label
			className={className}
			css={(theme) => labelStyles(theme, error, success)}
		>
			{children}
		</label>
	);
}

export { Label };
