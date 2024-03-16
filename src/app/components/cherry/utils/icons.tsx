"use client";
import React from "react";
import { theme as defaultTheme, Theme } from "./theme";

interface IconProps extends React.SVGProps<SVGSVGElement> {
	theme?: Theme;
}

function IconCheck({ theme = defaultTheme, ...props }: IconProps) {
	return (
		<svg
			width="12"
			height="10"
			viewBox="0 0 12 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M10 2L4.4 8L2 5.75"
				stroke={theme.colors.primary}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function IconArrow({ theme = defaultTheme, ...props }: IconProps) {
	return (
		<svg
			width="16"
			height="10"
			viewBox="0 0 16 10"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M2 2L8 8L14 2"
				stroke={theme.colors.primary}
				strokeWidth="3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function IconGitHub({ theme = defaultTheme, ...props }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z"
				fill={theme.colors.primary}
			/>
		</svg>
	);
}

function IconDiscord({ theme = defaultTheme, ...props }: IconProps) {
	return (
		<svg
			width="28"
			height="20"
			viewBox="0 0 28 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M17.888 8.96048C16.576 8.96048 15.52 10.1125 15.52 11.5525C15.52 12.9605 16.576 14.1125 17.888 14.1125C19.232 14.1125 20.288 12.9605 20.288 11.5525C20.288 10.1125 19.232 8.96048 17.888 8.96048ZM9.408 8.96048C8.096 8.96048 7.008 10.1125 7.008 11.5525C7.008 12.9605 8.096 14.1125 9.408 14.1125C10.72 14.1125 11.776 12.9605 11.776 11.5525C11.776 10.1125 10.72 8.96048 9.408 8.96048ZM20.128 19.5845C20.128 19.5845 19.296 18.5605 18.592 17.6965C21.664 16.8325 22.816 14.9125 22.816 14.9125C21.856 15.5525 20.928 16.0005 20.128 16.2885C18.944 16.7685 17.824 17.1205 16.736 17.3125C14.496 17.7285 12.448 17.6325 10.688 17.3125C9.344 17.0565 8.192 16.6725 7.264 16.2885C6.72 16.0965 6.144 15.8405 5.536 15.4885C5.472 15.4565 5.408 15.4245 5.344 15.3605C5.28 15.3605 5.248 15.3285 5.216 15.3285C4.8 15.0725 4.576 14.9125 4.576 14.9125C4.576 14.9125 5.696 16.7685 8.672 17.6645C7.968 18.5605 7.104 19.5845 7.104 19.5845C1.952 19.4245 0 16.0325 0 16.0325C0 8.51248 3.36 2.43248 3.36 2.43248C6.72 -0.0955217 9.88799 0.00047834 9.88799 0.00047834L10.144 0.256479C5.92 1.47248 4 3.32848 4 3.32848C4 3.32848 4.512 3.04048 5.408 2.65648C7.904 1.56848 9.85599 1.28048 10.688 1.18448C10.816 1.18448 10.944 1.15248 11.072 1.12048C12.512 0.960479 14.112 0.896479 15.808 1.08848C18.016 1.34448 20.384 2.01648 22.816 3.32848C22.816 3.32848 20.992 1.56848 17.024 0.352479L17.344 0.00047834C17.344 0.00047834 20.512 -0.0955217 23.872 2.43248C23.872 2.43248 27.232 8.51248 27.232 16.0325C27.232 16.0325 25.28 19.4245 20.128 19.5845Z"
				fill={theme.colors.primary}
			/>
		</svg>
	);
}

function IconDribbble({ theme = defaultTheme, ...props }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M12 23.9719C5.38125 23.9719 0 18.6 0 11.9906C0 5.37188 5.38125 0 12 0C18.6187 0 24 5.37188 24 11.9813C24 18.5906 18.6187 23.9719 12 23.9719ZM22.1156 13.6219C21.7687 13.5094 18.9469 12.675 15.7313 13.1813C17.0719 16.8563 17.6156 19.8562 17.7188 20.475C20.025 18.9281 21.6656 16.4719 22.1156 13.6219ZM16.0031 21.4219C15.8531 20.5219 15.2531 17.3906 13.8187 13.6594C13.8 13.6687 13.7719 13.6781 13.7531 13.6781C7.96875 15.6937 5.89688 19.6969 5.70938 20.0719C7.44375 21.4219 9.62813 22.2281 12 22.2281C13.4156 22.2375 14.775 21.9469 16.0031 21.4219ZM4.3875 18.8438C4.62187 18.45 7.43437 13.8 12.7219 12.0844C12.8531 12.0375 12.9937 12 13.125 11.9625C12.8719 11.3812 12.5906 10.8 12.2906 10.2281C7.17188 11.7562 2.20312 11.6906 1.75313 11.6812C1.75313 11.7844 1.74375 11.8875 1.74375 11.9906C1.75313 14.625 2.74687 17.025 4.3875 18.8438ZM1.96875 9.9C2.42812 9.90938 6.64687 9.92813 11.4469 8.65313C9.75 5.63438 7.9125 3.10313 7.65 2.7375C4.77187 4.0875 2.63438 6.73125 1.96875 9.9ZM9.6 2.04375C9.88125 2.41875 11.7469 4.95 13.425 8.03437C17.0719 6.66562 18.6094 4.60313 18.7969 4.34062C16.9875 2.7375 14.6062 1.7625 12 1.7625C11.175 1.7625 10.3688 1.86562 9.6 2.04375ZM19.9313 5.52188C19.7156 5.8125 18 8.01562 14.2125 9.5625C14.4469 10.05 14.6812 10.5469 14.8969 11.0438C14.9719 11.2219 15.0469 11.4 15.1219 11.5688C18.5344 11.1375 21.9187 11.8313 22.2562 11.8969C22.2281 9.4875 21.3656 7.26562 19.9313 5.52188Z"
				fill={theme.colors.primary}
			/>
		</svg>
	);
}

function IconThreads({ theme = defaultTheme, ...props }: IconProps) {
	return (
		<svg
			width="24"
			height="28"
			viewBox="0 0 24 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M18.6755 12.9293C18.5553 12.8717 18.4333 12.8163 18.3096 12.7632C18.0943 8.79575 15.9264 6.52436 12.2862 6.50111C12.2697 6.50101 12.2533 6.50101 12.2368 6.50101C10.0595 6.50101 8.24871 7.43039 7.13415 9.12157L9.13614 10.4949C9.96875 9.23164 11.2755 8.96234 12.2378 8.96234C12.2489 8.96234 12.2601 8.96234 12.2711 8.96244C13.4696 8.97008 14.3741 9.31857 14.9595 9.99816C15.3855 10.4929 15.6704 11.1766 15.8115 12.0395C14.7488 11.8589 13.5995 11.8033 12.3709 11.8738C8.91002 12.0731 6.68507 14.0916 6.8345 16.8964C6.91033 18.3191 7.6191 19.543 8.83015 20.3426C9.85409 21.0185 11.1728 21.349 12.5434 21.2742C14.3534 21.1749 15.7734 20.4844 16.764 19.2216C17.5163 18.2627 17.9922 17.02 18.2022 15.4542C19.0648 15.9748 19.7041 16.6598 20.0572 17.4833C20.6575 18.8832 20.6926 21.1836 18.8155 23.0591C17.171 24.7021 15.1941 25.4128 12.2065 25.4348C8.89251 25.4102 6.38616 24.3474 4.7566 22.2758C3.23065 20.336 2.44203 17.5342 2.41261 13.9481C2.44203 10.3619 3.23065 7.56009 4.7566 5.62031C6.38616 3.54876 8.89247 2.48595 12.2065 2.46133C15.5446 2.48614 18.0946 3.55406 19.7865 5.63561C20.6161 6.65637 21.2416 7.94006 21.654 9.43679L24 8.81086C23.5002 6.96855 22.7137 5.38101 21.6435 4.06441C19.4744 1.39578 16.3021 0.0283535 12.2147 0H12.1983C8.11918 0.028255 4.98239 1.40088 2.87509 4.07971C0.999889 6.46354 0.0326036 9.78047 0.000101704 13.9383L0 13.9481L0.000101704 13.9579C0.0326036 18.1157 0.999889 21.4327 2.87509 23.8165C4.98239 26.4953 8.11918 27.868 12.1983 27.8962H12.2147C15.8412 27.871 18.3975 26.9215 20.5034 24.8176C23.2586 22.065 23.1756 18.6147 22.2675 16.4967C21.616 14.9778 20.3739 13.7441 18.6755 12.9293ZM12.4139 18.8164C10.897 18.9018 9.32115 18.221 9.24345 16.7627C9.18586 15.6814 10.0129 14.4749 12.507 14.3312C12.7926 14.3147 13.0728 14.3067 13.3482 14.3067C14.2541 14.3067 15.1016 14.3947 15.872 14.5631C15.5847 18.1521 13.899 18.7349 12.4139 18.8164Z"
				fill={theme.colors.primary}
			/>
		</svg>
	);
}

function IconFigma({ theme = defaultTheme, ...props }: IconProps) {
	return (
		<svg
			width="19"
			height="28"
			viewBox="0 0 19 28"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M9.33337 13.9999C9.33337 12.7622 9.82504 11.5753 10.7002 10.7001C11.5754 9.82492 12.7624 9.33325 14 9.33325C15.2377 9.33325 16.4247 9.82492 17.2999 10.7001C18.175 11.5753 18.6667 12.7622 18.6667 13.9999C18.6667 15.2376 18.175 16.4246 17.2999 17.2997C16.4247 18.1749 15.2377 18.6666 14 18.6666C12.7624 18.6666 11.5754 18.1749 10.7002 17.2997C9.82504 16.4246 9.33337 15.2376 9.33337 13.9999Z"
				fill="#1ABCFE"
			/>
			<path
				d="M0 23.3334C0 22.0957 0.491665 20.9088 1.36683 20.0336C2.242 19.1584 3.42899 18.6667 4.66667 18.6667H9.33333V23.3334C9.33333 24.5711 8.84167 25.7581 7.9665 26.6332C7.09133 27.5084 5.90434 28.0001 4.66667 28.0001C3.42899 28.0001 2.242 27.5084 1.36683 26.6332C0.491665 25.7581 0 24.5711 0 23.3334Z"
				fill="#0ACF83"
			/>
			<path
				d="M9.33337 0V9.33333H14C15.2377 9.33333 16.4247 8.84167 17.2999 7.9665C18.175 7.09133 18.6667 5.90434 18.6667 4.66667C18.6667 3.42899 18.175 2.242 17.2999 1.36684C16.4247 0.491665 15.2377 0 14 0H9.33337Z"
				fill="#FF7262"
			/>
			<path
				d="M0 4.66667C0 5.90434 0.491665 7.09133 1.36683 7.9665C2.242 8.84167 3.42899 9.33333 4.66667 9.33333H9.33333V0H4.66667C3.42899 0 2.242 0.491665 1.36683 1.36684C0.491665 2.242 0 3.42899 0 4.66667Z"
				fill="#F24E1E"
			/>
			<path
				d="M0 13.9999C0 15.2376 0.491665 16.4246 1.36683 17.2997C2.242 18.1749 3.42899 18.6666 4.66667 18.6666H9.33333V9.33325H4.66667C3.42899 9.33325 2.242 9.82492 1.36683 10.7001C0.491665 11.5753 0 12.7622 0 13.9999Z"
				fill="#A259FF"
			/>
		</svg>
	);
}

export {
	IconCheck,
	IconArrow,
	IconGitHub,
	IconDiscord,
	IconDribbble,
	IconThreads,
	IconFigma,
};
