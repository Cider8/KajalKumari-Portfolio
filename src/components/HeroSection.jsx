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
                    <h1 className="text-4xl md:text-6xl font-bold tracking-light">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}
                            Kajal
                        </span>
                        <span className="text-gradient ml-2 opacity animate-fade-in-delay-1">
                            {" "}
                            Kumari
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-2-xl mx-auto opacity-0 animate-fade-in-delay-3">
                        A curious learner, problem solver, and passionate <span className="font-semibold text-primary">MERN Stack Developer</span>, 
                        I enjoy crafting responsive web applications that seamlessly blend 
                        clean code with creative design. My goal is to build user-friendly 
                        and impactful solutions that deliver meaningful digital experiences 
                        to inspire and engage users. 
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            view My Work
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