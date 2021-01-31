import React from "react";
import { Label } from "../../Label/Label";
import { inputStyles } from "../Input.styles";

function Textarea({
	className,
	size = "default",
	error,
	success,
	label,
	...props
}) {
	return (
		<>
			{label && <Label htmlFor={props.id}>{label}</Label>}
			<textarea
				className={className}
				css={(theme) =>
					inputStyles(
						theme,
						"text",
						size,
						props.disabled,
						success,
						error,
					)
				}
				{...props}
			/>
		</>
	);
}

export { Textarea };
