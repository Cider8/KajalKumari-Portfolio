import { useState } from "react";
import { cn } from "../lib/utils";

const skills =[
    {name: "DSA", level: 75, category:"All"},
    //frontend
    {name: "HTML/CSS", level: 80, category : "Frontend"},
    {name: "JavaScript", level: 80, category : "Frontend"},
    {name: "React", level: 90, category : "Frontend"},
    {name: "TypeScript", level: 40, category : "Frontend"},
    {name: "Tailwind CSS", level: 80, category : "Frontend"},

    //backend
    {name: "Node.js", level: 85, category : "Backend"},
    {name: "Express.js", level: 85, category : "Backend"},
    {name: "MongoDB", level: 90, category : "Backend"},
    
    // Tools
     {name: "Git/GitHub", level: 80, category : "Tools"},
     {name: "VS Code", level: 95, category: "Tools"},
     {name: "Postman",level: 85,category: "Tools"},
     {name: "Power Automate",level: 85, category: "Tools"},

    //language
     {name: "C++", level: 85, category: "Language"},
     {name: "SQL", level: 80, category: "Language"},
     {name: "Java", level: 55, category: "Language"},

     //all
     {name: "Operating System", level: 70 , category: "All"},
     {name: "OOP", level: 75, category: "All"},

    
];

const categories = ["All","Frontend","Backend","Tools","Language"]


export const SkillsSection = () =>{
    const [activeCategory,setActiveCategory] = useState("All");
    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );
    
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className = "text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category,key)=>(
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-2 rounded-full transition-all duration-300 border-2 focus-ring",
                                activeCategory === category ? 
                                    "bg-primary text-primary-foreground border-primary shadow-md" 
                                    : "bg-background/70 text-foreground hover:bg-secondary border-border hover:border-primary/50"
                            )}
                            
                        >
                            {category}
                        </button>
                    ))}

                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-4 rounded-xl shadow-sm border-2 border-border hover:border-primary/50 transition-all duration-300 card-hover group cursor-pointer"
                        >
                            <div className="text-center mb-3">
                                <h3 className="font-semibold text-sm md:text-base group-hover:text-primary transition-colors">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-1.5 rounded-full overflow-hidden mb-2">
                                <div
                                    className="bg-primary h-1.5 rounded-full origin-left transition-all duration-1000 ease-out"
                                    style={{ width: skill.level + "%" }}
                                ></div>
                            </div>
                            <div className="text-center">
                                <span className="text-xs text-muted-foreground font-medium">
                                    {skill.level}%
                                </span>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}