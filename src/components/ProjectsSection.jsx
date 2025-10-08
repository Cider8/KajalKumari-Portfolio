import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Book-Store ecommerce website",
        description: "E-commerce app to browse and buy books across genres with auth and cart.",
        image: "/projects/project1.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express","firebase"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8/Book-Store-app"
    },

    {
        id: 2,
        title: "Knowtify-mern",
        description: "EdTech platform for online tech courses; I contributed backend APIs and DB.",
        image: "/projects/project2.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express"],
        demoUrl: "https://frontend-main-beige.vercel.app/",
        githubUrl: "https://github.com/Cider8/"
    },

    {
        id: 3,
        title: "Book-finder",
        description: "Vite + React app to search books via Open Library API with instant results.",
        image: "/projects/project3.png",
        tags: ["React", "tailwind.css"],
        demoUrl: "https://book-finder-nu-woad.vercel.app/",
        githubUrl: "https://github.com/Cider8"
    },

    {
        id: 4,
        title: "Autosave_blog ",
        description: "Blog app with CRUD and auto-save drafts for a smooth writing flow.",
        image: "/projects/project4.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express"],
        demoUrl: " https://blog-mern-tau.vercel.app/",
        githubUrl: "https://github.com/Cider8/Blog_Mern"
    },

    {
        id: 5,
        title: "Resq+ ",
        description: "Disaster response app built in a hackathon; I owned backend integration.",
        image: "/projects/project5.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express","firebase","flutter"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8"
    },

    {
        id: 6,
        title: "Course_selling backend",
        description: "Backend for course selling app: auth, courses, payments-ready APIs.",
        image: "#",
        tags: ["Mongodb","Node.js","express"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8/Course-Selling-App"
    },

    {
        id: 7,
        title: "Todo_App",
        description: "This is Todo frontend app develop using Html,CSS & Javascript",
        image: "/projects/project7.png",
        tags: ["Html","CSS","Javascript"],
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
                        className="bg-card rounded-2xl shadow-md overflow-hidden border border-border hover:shadow-xl transition-shadow duration-300 flex flex-col"
                    >
                    {/* Image */}
                    {project.image !== "#" ? (
                        <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        />
                    ) : (
                        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                        No Image
                        </div>
                    )}

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">
                        {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, idx) => (
                            <span
                            key={idx}
                                    className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                            >
                            {tag}
                            </span>
                        ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mt-auto button-surface p-4">
                            {/* Demo Button*/}
                            <div className="flex justify-start">
                                <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:bg-primary/90 transition focus-ring"
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
                                    className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-sm hover:opacity-90 transition focus-ring"
                                >
                                <Github size={16} />
                                <span>Check Code on GitHub</span>
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