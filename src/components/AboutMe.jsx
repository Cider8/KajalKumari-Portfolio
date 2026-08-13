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
                        <h3 className="text-2xl md:text-3xl font-semibold text-left">Full-Stack Software Engineer</h3>

                        <p className="text-muted-foreground">
                            I'm a <span className="font-semibold text-primary">Software Engineer I at SysAmplify Technologies</span>, where I build scalable frontend systems and full-stack applications with React, TypeScript, Node.js, Go, and AWS (DynamoDB, S3). I architected a React/TypeScript admin platform managing 100,000+ user records and independently own the frontend and QA of an internal Java-based test-automation product, working directly under the CEO's guidance.
                        </p>

                        <p className="text-muted-foreground">
                            My background includes production engineering work and hackathons like <span className="font-semibold">Smart India Hackathon</span>, where I helped build <span className="font-semibold">RESQ+</span>, a real-time disaster management tool. I've also solved 500+ problems on LeetCode (1600+ rating) and reached the semifinals of Flipkart GRID 5.0 and the Tata Imagination Challenge — experiences that sharpened my algorithmic problem-solving, system design, and collaboration skills.
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy backend engineering, API design, performance optimization, and scalable architecture — recently cutting a core API's query pattern from N+1 to a single batched call. I'm always open to SDE opportunities where I can keep driving product reliability and scale.
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
                                        with React, TypeScript, Node.js, and cloud-native REST APIs on AWS.
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
                                    <h4 className="font-semibold text-lg">Test Automation & QA</h4>
                                    <p className="text-muted-foreground">
                                        Designing use cases and test cases, and driving automation testing
                                        to uncover and resolve bugs before they reach production.
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
                                        Hands-on experience through a production engineering role, hackathons, and
                                        real-world projects that strengthened my problem-solving and teamwork skills.
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
