import { Briefcase, Users, Code, ArrowRight } from "lucide-react";

export const FreelancingSection = () => {
    return (
        <section id="freelancing" className="py-24 px-6 lg:px-24 bg-gradient-to-br from-primary/5 to-primary/10">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Available for <span className="text-primary">Freelance Work</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        I'm actively seeking freelance opportunities to help businesses and individuals 
                        bring their digital ideas to life. With proven experience in client projects 
                        and a passion for delivering high-quality solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-card p-8 rounded-2xl shadow-md border-2 border-border hover:border-primary/50 transition-all duration-300 text-center group">
                        <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                            <Briefcase className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Client Experience</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Successfully delivered multiple client projects using the MERN stack, 
                            ensuring timely delivery and exceeding expectations.
                        </p>
                    </div>

                    <div className="bg-card p-8 rounded-2xl shadow-md border-2 border-border hover:border-primary/50 transition-all duration-300 text-center group">
                        <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                            <Code className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Full-Stack Expertise</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Specialized in building complete web applications from frontend UI/UX 
                            to backend APIs, Testing, database management & Deployment
                        </p>
                    </div>

                    <div className="bg-card p-8 rounded-2xl shadow-md border-2 border-border hover:border-primary/50 transition-all duration-300 text-center group">
                        <div className="p-4 rounded-full bg-primary/10 w-fit mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                            <Users className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Collaborative Approach</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I work closely with clients to understand their vision and deliver 
                            solutions that align with their business goals and user needs.
                        </p>
                    </div>
                </div>

                <div className="bg-card p-8 rounded-2xl shadow-lg border-2 border-primary/20 text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Whether you need a complete web application, API development, or frontend 
                        enhancements, I'm here to help turn your ideas into reality. Let's discuss 
                        your project requirements and create something amazing together.
                    </p>
                     <div className="flex justify-center">
                         <a 
                             href="#contact" 
                             className="cosmic-button focus-ring flex items-center gap-2 justify-center"
                         >
                             <span>Start a Project</span>
                             <ArrowRight className="h-4 w-4" />
                         </a>
                     </div>
                </div>
            </div>
        </section>
    );
};
