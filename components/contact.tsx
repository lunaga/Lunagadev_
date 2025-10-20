"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Instagram } from "lucide-react"

export function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hola Alan! Vi tu portfolio y me gustaría hablar sobre un proyecto. ¿Tienes disponibilidad?",
  )

  const contactMethods = [
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+54 9 11 5504-8023",
      link: `https://wa.me/5491155048023?text=${whatsappMessage}`,
      color: "text-green-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@lunaga_",
      link: "https://www.instagram.com/lunaga_",
      color: "text-pink-500",
    },
    {
      icon: Mail,
      label: "Email (Hotmail)",
      value: "alan.gabriel.luna@hotmail.com",
      link: "mailto:alan.gabriel.luna@hotmail.com",
      color: "text-blue-500",
    },
    {
      icon: Mail,
      label: "Email (Gmail)",
      value: "alan.gabriel95.luna@gmail.com",
      link: "mailto:alan.gabriel95.luna@gmail.com",
      color: "text-red-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/lunaga",
      link: "https://github.com/lunaga",
      color: "text-foreground",
    },
  ]

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Contacto
              <span className="text-primary">/&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground text-pretty">
              ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className={`p-3 bg-secondary rounded-lg ${method.color}`}>
                    <method.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors">{method.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h3>
            <p className="text-muted-foreground mb-8 text-pretty">
              Contáctame y trabajemos juntos para hacer realidad tus ideas
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a
                  href={`https://wa.me/5491155048023?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:alan.gabriel.luna@hotmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Email
                </a>
              </Button>
            </div>
          </Card>

          <footer className="mt-16 text-center text-muted-foreground">
            <p className="text-sm">
              © 2025 LunagaDev. Desarrollado con <span className="text-primary">❤</span> por Alan Gabriel Luna
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}
