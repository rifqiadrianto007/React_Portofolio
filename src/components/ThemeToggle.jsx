import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Check system preference on mount
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setIsDarkMode(prefersDark);
        if (prefersDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "fixed top-5 right-5 z-50 p-3 rounded-full transition-all duration-300",
                "bg-card border border-border shadow-lg hover:scale-110",
                "focus:outline-none focus:ring-2 focus:ring-primary"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
                <Moon className="h-5 w-5 text-primary" />
            )}
        </button>
    );
};