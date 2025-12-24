import { Home, ArrowLeft } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
    return (
        <div className="fixed inset-0 min-h-screen flex items-center justify-center px-4 bg-slate-950 text-white overflow-hidden">
            {/* Star Background */}
            <StarBackground />

            {/* Content */}
            <div className="container max-w-2xl mx-auto text-center z-10">
                <div className="space-y-8">
                    {/* 404 Number */}
                    <div className="relative">
                        <h1 className="text-[150px] md:text-[200px] font-bold leading-none opacity-0 animate-fade-in">
                            <span className="text-primary">4</span>
                            <span className="text-gradient">0</span>
                            <span className="text-primary">4</span>
                        </h1>
                    </div>

                    {/* Error Message */}
                    <div className="space-y-4 opacity-0 animate-fade-in-delay-1">
                        <h2 className="text-2xl md:text-4xl font-bold text-white">
                            Coming Soon
                        </h2>
                        <p className="text-slate-300 text-base md:text-lg max-w-md mx-auto">
                            I'm sorry, the developer will finish this page soon. Please return to the page{" "}
                            <span className="text-primary">home</span>.
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 opacity-0 animate-fade-in-delay-2">
                        <a
                            href="/"
                            className="cosmic-button inline-flex items-center gap-2 justify-center">
                            <Home className="w-4 h-4" />
                            Back to Home
                        </a>
                        <button
                            onClick={() => window.history.back()}
                            className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-lg border border-primary/20 hover:border-primary/40 text-white hover:bg-primary/10 transition-all duration-300">
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};