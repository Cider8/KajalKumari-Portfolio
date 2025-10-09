import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "BookStore E-commerce",
        description: "E-commerce app to browse and buy books across genres with auth and cart.",
        image: "/projects/project1.png",
        tags: ["React", "Tailwind CSS", "MongoDB","Node.js","Express","Firebase"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8/Book-Store-app"
    },

    {
        id: 2,
        title: "Knowtify EdTech",
        description: "EdTech platform for online tech courses; I contributed backend APIs and DB.",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind CSS", "MongoDB","Node.js","Express"],
        demoUrl: "https://frontend-main-beige.vercel.app/",
        githubUrl: "https://github.com/Cider8/"
    },

    {
        id: 3,
        title: "Book Finder",
        description: "Vite + React app to search books via Open Library API with instant results.",
        image: "/projects/project3.png",
        tags: ["React", "Tailwind CSS"],
        demoUrl: "https://book-finder-nu-woad.vercel.app/",
        githubUrl: "https://github.com/Cider8"
    },

    {
        id: 4,
        title: "AutoSave Blog",
        description: "Blog app with CRUD and auto-save drafts for a smooth writing flow.",
        image: "/projects/project4.png",
        tags: ["React", "Tailwind CSS", "MongoDB","Node.js","Express"],
        demoUrl: " https://blog-mern-tau.vercel.app/",
        githubUrl: "https://github.com/Cider8/Blog_Mern"
    },

    {
        id: 5,
        title: "ResQ+ Disaster Response",
        description: "Disaster response app built in a hackathon; I owned backend integration.",
        image: "/projects/project5.png",
        tags: ["React", "Tailwind CSS", "MongoDB","Node.js","Express","Firebase","Flutter"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8"
    },

    {
        id: 6,
        title: "Course Selling Backend",
        description: "Backend for course selling app: auth, courses.",
        image: "#",
        tags: ["MongoDB","Node.js","Express"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8/Course-Selling-App"
    },

    {
        id: 7,
        title: "Todo App",
        description: "This is Todo frontend app develop using Html,CSS & Javascript.",
        image: "/projects/project7.png",
        tags: ["HTML","CSS","JavaScript"],
        demoUrl: "https://todo-app-two-eta-10.vercel.app/",
        githubUrl: "https://github.com/Cider8/Todo_App"
    },

]

export const ProjectsSection = () =>{
    return (
        <section id="projects" className="py-24 px-6 lg:px-24 bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary">Projects</span>
                </h2>
                {/* Intro Paragraph */}
                <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
                Here are some of the projects I have worked on, ranging from full-stack
                web applications to small frontend apps. These projects showcase my
                skills in the MERN stack, problem-solving, and building user-friendly
                interfaces.
                </p>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-card rounded-2xl shadow-md overflow-hidden border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 flex flex-col group"
                    >
                    {/* Image */}
                    {project.image !== "#" ? (
                        <div className="relative overflow-hidden">
                            <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-muted-foreground border-b border-border">
                            <span className="text-sm font-medium">No Preview</span>
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2 leading-relaxed">
                        {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                            <span
                            key={idx}
                            className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full border border-primary/20"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto">
                            {/* Demo Button*/}
                            <div className="flex justify-start">
                                <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition focus-ring border border-primary"
                                >
                                Demo
                                </a>
                            </div>

                            {/*github link*/}
                            <div className="flex justify-end">
                                <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-sm hover:opacity-90 transition focus-ring border border-foreground"
                                >
                                <Github size={16} />
                                <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                        
                    </div>
                    </div>
                ))}
                </div>
            </div>

        </section>
    );
}