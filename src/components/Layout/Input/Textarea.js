import React from "react";
import { Textarea as CherryTextarea } from "cherry-components";
import { useTheme } from "@emotion/react";

function Textarea({
	className,
	size = "default",
	error,
	success,
	label,
	fullWidth,
	variant = "secondary",
	...props
}) {
	const theme = useTheme();
	return (
		<CherryTextarea
			className={className}
			size={size}
			error={error}
			success={success}
			label={label}
			fullWidth={fullWidth}
			variant={variant}
			theme={theme}
			{...props}
		/>
	);
}

export { Textarea };
