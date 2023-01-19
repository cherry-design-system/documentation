import { createContext, useState, useEffect } from "react";

const ToastNotificationsContext = createContext({
	notifications: [],
	addNotification: () => null,
	removeNotification: () => null,
});

function ToastNotificationsProvider({ children }) {
	const [notifications, setToastNotifications] = useState([]);
	const addNotification = (text, autoHide) => {
		setToastNotifications((prevState) => [
			...prevState,
			{ text, status: "hidden" },
		]);

		setTimeout(() => {
			setToastNotifications([
				...notifications,
				{ text, status: "visible" },
			]);
		}, 300);

		// if (autoHide) {
		// 	setTimeout(() => {
		// 		removeNotification(text);
		// 	}, autoHide)
		// }
	};
	const removeNotification = (text) => {
		const updatedNotification = notifications.filter((t) => t.text !== text);
		setToastNotifications([
			...updatedNotification,
			{ text, status: "hidden" },
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
