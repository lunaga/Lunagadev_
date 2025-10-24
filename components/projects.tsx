"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Folder } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "GGL Refrigeración",
      description:
        "Sitio web profesional para empresa de servicios técnicos en refrigeración. Incluye catálogo de servicios, formulario de contacto integrado con WhatsApp, y diseño responsive optimizado para conversión de clientes.",
      tags: ["Next.js", "React", "Tailwind CSS", "WhatsApp API"],
      link: "https://gglrefrigeracion.com",
      color: "from-blue-500/20 to-cyan-500/20",
      image: "/projects/ggl-refrigeracion.png",
    },
    {
      title: "Melina Vázquez Möbel",
      description:
        "E-commerce de muebles artesanales con sistema de precios mayoristas y minoristas. Catálogo interactivo con gestión de inventario, carrito de compras, y diseño elegante que resalta la calidad de los productos.",
      tags: ["Next.js", "TypeScript", "E-commerce", "Responsive"],
      link: "https://melina-vazquez-mobel-m.vercel.app",
      color: "from-purple-500/20 to-pink-500/20",
      image: "/projects/melina-mobel.png",
    },
    {
      title: "PeachyPlatinums",
      description:
        "Plataforma de servicios gaming profesional para trofeos de PlayStation. Diseño moderno con sistema de estadísticas en tiempo real, integración de pagos, y experiencia de usuario optimizada para gamers.",
      tags: ["React", "Next.js", "Gaming", "UI/UX"],
      link: "https://www.peachyplatinums.com",
      color: "from-orange-500/20 to-red-500/20",
      image: "/projects/peachy-platinums.png",
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Proyectos
              <span className="text-primary">/&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground px-4">Algunos de mis trabajos recientes</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-500 overflow-hidden animate-in fade-in slide-in-from-bottom hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />

                <div className="relative h-40 sm:h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={`Preview of ${project.title}`}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <Folder className="absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 text-primary group-hover:scale-110 transition-transform drop-shadow-lg" />
                </div>

                <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Button
                      size="icon"
                      variant="ghost"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${project.title}`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2.5 sm:px-3 py-1 bg-primary/10 text-primary rounded-full font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      Ver Proyecto
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
