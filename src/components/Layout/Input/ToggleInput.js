import React from "react";
import { Label } from "../Label";
import { radioCheckWrapperStyles } from "./Input.styles";
import { slideCheckStyles } from "./SlideCheck.styles";

function ToggleInput({
	className,
	children,
	size = "default",
	success,
	error,
	label,
	...props
}) {
	return (
		<div
			css={(theme) =>
				radioCheckWrapperStyles(theme, "toggle-input", size, true)
			}
		>
			<div
				css={(theme) => slideCheckStyles(theme, size)}
				className="toggle-input-inner"
			>
				<input type="checkbox" className={className} {...props} />
				<div className="slide-check" />
			</div>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
		</div>
	);
}

export { ToggleInput };
