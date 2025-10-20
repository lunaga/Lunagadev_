"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Folder } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "GGL Refrigeración",
      description:
        "Sitio web profesional para empresa de servicios técnicos en refrigeración. Incluye catálogo de servicios, formulario de contacto integrado con WhatsApp, y diseño responsive optimizado para conversión de clientes.",
      tags: ["Next.js", "React", "Tailwind CSS", "WhatsApp API"],
      link: "https://gglrefrigeracion.com",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Melina Vázquez Möbel",
      description:
        "E-commerce de muebles artesanales con sistema de precios mayoristas y minoristas. Catálogo interactivo con gestión de inventario, carrito de compras, y diseño elegante que resalta la calidad de los productos.",
      tags: ["Next.js", "TypeScript", "E-commerce", "Responsive"],
      link: "https://melina-vazquez-mobel-m.vercel.app",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "PeachyPlatinums",
      description:
        "Plataforma de servicios gaming profesional para trofeos de PlayStation. Diseño moderno con sistema de estadísticas en tiempo real, integración de pagos, y experiencia de usuario optimizada para gamers.",
      tags: ["React", "Next.js", "Gaming", "UI/UX"],
      link: "https://www.peachyplatinums.com",
      color: "from-orange-500/20 to-red-500/20",
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Proyectos
              <span className="text-primary">/&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">Algunos de mis trabajos recientes</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <Folder className="w-10 h-10 text-primary" />
                    <Button
                      size="icon"
                      variant="ghost"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-mono"
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
