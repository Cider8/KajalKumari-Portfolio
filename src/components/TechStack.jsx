import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTypescript, SiTailwindcss, SiGit, SiVite, SiPostman, SiVercel, SiRender} from 'react-icons/si';
import { FaDatabase, FaSpider } from 'react-icons/fa';

export const TechStack = () => {
    const stacks = [
        { name: "React", Icon: SiReact },
        { name: "Node.js", Icon: SiNodedotjs },
        { name: "Express", Icon: SiExpress },
        { name: "MongoDB", Icon: SiMongodb },
        { name: "TypeScript", Icon: SiTypescript },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
        { name: "Git/GitHub", Icon: SiGit },
        { name: "Vite", Icon: SiVite },
        { name: "Postman", Icon: SiPostman },
        { name: "Vercel", Icon: SiVercel },
        { name: "Render", Icon: SiRender },
       // { name: "Power Automate", Icon: SiMicrosoft },
       // { name: "Data Scraper", Icon: FaSpider },
    ];

    return (
        <section id="tech" className="py-20 px-6 lg:px-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                    Tech <span className="text-primary">Stack</span>
                </h2>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                    Tools and technologies I use to build reliable and scalable web apps.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                    {stacks.map((s, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 rounded-full border border-border bg-background/60 text-sm md:text-base shadow-xs hover:shadow-md transition card-hover flex items-center gap-2"
                            aria-label={s.name}
                        >
                            {s.Icon ? <s.Icon aria-hidden className="text-primary" /> : null}
                            {s.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}


