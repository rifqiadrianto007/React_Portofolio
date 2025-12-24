import {
    Github,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    Youtube,
    Rss,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi input
        if (!formData.name || !formData.email || !formData.message) {
            toast({
                title: "Validation Error",
                description: "Please fill in all fields.",
                variant: "destructive",
            });
            return;
        }

        setIsSubmitting(true);

        try {
            console.log('Sending email with data:', formData); // Debug log

            // Mengirim email menggunakan EmailJS
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // emailJS API key
                body: JSON.stringify({
                    service_id: 'service_pir47yu',
                    template_id: 'template_v6yyhxo',
                    user_id: 'a3B9jfv8Jq8C2ZXXB',
                    template_params: {
                        from_name: formData.name,
                        from_email: formData.email,
                        message: formData.message,
                    }
                })
            });

            console.log('Response status:', response.status); // Debug log

            if (response.ok || response.status === 200) {
                toast({
                    title: "Message sent!",
                    description: "Thank you for your message. I'll get back to you soon.",
                });
                // Reset form setelah berhasil
                setFormData({ name: '', email: '', message: '' });
            } else {
                const errorText = await response.text();
                console.error('Error response:', errorText); // Debug log
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error sending email:', error); // Debug log
            toast({
                title: "Failed to send message",
                description: "Something went wrong. Please try again later or contact me directly via email.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Let's <span className="text-primary"> Connect</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I am excited to connect with you through some of my social media. Very open to sharing information related to full-stack web development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a
                                        href="mailto:rifqiadrianto55@gmail.com"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        rifqiadrianto55@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a
                                        href="tel:+6282332061664"
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        +62 823-3206-1664
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors">
                                        Jember, East Java, Indonesia
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.youtube.com/@rifqi_adrianto1603" target="_blank">
                                    <Youtube />
                                </a>
                                <a href="https://www.linkedin.com/in/rifqiadrianto/" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/rifqiadrianto007" target="_blank">
                                    <Github />
                                </a>
                                <a href="https://www.instagram.com/rifqi_adrianto/" target="_blank">
                                    <Instagram />
                                </a>
                                <a href="https://rifqiadrianto.blogspot.com/" target="_blank">
                                    <Rss />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Give Me Your Best Messeage</h3>

                        <div className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="Your name..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                                    placeholder="abc123@gmail.com"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2",
                                    isSubmitting && "opacity-50 cursor-not-allowed"
                                )}>
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};