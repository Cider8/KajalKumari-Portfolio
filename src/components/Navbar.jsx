import { href } from "react-router-dom"
import { cn } from "../lib/utils"
import { useEffect, useState, useCallback } from "react"

import { Menu, X } from "lucide-react";

const navItems = [
    {name: "Home",href: "#hero", id: "hero"},
    {name: "About",href: "#about", id: "about"},
    {name: "Skills",href: "#skills", id: "skills"},
    {name: "Projects",href: "#projects", id: "projects"},
    {name: "Freelancing",href: "#Freelancing", id: "Freelancing"},
    {name: "Contact",href: "#contact", id: "contact"},
]

export const Navbar = () =>{
    const [isScrolled,setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    },[])

    // Scrollspy: highlight active section
    useEffect(() => {
        const sectionIds = navItems.map(n => n.id);
        const observers = [];
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { root: null, rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );
            observer.observe(el);
            observers.push(observer);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    const handleNavClick = useCallback((e, href) => {
        e.preventDefault();
        const targetId = href.replace('#','');
        const el = document.getElementById(targetId);
        if (el) {
            const yOffset = 80; // approx navbar height
            const y = el.getBoundingClientRect().top + window.pageYOffset - yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    }, []);

    return (
        <nav 
        className={cn(
            "fixed w-full z-40 transition-all duration-300",
             isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
            )}
        >
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-yellow-600 flex items-center" href="#hero" onClick={(e) => handleNavClick(e, '#hero')}>
                    <span className="relative z-10 inline-flex items-center gap-2">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-extrabold">KK</span>
                        <span className="text-foreground hidden sm:inline">Kajal K.</span>
                    </span>
                </a>

                {/* desktop version*/}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item,key) => (
                        <a key={key} href={item.href} onClick={(e) => handleNavClick(e, item.href)}
                           className={cn(
                               "transition-colors duration-300 focus-ring",
                               activeSection === item.id ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
                           )}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="cosmic-button focus-ring py-2">
                        Hire Me
                    </a>
                </div>
                {/* mobile version */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50 focus-ring"
                    aria-label ={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen? <X size={24}/>: <Menu size = {24}/>} {" "}
                </button>
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen  
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item,key) => (
                            <a 
                                key={key} 
                                href={item.href}
                                className={cn(
                                  "transition-colors duration-300 focus-ring",
                                  activeSection === item.id ? "text-primary font-semibold" : "text-foreground/80 hover:text-primary"
                                )}
                                onClick={(e) => handleNavClick(e, item.href)} 
                                >
                                {item.name}
                            </a>
                        ))}
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="cosmic-button focus-ring py-2">
                            Hire Me
                        </a>
                    </div>
                </div>
                
            </div>
        </nav>
    );
}

