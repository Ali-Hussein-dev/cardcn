"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type ThemeMode = "dark" | "light";

function useThemeMode() {
	const [mode, setMode] = useState<ThemeMode>("dark");

	useEffect(() => {
		if (typeof document === "undefined") {
			return;
		}

		const stored = window.localStorage.getItem(
			"theme-mode",
		) as ThemeMode | null;
		const initial = stored ?? "dark";
		setMode(initial);
	}, []);

	useEffect(() => {
		if (typeof document === "undefined") {
			return;
		}

		const root = document.documentElement;
		root.classList.toggle("dark", mode === "dark");
		window.localStorage.setItem("theme-mode", mode);
	}, [mode]);

	const toggleMode = () =>
		setMode((current) => (current === "dark" ? "light" : "dark"));

	return {
		mode,
		toggleMode,
	};
}

export function ModeToggle() {
	const { mode, toggleMode } = useThemeMode();
	const ThemeIcon = mode === "dark" ? SunMedium : MoonStar;
	return (
		<Button onClick={toggleMode} size="icon" variant="ghost" type="button">
			<ThemeIcon />
		</Button>
	);
}
