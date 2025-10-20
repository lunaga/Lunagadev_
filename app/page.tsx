"use client"

import { useState, useEffect } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { WelcomePage } from "@/components/welcome-page"
import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true)

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited")
    if (hasVisited) {
      setShowWelcome(false)
    }
  }, [])

  const handleEnter = () => {
    sessionStorage.setItem("hasVisited", "true")
    setShowWelcome(false)
  }

  if (showWelcome) {
    return <WelcomePage onEnter={handleEnter} />
  }

  return (
    <ThemeProvider>
      <main className="min-h-screen bg-background transition-colors duration-300">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </ThemeProvider>
  )
}
