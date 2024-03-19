"use client";
import React, { createContext, useEffect, useState } from "react";
import {
	GlobalStyles,
	Theme,
	themeDark,
} from "cherry-styled-components/src/lib";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

interface ThemeContextProps {
	setTheme: any;
}

export const ThemeContext = createContext<ThemeContextProps>({
	setTheme: null,
});

function CherryThemeProvider({
	children,
	theme,
}: {
	children: React.ReactNode;
	theme: Theme;
}) {
	const [currentTheme, setTheme] = useState(theme);
	useEffect(() => {
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
			setTheme(themeDark);
		} else {
			document.documentElement.classList.remove("dark");
			setTheme(theme);
		}
	}, []);
	const GlobalStylesComponent = GlobalStyles(currentTheme);

	return (
		<StyledThemeProvider theme={currentTheme}>
			<ThemeContext.Provider value={{ setTheme }}>
				<GlobalStylesComponent />
				{children}
			</ThemeContext.Provider>
		</StyledThemeProvider>
	);
}

export { CherryThemeProvider };
