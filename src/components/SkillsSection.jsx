import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // Frontend
    { nama: "HTML", level: 95, category: "Frontend" },
    { nama: "CSS", level: 90, category: "Frontend" },
    { nama: "JavaScript", level: 85, category: "Frontend" },
    { nama: "React", level: 80, category: "Frontend" },
    { nama: "Tailwind CSS", level: 88, category: "Frontend" },

    // Backend
    { nama: "Node.js", level: 75, category: "Backend" },
    { nama: "Express", level: 70, category: "Backend" },
    { nama: "MongoDB", level: 65, category: "Backend" },
    { nama: "PostgreSQL", level: 72, category: "Backend" },

    // Tools
    { nama: "Git", level: 85, category: "Tools" },
    { nama: "VS Code", level: 90, category: "Tools" },
    { nama: "Figma", level: 75, category: "Tools" },
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filterSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-card border border-border text-foreground hover:bg-primary/10"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filterSkills.map((skill, key) => (
                        <div key={key} className="bg-card border border-border p-6 rounded-lg shadow-sm card-hover">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-lg">{skill.nama}</h3>
                                <span className="text-sm text-muted-foreground font-medium">
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="w-full bg-border h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-full rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};