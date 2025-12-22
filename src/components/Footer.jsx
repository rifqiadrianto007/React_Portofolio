import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="w-screen py-8 px-4 bg-card border-t border-border relative left-1/2 right-1/2 -mx-[50vw]">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Rifqi Adrianto. All rights reserved.
                </p>
                <a
                    href="#hero"
                    className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                    aria-label="Back to top">
                    <ArrowUp className="w-5 h-5" />
                </a>
            </div>
        </footer>
    );
};