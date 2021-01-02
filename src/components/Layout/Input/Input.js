import React from "react";
import { inputStyles } from "./Input.styles";

function Input({
	className,
	children,
	variant = "primary",
	size = "default",
	type = "text",
	success,
	error,
	...props
}) {
	return (
		<input
			type={type}
			className={className}
			css={(theme) =>
				inputStyles(
					theme,
					type,
					variant,
					size,
					props.disabled,
					success,
					error,
				)
			}
			{...props}
		/>
	);
}

export { Input };
