import { Trophy } from "lucide-react";

export const AchievementsSection = () => {
    return (
        <section id="achievements" className="py-24 px-6 lg:px-24">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Key <span className="text-primary">Achievements</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-card p-6 rounded-2xl shadow-md border-2 border-border">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Trophy className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold">Competitive Programming</h3>
                        </div>
                        <p className="text-muted-foreground">LeetCode rating 1600+ (target), 500+ problems solved — strong evidence of algorithmic problem-solving and data structures proficiency.</p>
                    </div>

                    <div className="bg-card p-6 rounded-2xl shadow-md border-2 border-border">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Trophy className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold">Hackathons</h3>
                        </div>
                        <p className="text-muted-foreground">Flipkart GRID 5.0 semifinalist; Tata Imagination Challenge semifinalist; Myntra Hacker-Ramp Phase 2 participant — hands-on product & delivery experience under time constraints.</p>
                    </div>

                    <div className="bg-card p-6 rounded-2xl shadow-md border-2 border-border">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Trophy className="h-6 w-6 text-primary" />
                            </div>
                            <h3 className="font-semibold">Impact Metrics</h3>
                        </div>
                        <p className="text-muted-foreground">Owned 57% of merged PRs and resolved 40% of bug-fix commits on a cross-platform product; automated workflows that saved 10+ hours/week.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
