import { useRef, useState } from "react";
import * as styles from "./Accordion.styles";
import { Theme } from "cherry-components";

function Accordion({ title, children, start, delay }) {
	const [isActive, setIsActive] = useState(false);
	const elmRef = useRef(null);
	const childrenWrapperRef = useRef(null);
	const childrenRef = useRef(null);

	return (
		<>
			<div
				ref={elmRef}
				onClick={() => setIsActive(!isActive)}
				css={(theme) => styles.accordionStyles(theme, isActive)}
			>
				<button>
					<strong className="title">{title}</strong>
					<span className="indicator" />
				</button>
			</div>
			<div
				css={(theme) =>
					styles.accordionContentStyles(
						theme,
						isActive,
						childrenRef?.current?.offsetHeight,
					)
				}
				ref={childrenWrapperRef}
			>
				<div
					className="inner-accordion-content"
					ref={childrenRef}
					css={styles.introTextStyles}
				>
					{children}
				</div>
			</div>
		</>
	);
}

export { Accordion };
