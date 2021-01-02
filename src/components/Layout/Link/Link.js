import React from "react";
import NextLink from "next/link";
import { buttonStyles } from "../Button/Button.styles";

function Link({
	className,
	children,
	variant = "primary",
	size = "default",
	frame,
	as,
	href,
	external,
	...props
}) {
	if (as) {
		return (
			<NextLink href={href} as={as}>
				<a
					className={className}
					css={(theme) =>
						buttonStyles(
							theme,
							variant,
							size,
							frame,
							props.disabled,
						)
					}
					{...props}
				>
					{children}
				</a>
			</NextLink>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={className}
			css={(theme) =>
				buttonStyles(theme, variant, size, frame, props.disabled)
			}
			{...props}
		>
			{children}
		</a>
	);
}

export { Link };
