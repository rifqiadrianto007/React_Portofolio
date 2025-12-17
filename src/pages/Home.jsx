import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "../components/AboutSection";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* {Theme Toggle} */}
            <ThemeToggle></ThemeToggle>

            {/* Background effects */}
            <StarBackground></StarBackground>

            {/* Navbar */}
            <Navbar></Navbar>

            {/* Main Content */}
            <main>
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <SkillsSection></SkillsSection>
                <ProjectsSection></ProjectsSection>
                <ContactSection></ContactSection>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};