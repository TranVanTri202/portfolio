"use client"

import { ParticleBackground } from "@/components/portfolio/particle-background"
import { FloatingElements } from "@/components/portfolio/floating-elements"
import { Navigation } from "@/components/portfolio/navigation"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ContactSection } from "@/components/portfolio/contact-section"
import { Footer } from "@/components/portfolio/footer"

import { LoadingScreen } from "@/components/portfolio/loading-screen"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Intro Loading Screen */}
      <LoadingScreen />

      {/* Animated particle background */}
      <ParticleBackground />
      <FloatingElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        {/* <Footer /> */}
      </div>
    </main>
  )
}
