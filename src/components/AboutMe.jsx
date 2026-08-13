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
                        <h3 className="text-2xl md:text-3xl font-semibold text-left">Full-Stack Software Engineer · approx 1 year Experience</h3>

                        <p className="text-muted-foreground">
                            I'm a <span className="font-semibold text-primary">Software Engineer I at SysAmplify Technologies</span>, where I build scalable frontend systems and Go/Lambda REST APIs across React, TypeScript, Node.js, and AWS (DynamoDB, S3). Apart from SysAmplify, my primary tech stack is the MERN stack and JavaScript — I have expertise in MERN, SQL, and JavaScript. I designed a reusable, config-driven GenericTable/GenericForm architecture that let 5+ dashboard modules plug in with zero new UI code, and diagnosed an N+1 query bug by replacing a per-record DB call inside a loop with a single batched query.
                        </p>

                        <p className="text-muted-foreground">
                            On a cross-platform desktop test-automation tool, I owned <span className="font-semibold">57% of merged pull requests</span> and drove half of all development activity over a 4-month release cycle — shipping 5+ core workflows end-to-end and resolving 40% of all bug-fix commits across 100+ tracked defects, including critical data-loss and session-management issues.
                        </p>

                        <p className="text-muted-foreground">
                            Before SysAmplify, I built a real-time inventory dashboard as a freelance developer that cut manual stock-checking time by 30% for a client, and automated product-listing workflows during an AI product internship, saving 10 hours/week of manual work. I've also solved 500+ problems on LeetCode (1600+ rating) and reached the semifinals of Flipkart GRID 5.0 and the Tata Imagination Challenge.
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
                                        Building responsive websites and full-stack web applications
                                        with JavaScript and the MERN stack. Expertise in MERN, SQL, and JavaScript.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Backend & Cloud APIs</h4>
                                    <p className="text-muted-foreground">
                                        Designing Go/Lambda REST APIs over DynamoDB with cursor-based
                                        pagination, plus shared internal libraries for DB access and logging.
                                    </p>
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
                                        Hands-on experience across a production engineering role, a freelance
                                        client project, and an AI product internship.
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