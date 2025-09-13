import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import { cn } from "../lib/utils";
import { useToast } from "../../hooks/use-toast";


export const ContactSection = () => {

    // const {toast} =useToast()
    
    // const [isSubmitting, setIsSubmitting] = useState(false);
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setTimeout(() => {
    //         toast({
    //             title: "Message sent!",
    //             description: "Thankyou, get back you soon"
    //         });
    //     },1500)
    // }


  return (
    <section id="contact" className="py-24 px-6 lg:px-24 bg-secondary/30">
      
        <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
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

            <div className="flex items-center gap-4 bg-card shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <Phone className="text-secondary" size={28} />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a
                  href="tel:+919304561784"
                  className="text-yellow-800 hover:text-primary"
                >
                  +91 93045 61784
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <MapPin className="text-secondary" size={28} />
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-yellow-800">Bengaluru, India</p>
              </div>
            </div>
          </div>

          {/* Right side - Socials */}
            <div className="flex flex-col items-center space-y-4">
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

        {/* Contact Form
        <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send Message</h3>
            
            <form className="space-y-6">
                <div>
                    <label htmlFor="name"> Your Name </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                        placeholder="Krisha.."
                    >
                    </input>
                </div>

                <div>
                    <label htmlFor="email"> Your Email </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary"
                        placeholder="email@gamil.com"
                    >
                    </input>
                </div>

                <div>
                    <label 
                        htmlFor="message" 
                        className="block text-sm font-medium mb-2">
                        {" "}
                        Your Message
                    </label>
                    <textarea
                        type="text"
                        id="message"
                        name="message"
                        required
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outlind-hidden focus:ring-2 focus:ring-primary resize-none"
                        placeholder="Write something.."
                    >
                    </textarea>
                </div>

                <button type="submit" className={cn("cosmiic-button w-full flex items-center gap-2",
                    )}
                >
                    Send  Message
                </button>

            </form> */}

        {/* </div> */}
      </div>
    </section>
  );
};
