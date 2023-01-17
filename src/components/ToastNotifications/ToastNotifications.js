import { createRef, useContext } from "react";
import { ToastNotificationsContext } from "./ToastNotificationsContext";
import * as styles from "./ToastNotifications.styles";
import { Close } from "../../assets/svg/Close";

function ToastNotifications() {
	const { notifications, removeNotification } = useContext(
		ToastNotificationsContext,
	);
	const elmRef = createRef();

	return (
		<ul css={(theme) => styles.notificationsStyles(theme)}>
			{notifications.map((notification, i) => {
				return (
					<li key={i} className={notification.status} ref={elmRef}>
						<span>{notification.text}</span>
						<button
							className="close-button"
							onClick={() => {
								removeNotification(
									notification.id,
									notification.text,
								);
								elmRef.current.className = "hidden";
							}}
						>
							<Close />
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export { ToastNotifications };
