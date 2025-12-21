import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ isScrolled }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    // Prevent hydration mismatch
    if (!mounted) {
        return (
            <button
                className="p-2 rounded-full transition-all duration-300 hover:bg-primary/10"
                aria-label="Toggle theme"
            >
                <div className="h-6 w-6" />
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative p-2 rounded-full transition-all duration-300",
                "hover:bg-primary/10 hover:scale-110 hover:rotate-12",
                "focus:outline-none focus:ring-2 focus:ring-primary/50",
                "group"
            )}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            <div className="relative w-6 h-6">
                <Sun
                    className={cn(
                        "absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-500",
                        "rotate-0 scale-100 opacity-100",
                        isDarkMode && "rotate-90 scale-0 opacity-0"
                    )}
                />
                <Moon
                    className={cn(
                        "absolute inset-0 h-6 w-6 text-blue-400 transition-all duration-500",
                        "rotate-90 scale-0 opacity-0",
                        isDarkMode && "rotate-0 scale-100 opacity-100"
                    )}
                />
            </div>
        </button>
    );
};