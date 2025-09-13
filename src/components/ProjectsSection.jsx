import { Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Book-Store ecommerce website",
        description: "A ecommerce website where we can buy book of different types such as Adventures, Horrors etc",
        image: "/projects/project1.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express","firebase"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8/Book-Store-app"
    },

    {
        id: 2,
        title: "Knowtify-mern",
        description: "An Edtech Platform built using Mern that online tech Courses, It's a team project , I have worked on backend part",
        image: "/projects/project2.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express"],
        demoUrl: "https://frontend-main-beige.vercel.app/",
        githubUrl: "https://github.com/Cider8/"
    },

    {
        id: 3,
        title: "Book-finder",
        description: "A react+vite application that lets you search booking using the aopen library Api.",
        image: "/projects/project3.png",
        tags: ["React", "tailwind.css"],
        demoUrl: "https://book-finder-nu-woad.vercel.app/",
        githubUrl: "https://github.com/Cider8"
    },

    {
        id: 4,
        title: "Autosave_blog ",
        description: "This website provide features like crud operation & Autosave feature",
        image: "/projects/project4.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express"],
        demoUrl: " https://blog-mern-tau.vercel.app/",
        githubUrl: "https://github.com/Cider8/Blog_Mern"
    },

    {
        id: 5,
        title: "Resq+ ",
        description: "A web-cum app based solution built under Hack-heritage-21 focusing the Diaster Management track, this app built under 6 member where I have worked as Backend part",
        image: "/projects/project5.png",
        tags: ["React", "tailwind.css", "Mongodb","Node.js","express","firebase","flutter"],
        demoUrl: "#",
        githubUrl: "https://github.com/Cider8"
    },

    {
        id: 6,
        title: "Course_selling backend",
        description: "Developed backend part of Course selling App",
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
                <p className="text-center text-grey-600 max-w-3xl mx-auto mb-12">
                Here are some of the projects I have worked on, ranging from full-stack
                web applications to small frontend apps. These projects showcase my
                skills in the MERN stack, problem-solving, and building user-friendly
                interfaces.
                </p>
                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-card rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 flex flex-col"
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
                        <p className="text-sm text-yellow-600 mb-4 flex-grow">
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
                        <div className="flex flex-col gap-3 mt-auto">
                            {/* Demo Button*/}
                            <div className="flex justify-start">
                                <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition"
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
                                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-700 transition"
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