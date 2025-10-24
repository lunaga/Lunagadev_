"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WolfLogo } from "@/components/wolf-logo"
import { ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface WelcomePageProps {
  onEnter: () => void
}

export function WelcomePage({ onEnter }: WelcomePageProps) {
  const [animationComplete, setAnimationComplete] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex items-center justify-center p-4 overflow-hidden transition-colors duration-300">
      <ThemeToggle className="absolute top-4 right-4" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <div className="relative flex items-center justify-center mb-6 sm:mb-8">
          {/* Left curly brace */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: -60, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[80px] sm:text-[120px] md:text-[180px] font-bold text-primary leading-none"
          >
            {"{"}
          </motion.div>

          {/* Logo emerging from center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
            onAnimationComplete={() => setAnimationComplete(true)}
            className="mx-2 sm:mx-4"
          >
            <WolfLogo className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 animate-glow" />
          </motion.div>

          {/* Right curly brace */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 60, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[80px] sm:text-[120px] md:text-[180px] font-bold text-primary leading-none"
          >
            {"}"}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6">
            <span className="text-primary">&lt;</span>
            LunagaDev
            <span className="text-primary">/&gt;</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">Full Stack Developer</p>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto text-pretty">
            Transformando ideas en experiencias digitales excepcionales. Especializado en desarrollo web moderno con
            React, Next.js y tecnologías de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onEnter} className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6">
              Entrar al Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-12 sm:mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Disponible para proyectos freelance</span>
          </div>
        </motion.div>
      </div>
    </div>
    // </CHANGE>
  )
}

