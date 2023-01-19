import { useContext } from "react";
import { ToastNotificationsContext } from "./ToastNotificationsContext";
import * as styles from "./ToastNotifications.styles";
import { Close } from "../../assets/svg/Close";

function ToastNotifications() {
	const { notifications, removeNotification } = useContext(
		ToastNotificationsContext,
	);

	return (
		<ul css={(theme) => styles.notificationsStyles(theme)}>
			{notifications.map((notification, i) => {
				return (
					<li key={i} className={notification.status}>
						<span className="item">
							<span>{notification.text}</span>
							<button
								className="close-button"
								onClick={() => {
									removeNotification(
										notification.text,
									);
								}}
							>
								<Close />
							</button>
						</span>
					</li>
				);
			})}
		</ul>
	);
}

export { ToastNotifications };
