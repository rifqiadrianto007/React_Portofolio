import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SiCekam",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/projects/SiCekam.webp",
        tags: ["Larevel", "TailwindCSS", "Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/SiCeKam",
    },
    {
        id: 2,
        title: "Schedulo",
        description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/projects/Schedulo.webp",
        tags: ["Laravel", "MySQL", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/Schedulo",
    },
    {
        id: 3,
        title: "SIRECA",
        description:
            "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/projects/SIRECA.webp",
        tags: ["Laravel", "Python", "GAN"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/SIRECA_web",
    },
    {
        id: 4,
        title: "SehatIn",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/SehatIn.webp",
        tags: ["C#", "Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/Sehat.In",
    },
    {
        id: 5,
        title: "ReFind (Website)",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/ReFindWeb.webp",
        tags: ["HTML", "CSS", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/ReFind",
    },
    {
        id: 6,
        title: "SiBarang",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/SiBarang.webp",
        tags: ["Laravel", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/SiBarang_Web",
    },
    {
        id: 7,
        title: "ReFind App Mobile",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/ReFindApp.webp",
        tags: ["React", "Typescript", "Firebase"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/ReFind-App.",
    },
    {
        id: 8,
        title: "Epic Games (Clone)",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/EpicGames.webp",
        tags: ["HTML", "TailwindCSS"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/EpicGames.Clone",
    },
    {
        id: 9,
        title: "BeriTAU",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/beriTAU.webp",
        tags: ["Laravel", "Bootstrap"],
        demoUrl: "https://beritauportal-rdk8usby3-rifqiadrianto007s-projects.vercel.app",
        githubUrl: "https://github.com/rifqiadrianto007/beriTAU_portal",
    },
    {
        id: 10,
        title: "Books Author Web",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/BooksAuthor.webp",
        tags: ["Laravel", "TailwindCSS", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/BooksAuthor",
    },
    {
        id: 11,
        title: "Queue System",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/HEAP.webp",
        tags: ["Laravel", "Python"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/Sistem-Antrean-HEAP",
    },
    {
        id: 12,
        title: "Memorize Puzzle Game",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/MemorizeGame.webp",
        tags: ["Laravel", "TailwindCSS", "MySQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/rifqiadrianto007/Memoryze-Table-Game",
    },
    {
        id: 13,
        title: "Academic Count System",
        description:
            "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/projects/academic.webp",
        tags: ["Laravel", "Python", "Matplotlib"],
        demoUrl: "#",
        githubUrl: "#",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    After studying for approximately two years, I have successfully completed several projects as final assignments for some of my courses.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/rifqiadrianto007">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
};