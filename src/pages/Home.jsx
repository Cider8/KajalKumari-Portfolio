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
import { ExperienceSection } from '../components/ExperienceSection'
// import { FreelancingSection } from '../components/FreelancingSection'
import { AchievementsSection } from '../components/AchievementsSection'

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
          <ExperienceSection/>
          <SkillsSection/>
          <TechStack/>
          <ProjectsSection/>
          {/* Freelancing section commented out per request - keep code for later */}
          {/* <FreelancingSection/> */}
          <AchievementsSection/>
          <ContactSection/>
        </main>

        {/* Footer*/}
        <Footer/>
    </div>
  )
}

export default Home