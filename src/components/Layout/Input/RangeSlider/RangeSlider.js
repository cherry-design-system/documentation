import React from "react";
import { Label } from "../../Label/Label";
import { inputStyles } from "../Input.styles";

function RangeSlider({
	className,
	size = "default",
	fullWidth,
	variant,
	...props
}) {
	return (
		<input
			type="range"
			className={className}
			css={(theme) =>
				inputStyles(
					theme,
					"range",
					size,
					props.disabled,
					false,
					false,
					fullWidth,
					(variant = "secondary"),
				)
			}
			{...props}
		/>
	);
}

export { RangeSlider };
