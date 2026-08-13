import { Briefcase } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Software Engineer I",
        company: "SysAmplify Technologies",
        period: "Dec 2025 - Present",
        bullets: [
            "Designed a reusable, config-driven GenericTable/GenericForm architecture (React, TypeScript) letting 5+ dashboard modules plug in with zero new UI code.",
            "Independently owned the frontend and QA of the Automation Testing Tool (Java Swing), a real-time internal test-automation product, working directly under the CEO's guidance.",
            "Designed and executed use case and test case scenarios, uncovering 100+ bugs and resolving 40-50% of them, including critical data-loss and session-management fixes verified through manual regression testing.",
            "Built Go/Lambda REST APIs over DynamoDB with cursor-based pagination; diagnosed and fixed an N+1 query bug by replacing per-record DB calls with a single batched query.",
        ],
    },
    {
        id: 2,
        role: "Freelance Web Developer",
        company: "Freelance",
        period: "Sep 2025 - Dec 2025",
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

const ExperienceCard = ({ experience, className = "" }) => (
    <div className={`bg-card p-6 rounded-2xl shadow-md border-2 border-border ${className}`}>
        <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <div>
                <h3 className="font-semibold text-lg">{experience.role}</h3>
                <p className="text-sm text-muted-foreground">
                    {experience.company} • {experience.period}
                </p>
            </div>
        </div>
        <ul className="list-disc list-inside text-muted-foreground space-y-2">
            {experience.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
            ))}
        </ul>
    </div>
);

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-6 lg:px-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Experience</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {experiences.map((exp) => (
                        <ExperienceCard
                            key={exp.id}
                            experience={exp}
                            className={exp.id === 3 ? "md:col-span-2" : ""}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
