import { createContext, useState, useEffect } from "react";

const ToastNotificationsContext = createContext({
	notifications: [],
	addNotification: () => null,
	removeNotification: () => null,
});

function ToastNotificationsProvider({ children }) {
	const [notifications, setToastNotifications] = useState([]);
	const addNotification = (id, text, autoHide) => {
		setToastNotifications((prevState) => [
			...prevState,
			{ id, text, status: "hidden" },
		]);

		setTimeout(() => {
			setToastNotifications([
				...notifications,
				{ id, text, status: "visible" },
			]);
		}, 300);

		// if (autoHide) {
		// 	setTimeout(() => {
		// 		removeNotification(id, text);
		// 	}, autoHide)
		// }
	};
	const removeNotification = (id, text) => {
		const updatedNotification = notifications.filter((t) => t.id !== id);
		setToastNotifications([
			...updatedNotification,
			{ id, text, status: "hidden" },
		]);
		setTimeout(() => {
			setToastNotifications(updatedNotification);
		}, 300);
	};

	useEffect(() => {
		console.log(notifications, "notifications");
	}, [notifications]);

	return (
		<ToastNotificationsContext.Provider
			value={{ notifications, addNotification, removeNotification }}
		>
			{children}
		</ToastNotificationsContext.Provider>
	);
}

export { ToastNotificationsContext, ToastNotificationsProvider };
