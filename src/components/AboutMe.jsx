import { Briefcase, Code, User, Mail, Download } from "lucide-react"

export const AboutMe = () =>{
    return (
        <section id="about" className="py-24 px-6 lg:px-24 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-semibold text-left">Passionate Web Developer</h3>

                        <p className="text-muted-foreground">
                            I am a passionate <span className="font-semibold text-primary">MERN Stack Developer</span> 
                            with a strong foundation in building dynamic and responsive web applications. 
                            I enjoy turning ideas into reality through clean, efficient code and intuitive 
                            user interfaces.
                        </p>

                        <p className="text-muted-foreground">
                            My journey includes contributing to impactful projects and participating in 
                            hackathons like <span className="font-semibold">Smart India Hackathon</span>, 
                            where I collaborated with a team to develop <span className="font-semibold">RESQ+</span>, 
                            a real-time disaster management tool. These experiences have strengthened my 
                            problem-solving mindset, teamwork skills, and ability to perform under pressure.
                        </p>

                        <p className="text-muted-foreground">
                            I believe in continuous learning and adaptability, always staying curious about 
                            emerging technologies. My focus is on delivering meaningful digital solutions 
                            that not only solve problems but also create seamless experiences for users.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 button-surface p-4 justify-center md:justify-start">
                            <a href='#contact' className="cosmic-button focus-ring flex items-center gap-2 justify-center">
                                <Mail className="h-4 w-4" />
                                <span>Get In Touch</span>
                            </a>

                            <a href="#cv" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300 focus-ring flex items-center gap-2 justify-center">
                                <Download className="h-4 w-4" />
                                <span>Download Resume</span>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive website & Web application with
                                        modern frameworks using the Mern stack.
                                    </p>
                                </div>
                                
                            </div>
                        </div>
            
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                    <div className="text-left">
                                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                        <p className="text-muted-foreground">
                                            Designing intuitive and engaging interfaces with a focus on
                                            usability, accessibility, and seamless user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Projects & Experience</h4>
                                    <p className="text-muted-foreground">
                                        Hands-on experience through internships, hackathons, and real-world 
                                        projects that strengthened my problem-solving and teamwork skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </div>

        </section>
    )
}