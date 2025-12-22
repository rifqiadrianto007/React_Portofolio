import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "SiCekam",
        description: "AI-based web for detecting the number and health condition of chickens.",
        image: "/projects/SiCekam.webp",
        tags: ["Larevel", "TailwindCSS", "Python"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/SiCeKam",
    },
    {
        id: 2,
        title: "Schedulo",
        description:
            "Campus activity monitoring, scheduling, and information system.",
        image: "/projects/Schedulo.webp",
        tags: ["Laravel", "MySQL", "TailwindCSS"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/Schedulo",
    },
    {
        id: 3,
        title: "SIRECA",
        description:
            "Sistem restorasi citra menggunakan machine learning berbasing GAN.",
        image: "/projects/SIRECA.webp",
        tags: ["Laravel", "Python", "GAN"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/SIRECA_web",
    },
    {
        id: 4,
        title: "SehatIn",
        description:
            "A web-based application that measures BMI, menstruation, medication recommendations, and nearby health facilities.",
        image: "/projects/SehatIn.webp",
        tags: ["C#", "Python"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/Sehat.In",
    },
    {
        id: 5,
        title: "ReFind (Website)",
        description:
            "The ReFind web-based application helps with the process of reporting lost and found items on campus.",
        image: "/projects/ReFindWeb.webp",
        tags: ["HTML", "CSS", "MySQL"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/ReFind",
    },
    {
        id: 6,
        title: "SiBarang",
        description:
            "A warehouse inventory system integrated with goods flow records.",
        image: "/projects/SiBarang.webp",
        tags: ["Laravel", "TailwindCSS"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/SiBarang_Web",
    },
    {
        id: 7,
        title: "ReFind App Mobile",
        description:
            "The ReFind Android mobile apps that helps with the process of reporting lost and found items on campus.",
        image: "/projects/ReFindApp.webp",
        tags: ["React", "Typescript", "Firebase"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/ReFind-App.",
    },
    {
        id: 8,
        title: "Epic Games (Clone)",
        description:
            "A fake website of a game provider company called Epic Games, complete with various catalog and purchase features.",
        image: "/projects/EpicGames.webp",
        tags: ["HTML", "TailwindCSS"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/EpicGames.Clone",
    },
    {
        id: 9,
        title: "BeriTAU",
        description:
            "A news portal that provides a variety of the latest news, complete with filter features by topic and release date.",
        image: "/projects/beriTAU.webp",
        tags: ["Laravel", "Bootstrap"],
        demoUrl: "https://beritauportal-rdk8usby3-rifqiadrianto007s-projects.vercel.app",
        githubUrl: "https://github.com/rifqiadrianto007/beriTAU_portal",
    },
    {
        id: 10,
        title: "Books Author Web",
        description:
            "A library book catalog system integrated with book identification and user borrowing history records.",
        image: "/projects/BooksAuthor.webp",
        tags: ["Laravel", "TailwindCSS", "MySQL"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/BooksAuthor",
    },
    {
        id: 11,
        title: "Queue System",
        description:
            "A queueing system that applies a priority scale based on several aspects, such as members, order type, and order quantity.",
        image: "/projects/HEAP.webp",
        tags: ["Laravel", "Python"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/Sistem-Antrean-HEAP",
    },
    {
        id: 12,
        title: "Memorize Puzzle Game",
        description:
            "A simple puzzle memorization game built using Python's pyGames library.",
        image: "/projects/MemorizeGame.webp",
        tags: ["Laravel", "TailwindCSS", "MySQL"],
        demoUrl: "/404",
        githubUrl: "https://github.com/rifqiadrianto007/Memoryze-Table-Game",
    },
    {
        id: 13,
        title: "Academic Count System",
        description:
            "A system for recommending and predicting student graduation outcomes based on academic, non-academic, and attendance aspects",
        image: "/projects/academic.webp",
        tags: ["Laravel", "Python", "Matplotlib"],
        demoUrl: "/404",
        githubUrl: "/404",
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