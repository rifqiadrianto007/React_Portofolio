import { Briefcase, Code, BrainCircuit } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Full Stack Web Developer
                        </h3>

                        <p className="text-muted-foreground">
                            With over 2 years of experience in web development,
                            I specialize in creating responsive, efficient web applications
                            that are compatible with various needs and modern technologies.
                        </p>

                        <p className="text-muted-foreground">
                            I am skilled at leading and creating efficient solutions to complex
                            problems, and I continue to learn new technologies and techniques
                            to stay competitive in the world of web development.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="https://www.linkedin.com/in/rifqiadrianto/"
                            target="_blank"
                            className="cosmic-button">
                                Get In Touch
                            </a>

                            <a
                                href="" // linked to gdrive
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive and efficient websites with severals
                                        modern frameworks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Leading team projects from conception to completion with agile
                                        methodologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* ganti ke focus job lainnya */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BrainCircuit className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Machine Learning</h4>
                                    <p className="text-muted-foreground">
                                        Training and testing data to develop websites that support
                                        AI-based model.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};