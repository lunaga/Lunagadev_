"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Github, Instagram, Home } from "lucide-react"

interface ContactProps {
  onReturnToWelcome?: () => void
}

export function Contact({ onReturnToWelcome }: ContactProps) {
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
    <section id="contact" className="py-16 sm:py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Contacto
              <span className="text-primary">/&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 sm:mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground text-pretty px-4">
              ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades y colaboraciones.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="p-5 sm:p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <div className={`p-2.5 sm:p-3 bg-secondary rounded-lg ${method.color}`}>
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium group-hover:text-primary transition-colors truncate">{method.value}</p>
                  </div>
                </a>
              </Card>
            ))}
          </div>

          <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 text-center animate-in fade-in slide-in-from-bottom duration-700">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 px-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-pretty px-4">
              Contáctame y trabajemos juntos para hacer realidad tus ideas
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <a
                  href={`https://wa.me/5491155048023?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <a href="mailto:alan.gabriel.luna@hotmail.com">
                  <Mail className="mr-2 w-5 h-5" />
                  Email
                </a>
              </Button>
            </div>
          </Card>

          <footer className="mt-12 sm:mt-16 text-center text-muted-foreground space-y-4">
            {onReturnToWelcome && (
              <div className="mb-6">
                <Button variant="ghost" size="sm" onClick={onReturnToWelcome} className="group">
                  <Home className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  Volver a la página de inicio
                </Button>
              </div>
            )}
            <p className="text-sm px-4">
              © 2025 LunagaDev. Desarrollado por Alan Gabriel Luna
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}
