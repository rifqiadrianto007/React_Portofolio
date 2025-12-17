import { Mail, Instagram, Linkedin, Threads, Send } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault(),
            setIsSubmitting(true);
        setTimeout(() => {
            toast({
                title: "Messeage sent!",
                description: "Thank you for your messeage. I'll get back to you soon.",
            })
            setIsSubmitting(false);
        }, 1500);
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut omnis inventore quam.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibol mb-6">Contact Information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"></Mail>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:rifqiadrianto55@gmail.com"
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        rifqiadrianto55@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Linkedin className="h-6 w-6 text-primary"></Linkedin>
                                </div>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <a href="mailto:rifqiadrianto55@gmail.com"
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        rifqiadrianto55@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Instagram className="h-6 w-6 text-primary"></Instagram>
                                </div>
                                <div>
                                    <h4>Instagram</h4>
                                    <a href="mailto:rifqiadrianto55@gmail.com"
                                        target="_blank"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        rifqiadrianto55@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Bagian social media */}
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Follow Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin></Linkedin>
                                </a>
                                <a href="#" target="_blank">
                                    <Instagram></Instagram>
                                </a>
                                <a href="#" target="_blank">
                                    <Threads></Threads>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send Messeage</h3>
                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your name ..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="abc123@mail.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea id="message" name="message" required
                                    className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd to talk about ..." />
                            </div>
                            <button type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center gap-2",

                                )}>
                                {isSubmitting ? "Sending ..." : "Send Messeage"}
                                <Send size={16}></Send>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}