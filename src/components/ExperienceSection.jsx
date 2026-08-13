import { Briefcase } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Software Engineer I",
        company: "SysAmplify Technologies",
        period: "Dec 2025 - Present",
        bullets: [
            "Designed a reusable, config-driven GenericTable/GenericForm architecture (React, TypeScript) letting 5+ dashboard modules plug in with zero new UI code.",
            "Built Go/Lambda REST APIs over DynamoDB with cursor-based pagination; diagnosed and fixed an N+1 query bug by replacing per-record DB calls with a single batched query.",
            "Owned 57% of merged pull requests and resolved 40% of all bug-fix commits on a cross-platform desktop test-automation tool (Java Swing), including critical data-loss and session-management fixes.",
        ],
    },
    {
        id: 2,
        role: "Freelance Web Developer",
        company: "Freelance",
        period: "Sep 2025 - Nov 2025",
        bullets: [
            "Engineered a real-time inventory dashboard in React that polls client-supplied stock-data files to visualize live stock for a 500+ SKU catalog.",
            "Eliminated manual stock checks, reducing processing time by 30% and saving 5+ hours/week (client-reported).",
        ],
    },
    {
        id: 3,
        role: "Associate AI Product Development Intern",
        company: "Neodocto Inc",
        period: "Jan 2024 - Apr 2024",
        bullets: [
            "Automated product listing workflows using Power Automate, saving 10 hours/week of manual data entry.",
            "Mentored 10+ interns across a cross-functional team.",
        ],
    },
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-6 lg:px-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}ß
                            className={`bg-card p-6 rounded-2xl shadow-md border-2 border-border ${
                                exp.id === 3 ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{exp.role}</h3>
                                    <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                                </div>
                            </div>
                            <ul className="list-disc list-inside text-muted-foreground space-y-2">
                                {exp.bullets.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
