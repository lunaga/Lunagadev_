"use client"

import { Card } from "@/components/ui/card"
import { Code2, Rocket, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Desarrollo Full-Stack",
      description: "Experiencia en frontend y backend con tecnologías modernas",
    },
    {
      icon: Rocket,
      title: "Soluciones Innovadoras",
      description: "Creación de aplicaciones web escalables y eficientes",
    },
    {
      icon: Users,
      title: "Enfoque en el Cliente",
      description: "Comprometido con entregar proyectos de alta calidad",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Sobre Mí
              <span className="text-primary">/&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed px-4">
              Soy un desarrollador Full-Stack apasionado por crear soluciones web innovadoras y funcionales. Me
              especializo en transformar ideas en aplicaciones digitales de alto rendimiento, utilizando las últimas
              tecnologías y mejores prácticas del desarrollo web.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-5 sm:p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
    // </CHANGE>
  )
}
