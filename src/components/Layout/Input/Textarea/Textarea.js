import React from "react";
import { Arrow } from "../../../../assets/svg/Arrow";
import { inputStyles } from "../Input.styles";

function Textarea({ className, size = "default", error, success, ...props }) {
	return (
		<textarea
			className={className}
			css={(theme) =>
				inputStyles(theme, "text", size, props.disabled, success, error)
			}
			{...props}
		/>
	);
}

export { Textarea };
