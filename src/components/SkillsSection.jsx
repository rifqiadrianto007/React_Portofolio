const skills = [
    { name: "HTML", icon: "html-1.svg" },
    { name: "CSS", icon: "css-3.svg" },
    { name: "JavaScript", icon: "javascript-1.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "PHP", icon: "php.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "Python", icon: "python-5.svg" },
    { name: "Firebase", icon: "firebase.svg" },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="relative px-4 py-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-x-8 md:gap-y-12">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group flex min-w-0 flex-col items-center gap-3 text-center"
                        >
                            <div className="flex h-24 w-24 items-center justify-center transition-transform duration-300 group-hover:-translate-y-1 sm:h-28 sm:w-28">
                                <img
                                    src={`/skills/${skill.icon}`}
                                    alt={`${skill.name} logo`}
                                    className="max-h-full max-w-full object-contain"
                                />
                            </div>
                            <h3 className="text-sm font-medium text-muted-foreground transition-colors duration-300 group-hover:text-foreground sm:text-base">
                                {skill.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};