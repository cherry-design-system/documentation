import React from "react";
import { Space, H1 } from "cherry-components";
import { Page } from "../../../../components/Pages";
import { CodeBlock } from "../../../../components/CodeBlock";
import { DocNav, DocNavWrapper } from "../../../../components/DocNav";

const themeCode = `@custom-media --screen-xs (min-width: 0);
@custom-media --screen-sm (min-width: 576px);
@custom-media --screen-md (min-width: 768px);
@custom-media --screen-lg (min-width: 992px);
@custom-media --screen-xl (min-width: 1200px);
@custom-media --screen-xxl (min-width: 1440px);
@custom-media --screen-xxxl (min-width: 1920px);

:root {
	--max-width: 1280px;
	--max-width-limit: 1440px;
	--padding-top-body-mobile: 76px;
	--padding-top-body-desktop: 76px;
	--margin-container-mobile: 20px;
	--margin-container-desktop: 20px;
	--margin-row-default: -10px;
	--margin-row-medium: -30px;
	--margin-row-big: -50px;
	--gutter-col-default: 10px;
	--gutter-col-medium: 30px;
	--gutter-col-big: 50px;

	--color-primary-light: #fda4af;
	--color-primary: #f43f5e;
	--color-primary-dark: #9f1239;

	--color-secondary-light: #7dd3fc;
	--color-secondary: #0ea5e9;
	--color-secondary-dark: #075985;

	--color-tertiary-light: #d8b4fe;
	--color-tertiary: #a855f7;
	--color-tertiary-dark: #6b21a8;

	--color-dark: #000000;
	--color-light: #ffffff;

	--color-gray-light: #e5e7eb;
	--color-gray: #9ca3af;
	--color-gray-dark: #4b5563;

	--color-success: #28a745;
	--color-error: #dc3545;
	--color-warning: #ffc107;
	--color-info: #17a2b8;

	--font-text: "Inter";
	--font-head: "Inter";
	--font-special: "Inter";
	--font-mono: "Roboto Mono";

	--size-hero1-mobile: 52px;
	--lineheight-hero1-mobile: 1.15;
	--size-hero1-desktop: 62px;
	--lineheight-hero1-desktop: 1.15;

	--size-hero2-mobile: 42px;
	--lineheight-hero2-mobile: 1.15;
	--size-hero2-desktop: 52px;
	--lineheight-hero2-desktop: 1.15;

	--size-hero3-mobile: 32px;
	--lineheight-hero3-mobile: 1.15;
	--size-hero3-desktop: 42px;
	--lineheight-hero3-desktop: 1.15;

	--size-h1-mobile: 30px;
	--lineheight-h1-mobile: 1.20;
	--size-h1-desktop: 40px;
	--lineheight-h1-desktop: 1.20;

	--size-h2-mobile: 22px;
	--lineheight-h2-mobile: 1.20;
	--size-h2-desktop: 32px;
	--lineheight-h2-desktop: 1.20;

	--size-h3-mobile: 18px;
	--lineheight-h3-mobile: 1.20;
	--size-h3-desktop: 28px;
	--lineheight-h3-desktop: 1.20;

	--size-h4-mobile: 16px;
	--lineheight-h4-mobile: 1.30;
	--size-h4-desktop: 24px;
	--lineheight-h4-desktop: 1.30;

	--size-h5-mobile: 14px;
	--lineheight-h5-mobile: 1.40;
	--size-h5-desktop: 20px;
	--lineheight-h5-desktop: 1.40;

	--size-h6-mobile: 12px;
	--lineheight-h6-mobile: 1.40;
	--size-h6-desktop: 18px;
	--lineheight-h6-desktop: 1.40;

	--size-eyebrow-mobile: 16px;
	--lineheight-eyebrow-mobile: 1.35;
	--size-eyebrow-desktop: 18px;
	--lineheight-eyebrow-desktop: 1.15;

	--size-subtitle-mobile: 18px;
	--lineheight-subtitle-mobile: 1.35;
	--size-subtitle-desktop: 20px;
	--lineheight-subtitle-desktop: 1.35;

	--size-button-mobile: 16px;
	--lineheight-button-mobile: 1.00;
	--size-button-desktop: 16px;
	--lineheight-button-desktop: 1.00;

	--size-button-big-mobile: 18px;
	--lineheight-button-big-mobile: 1.00;
	--size-button-big-desktop: 18px;
	--lineheight-button-big-desktop: 1.00;

	--size-lead-mobile: 16px;
	--lineheight-lead-mobile: 1.35;
	--size-lead-desktop: 18px;
	--lineheight-lead-desktop: 1.45;

	--size-input-mobile: 16px;
	--lineheight-input-mobile: 1.00;
	--size-input-desktop: 16px;
	--lineheight-input-desktop: 1.00;

	--size-input-big-mobile: 18px;
	--lineheight-input-big-mobile: 1.00;
	--size-input-big-desktop: 18px;
	--lineheight-input-big-desktop: 1.00;

	--size-strong-mobile: 14px;
	--lineheight-strong-mobile: 1.50;
	--size-strong-desktop: 16px;
	--lineheight-strong-desktop: 1.50;

	--size-text-mobile: 14px;
	--lineheight-text-mobile: 1.50;
	--size-text-desktop: 16px;
	--lineheight-text-desktop: 1.50;

	--size-small-mobile: 12px;
	--lineheight-small-mobile: 1.30;
	--size-small-desktop: 14px;
	--lineheight-small-desktop: 1.30;

	--size-blockquote-mobile: 14px;
	--lineheight-blockquote-mobile: 1.50;
	--size-blockquote-desktop: 18px;
	--lineheight-blockquote-desktop: 1.50;

	--size-code-mobile: 14px;
	--lineheight-code-mobile: 1.50;
	--size-code-desktop: 18px;
	--lineheight-code-desktop: 1.50;
}`;

function Index() {
	return (
		<Page title="PostCSS Theme">
			<Space xs={20} lg={40} />
			<H1 size="hero1">PostCSS Theme</H1>
			<Space xs={10} lg={30} />
			<p>
				The theme is where all the main values of the design system are
				defined. You can find your PostCSS Theme in{" "}
				<strong>theme.css</strong>.
			</p>
			<Space size={1} />
			<CodeBlock language="css" value={themeCode} />
			<Space size={10} />
			<DocNavWrapper>
				<DocNav
					href="/docs/code/postcss/breakpoints"
					as="/docs/code/postcss/breakpoints"
					prev
				>
					PostCSS Breakpoints
				</DocNav>
				<DocNav
					href="/docs/code/react-components"
					as="/docs/code/react-components"
					next
				>
					Components Introduction
				</DocNav>
			</DocNavWrapper>
		</Page>
	);
}

export default Index;
