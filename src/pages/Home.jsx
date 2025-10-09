import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackground } from '../components/StarBackground'
import { NavLink } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { HeroSection } from '../components/HeroSection'
import { AboutMe } from '../components/AboutMe'
import { SkillsSection } from '../components/SkillsSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { TechStack } from '../components/TechStack'
import { CVSection } from '../components/CVSection'
import { FreelancingSection } from '../components/FreelancingSection'

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* theme toggle */}
        <ThemeToggle/>
        {/* Background Effects */}
        <StarBackground/>

        {/*Navbar*/}
        <Navbar/>
        {/* Main Content */}
        <main className="pt-16">
          <HeroSection/>
          <AboutMe/>
          <CVSection/>
          <SkillsSection/>
          <TechStack/>
          <ProjectsSection/>
          <FreelancingSection/>
          <ContactSection/>
        </main>

        {/* Footer*/}
        <Footer/>
    </div>
  )
}

export default Home