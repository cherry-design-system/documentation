import React from "react";
import { RangeSlider as CherryRangeSlider } from "cherry-components";

function RangeSlider({
	className,
	size = "default",
	fullWidth,
	variant = "secondary",
	...props
}) {
	return (
		<CherryRangeSlider
			className={className}
			size={size}
			fullWidth={fullWidth}
			variant={variant}
			{...props}
		/>
	);
}

export { RangeSlider };
