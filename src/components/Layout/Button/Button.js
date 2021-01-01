import React from "react";
import { buttonStyles } from "./Button.styles";

function Button({
	className,
	children,
	variant = "primary",
	size = "default",
	frame,
	...props
}) {
	return (
		<button
			className={className}
			css={(theme) =>
				buttonStyles(theme, variant, size, frame, props.disabled)
			}
			{...props}
		>
			{children}
		</button>
	);
}

export { Button };
