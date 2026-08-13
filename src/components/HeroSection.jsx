import { ArrowDown } from "lucide-react"
import kajalImg from "../assets/kajal_image.jpg"; 
export const HeroSection = () =>{
    return(
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <img
                            src={kajalImg}
                            alt="Kajal Kumari"
                            className="w-40 h-40 md:w-52 md:h-52 rounded-full shadow-lg border-4 border-primary object-cover opacity-0 animate-fade-in"
                        />
                    </div>
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1"> Kajal</span>
                        <span className="text-gradient ml-2 opacity animate-fade-in-delay-1"> Kumari</span>
                    </h1>

                    <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground">
                        Full-Stack Software Engineer
                    </h2>

                    <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I build scalable web platforms and cloud-native APIs — fixed an N+1 DB query into a single batched call and owned 57% of merged PRs across a key product. Seeking SDE roles focused on backend engineering and system design.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-wrap gap-3 justify-center">
                        <a href="#cv" className="cosmic-button focus-ring flex items-center gap-2">
                            View Resume
                        </a>
                        <a href="https://github.com/Cider8" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300 focus-ring flex items-center">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/kajal-kri/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300 focus-ring flex items-center">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary"></ArrowDown>
            </div>

        </section>
    )
}