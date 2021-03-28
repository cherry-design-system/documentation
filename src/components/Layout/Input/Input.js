import React from "react";
import { inputStyles, checkboxWrapperStyles } from "./Input.styles";
import { Check } from "../../../assets/svg/Check";
import { Label } from "../Label";

function Input({
	className,
	children,
	size = "default",
	type = "text",
	success,
	error,
	label,
	theme = localTheme,
	...props
}) {
	if ((type === "checkbox") | (type === "radio")) {
		return (
			<div css={checkboxWrapperStyles(theme, type, size, fullWidth)}>
				<input
					type={type}
					className={className}
					css={inputStyles(
						theme,
						type,
						size,
						props.disabled,
						success,
						error,
						fullWidth,
					)}
					{...props}
				/>
				{type === "checkbox" ? <Check /> : <em />}
				{label && (
					<Label htmlFor={props.id} error={error} success={success}>
						{label}
					</Label>
				)}
			</div>
		);
	}

	return (
		<>
			{label && (
				<Label htmlFor={props.id} error={error} success={success}>
					{label}
				</Label>
			)}
			<input
				type={type}
				className={className}
				css={inputStyles(
					theme,
					type,
					size,
					props.disabled,
					success,
					error,
					fullWidth,
				)}
				{...props}
			/>
		</>
	);
}

export { Input };
