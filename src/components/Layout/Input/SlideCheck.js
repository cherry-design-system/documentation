import React from "react";
import { Label } from "../Label";
import { radioCheckWrapperStyles } from "./Input.styles";
import { slideCheckStyles } from "./SlideCheck.styles";

function SlideCheck({
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
				radioCheckWrapperStyles(theme, "slide-check", size, true)
			}
		>
			<div css={(theme) => slideCheckStyles(theme, size)} className="slide-check-wrapper">
				<input type="checkbox" className={className} {...props} />
				<div className="slide-check">
					<span />
				</div>
			</div>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
		</div>
	);
}

export { SlideCheck };
