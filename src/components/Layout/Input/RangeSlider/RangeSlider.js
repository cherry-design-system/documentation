import React from "react";
import { Label } from "../../Label/Label";
import { inputStyles } from "../Input.styles";

function RangeSlider({ className, size = "default", ...props }) {
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
					false,
				)
			}
			{...props}
		/>
	);
}

export { RangeSlider };
