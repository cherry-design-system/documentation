import React from "react";
import { inputStyles } from "./Input.styles";

function Input({
	className,
	children,
	variant = "primary",
	size = "default",
	type = "text",
	...props
}) {
	return (
		<input
			type={type}
			className={className}
			css={(theme) =>
				inputStyles(theme, type, variant, size, props.disabled)
			}
			{...props}
		/>
	);
}

export { Input };
