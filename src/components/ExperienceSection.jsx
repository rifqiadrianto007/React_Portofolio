import { ArrowRight, ExternalLink, Github } from "lucide-react";

const experience = [
    {
        id: 1,
        title: "SaaS Landing Page",
        description: "A beautiful landing page app using React and Tailwind.",
        image: "/experience/experience.jpg",
        tags: ["React", "TailwindCSS", "Supabase"],
    },
    {
        id: 2,
        title: "Orbit Analytics Dashboard",
        description: "Interactive analytics dashboard with data visualization and filtering capabilities.",
        image: "/experience/experience.jpg",
        tags: ["TypeScript", "D3.js", "Next.js"],
    },
    {
        id: 3,
        title: "E-commerce Platform",
        description: "Full-featured e-commerce platform with user authentication and payment processing.",
        image: "/experience/experience.jpg",
        tags: ["React", "Node.js", "Stripe"],
    },
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    License <span className="text-primary"> experience </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    After studying for approximately one year, I have successfully completed several experience as final assignments for some of my courses.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experience.map((project, key) => (
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};