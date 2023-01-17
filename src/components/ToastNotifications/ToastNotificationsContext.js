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
	};
	const removeNotification = (id, text) => {
		setTimeout(() => {
			setToastNotifications(notifications.filter((t) => t.id !== id));
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
