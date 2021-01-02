import React from "react";
import { inputStyles, labelStyles, checkboxStyles } from "./Input.styles";
import { Check } from "../../../assets/svg/Check";

function Input({
	className,
	children,
	variant = "primary",
	size = "default",
	type = "text",
	success,
	error,
	label,
	...props
}) {
	if ((type === "checkbox") | (type === "radio")) {
		return (
			<div css={(theme) => checkboxStyles(theme, type)}>
				<input
					type={type}
					className={className}
					css={(theme) =>
						inputStyles(
							theme,
							type,
							variant,
							size,
							props.disabled,
							success,
							error,
						)
					}
					{...props}
				/>
				{type === "checkbox" ? <Check /> : <em />}
				{label && (
					<label
						css={(theme) => labelStyles(theme, error, success)}
						htmlFor={props.id}
					>
						{label}
					</label>
				)}
			</div>
		);
	}
	return (
		<>
			{label && (
				<label
					css={(theme) => labelStyles(theme, error, success)}
					htmlFor={props.id}
				>
					{label}
				</label>
			)}
			<input
				type={type}
				className={className}
				css={(theme) =>
					inputStyles(
						theme,
						type,
						variant,
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

export { Input };
