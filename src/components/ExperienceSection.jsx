const experience = [
    {
        id: 1,
        title: "Intellectual Property Rights",
        description: "Best 1 most innovative student organization.",
        image: "/experience/HKI Capstone.webp",
    },
    {
        id: 2,
        title: "Abdidaya Ormawa 2025",
        description: "Best 1 most innovative student organization.",
        image: "/experience/PPK Ormawa.webp",
    },
    {
        id: 3,
        title: "Badan Eksekutif Mahasiswa 2024/2025",
        description: "Chairman of academic and non-academic competitions within the faculty.",
        image: "/experience/Sertif BEM.webp",
    },
    {
        id: 4,
        title: "Friendship 2025",
        description: "Chairman of academic and non-academic competitions within the faculty.",
        image: "/experience/sertif FS.webp",
    },
    {
        id: 5,
        title: "Intellectual Property Rights",
        description: "Intellectual property documents for the GAN-based image restoration website (SIRECA).",
        image: "/experience/HKI Sireca.webp",
    },
    {
        id: 6,
        title: "MS Office Sertification",
        description: "MS Office competency certification for data processing and reporting.",
        image: "/experience/Sekolahku.webp",
    },
    {
        id: 7,
        title: "Problem Solving HackerRank",
        description: "Taken part in problem solving challenges on the HackerRank platform.",
        image: "/experience/Problem Solving HackerRank.webp",
    },
    {
        id: 8,
        title: "PKM Competition",
        description: "Participants in the student creativity week in the fields of research and humanities.",
        image: "/experience/PKM.webp",
    },
    {
        id: 9,
        title: "Student Leadership",
        description: "Leadership training and certification for student organization members.",
        image: "/experience/LKMM.webp",
    },
    {
        id: 10,
        title: "PKM Training Competition",
        description: "Participants in the training program for the student creativity week competition.",
        image: "/experience/PKMCen.webp",
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
                    I have successfully obtained several certifications and licenses
                    from organizational experiences, competitions, and projects.
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