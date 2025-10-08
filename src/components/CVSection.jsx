export const CVSection = () => {
    const cvPath = "/Kajal_Kumari_resume.pdf"; // Place your PDF in public/ with this name
    return (
        <section id="cv" className="py-20 px-6 lg:px-24">
            <div className="container mx-auto max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Curriculum <span className="text-primary">Vitae</span></h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                    View or download my latest resume. The PDF opens in a new tab and the download button saves a copy locally.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href={cvPath} target="_blank" rel="noopener noreferrer" className="cosmic-button focus-ring">
                        View Resume
                    </a>
                    <a href={cvPath} download className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300 focus-ring">
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}


