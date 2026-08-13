import { Briefcase } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Software Development Intern",
        company: "Example Company",
        period: "Jun 2023 - Aug 2023",
        bullets: [
            "Implemented backend APIs and optimized database queries to improve response times.",
            "Collaborated with cross-functional teams to design and ship new product features.",
        ],
    },
    {
        id: 2,
        role: "Hackathon - RESQ+ (Team Lead)",
        company: "Smart India Hackathon",
        period: "Mar 2023",
        bullets: [
            "Built a real-time disaster management tool (RESQ+) with backend integration for live data.",
            "Led a team of 4, handled backend architecture and deployment.",
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
                        <div key={exp.id} className="bg-card p-6 rounded-2xl shadow-md border-2 border-border">
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
