import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { cn } from "../lib/utils";
import { useToast } from "../../hooks/use-toast";


export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  return (
    <section id="contact" className="py-24 px-6 lg:px-24 bg-secondary/30">
      
        <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I’m always open to new opportunities and project discussions.  
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Info & Socials in one row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-card shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <Mail className="text-secondary" size={28} />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a
                  href="mailto:kajalkri2323@gmail.com"
                  className="text-yellow-800 hover:text-primary"
                >
                  kajalkri2323@gmail.com
                </a>
              </div>
            </div>

            {/* <div className="flex items-center gap-4 bg-card shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <Phone className="text-secondary" size={28} />
              {/*<div>
                <h4 className="font-semibold">Phone</h4>
                {/*<a
                  href="tel:+919304561784"
                  className="text-yellow-800 hover:text-primary"
                >
                  +91 93045 61784
                </a>*
              </div>
            </div>*/}

            <div className="flex items-center gap-4 bg-card shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <MapPin className="text-secondary" size={28} />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-yellow-800">Bengaluru, India</p>
              </div>
            </div>
          </div>

          {/* Right side - Socials */}
            <div className="flex flex-col items-center space-y-4 button-surface p-4 rounded-2xl">
                <a
                    href="https://github.com/Cider8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card shadow-md rounded-xl p-3 hover:shadow-lg transition text-yellow-600 hover:text-primary"
                >
                    <Github size={28} 
                        
                    />
                </a>

                <a
                    href="https://www.linkedin.com/in/kajal-kri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card shadow-md rounded-xl p-3 hover:shadow-lg transition text-yellow-600 hover:text-primary"
                >
                    <Linkedin size={28} />
                </a>
            </div>
        </div>

        {/* Contact Form */}
       {/* <div className="bg-card p-8 rounded-2xl shadow-xs mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center"> Send Message</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                onSubmit={async (e) => {
                    e.preventDefault();
                    if (!serviceId || !templateId || !publicKey) {
                        toast.error("Email service not configured. Please set VITE_EMAILJS_* env vars.");
                        return;
                    }
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    const name = String(formData.get('name') || '').trim();
                    const email = String(formData.get('email') || '').trim();
                    const message = String(formData.get('message') || '').trim();

                    if (!name || !email || !message) {
                        toast.error("Please fill in all fields.");
                        return;
                    }
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        toast.error("Please enter a valid email address.");
                        return;
                    }
                    setIsSubmitting(true);
                    try {
                        await emailjs.send(
                            serviceId,
                            templateId,
                            {
                                from_name: name,
                                reply_to: email,
                                message: message,
                            },
                            { publicKey }
                        );
                        toast.success("Message sent! Thanks for reaching out.");
                        form.reset();
                    } catch (err) {
                        console.error("EmailJS error:", err);
                        toast.error("Failed to send. Please try again later.");
                    } finally {
                        setIsSubmitting(false);
                    }
                }}
            >
                <div className="md:col-span-1">
                    <label htmlFor="name" className="block text-sm mb-2"> Your Name </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus-ring"
                        placeholder="Your name"
                    />
                </div>

                <div className="md:col-span-1">
                    <label htmlFor="email" className="block text-sm mb-2"> Your Email </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus-ring"
                        placeholder="you@example.com"
                    />
                </div>

                <div className="md:col-span-2">
                    <label 
                        htmlFor="message" 
                        className="block text-sm mb-2">
                        Your Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus-ring resize-y"
                        placeholder="Write something..."
                    />
                </div>

                <div className="md:col-span-2">
                    <button type="submit" disabled={isSubmitting} className="cosmic-button focus-ring w-full md:w-auto flex items-center gap-2 justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                        <Send className="h-4 w-4" />
                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>
                </div>

            </form>

        </div>*/}
      </div>
    </section>
  );
};
