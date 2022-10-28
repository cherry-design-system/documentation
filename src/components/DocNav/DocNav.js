import { Component } from "react";
import Link from "next/link";
import { FontStyle } from "cherry-components";
import { ArrowTail } from "../../assets/svg/ArrowTail";
import { docNavStyles, docNavWrapperStyles } from "./DoNav.styles";

function DocNav({ next, prev, href, as, children }) {
	return (
		<Link
			href={href}
			as={as}
			css={(theme) => docNavStyles(theme, next, prev)}
		>
			{prev && <ArrowTail />}
			<FontStyle variant="button">{children}</FontStyle>
			{next && <ArrowTail />}
		</Link>
	);
}

function DocNavWrapper({ children, noTop }) {
	return (
		<div css={(theme) => docNavWrapperStyles(theme, noTop)}>{children}</div>
	);
}

export { DocNav, DocNavWrapper };
