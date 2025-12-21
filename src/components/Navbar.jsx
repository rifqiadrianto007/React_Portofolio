import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);

            // Deteksi active section
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsMenuOpen(false);
        // smooth scroll
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 w-full z-50 transition-[padding,background-color,box-shadow] duration-300",
                isScrolled ? "py-3 bg-background/70 backdrop-blur-lg shadow-sm border-b border-border/40"
                    : "py-5 bg-background/50 backdrop-blur-md"
            )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <a
                    className="text-xl font-bold text-primary flex items-center"
                    href="#hero" onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("#hero");
                    }}>
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Rifqi </span>
                        Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <a
                                key={key}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                                className={cn(
                                    "relative text-foreground/80 hover:text-primary transition-colors duration-300",
                                    // styling underline active section
                                    "after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-[padding,background-color,box-shadow] after:duration-300",
                                    "hover:after:w-full",
                                    isActive && "text-primary after:w-full"
                                )}>
                                {item.name}
                            </a>
                        )
                    })}
                </div>

                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                </button>
                <div
                    className={cn(
                        "fixed top-0 left-0 w-screen h-dvh", "bg-background/95 backdrop-blur-md",
                        "z-40 flex flex-col items-center justify-center", "transition-all duration-300 md:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <a
                                    key={key}
                                    href={item.href}
                                    className={cn(
                                        "text-foreground/80 hover:text-primary transition-colors duration-300 text-center",
                                        isActive && "text-primary font-semibold"
                                    )}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href);
                                    }}>
                                    {item.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
};