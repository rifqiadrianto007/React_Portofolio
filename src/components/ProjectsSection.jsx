import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        tittitle: "Project One",
        description: "Description for project one.",
        image: "/projects/projects.jpg",
        tags: ["React", "JavaScript"],
        demoUrl: "#",
        github: "#",
    },
    {
        id: 2,
        tittitle: "Project Two",
        description: "Description for project two.",
        image: "/projects/projects.jpg",
        tags: ["React", "JavaScript"],
        demoUrl: "#",
        github: "#",
    },
    {
        id: 3,
        tittitle: "Project Three",
        description: "Description for project three.",
        image: "/projects/projects.jpg",
        tags: ["React", "JavaScript"],
        demoUrl: "#",
        github: "#",
    },
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Feature <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia amet culpa voluptatibus quidem corporis tempore eos fugiat nulla optio? Nesciunt aliquid.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3 ">
                                    <a href={project.demoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}>

                                        </ExternalLink>
                                    </a>
                                    <a href={project.github}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}>

                                        </Github>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="#" target="_blank" className="cosmic-button w-fitt flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16}></ArrowRight>
                    </a>
                </div>
            </div>
        </section>
    );
};