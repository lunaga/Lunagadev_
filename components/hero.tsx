"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github } from "lucide-react"
import { WolfLogo } from "@/components/wolf-logo"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8 animate-in fade-in slide-in-from-bottom duration-1000">
          <WolfLogo className="w-32 h-32 md:w-40 md:h-40 animate-float" />

          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-primary font-mono text-sm md:text-base">&lt;/&gt;</span>
              <span className="text-muted-foreground font-mono text-sm md:text-base ml-2">Full-Stack Developer</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">
              Hola, soy <span className="text-primary">LunagaDev</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Desarrollador Full-Stack especializado en crear experiencias web modernas y funcionales
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild className="group">
              <a href="#projects">
                Ver Proyectos
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Contactar</a>
            </Button>
          </div>

          <div className="flex gap-4 mt-4">
            <Button size="icon" variant="ghost" asChild>
              <a href="https://github.com/lunaga" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button size="icon" variant="ghost" asChild>
              <a href="https://www.instagram.com/lunaga_" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  )
}
