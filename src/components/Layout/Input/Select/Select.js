import React from "react";
import { Arrow } from "../../../../assets/svg/Arrow";
import { selectWrapperStyles, inputStyles } from "../Input.styles";

function Select({
	className,
	children,
	size = "default",
	error,
	success,
	...props
}) {
	return (
		<div css={(theme) => selectWrapperStyles(theme, size)}>
			<select
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
			>
				{children}
			</select>
			<Arrow />
		</div>
	);
}

export { Select };
