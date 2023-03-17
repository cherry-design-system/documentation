import { useRef, useState } from "react";
import * as styles from "./Accordion.styles";

function Accordion({ title, children }) {
	const [isActive, setIsActive] = useState(false);
	const childrenRef = useRef(null);

	return (
		<>
			<div
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
