"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { WolfLogo } from "@/components/wolf-logo"
import { ArrowRight } from "lucide-react"

interface WelcomePageProps {
  onEnter: () => void
}

export function WelcomePage({ onEnter }: WelcomePageProps) {
  const [animationComplete, setAnimationComplete] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="relative flex items-center justify-center mb-8">
          {/* Left curly brace */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: -80, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[120px] md:text-[180px] font-bold text-primary leading-none"
          >
            {"{"}
          </motion.div>

          {/* Logo emerging from center */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
            onAnimationComplete={() => setAnimationComplete(true)}
            className="mx-4"
          >
            <WolfLogo className="w-24 h-24 md:w-32 md:h-32 animate-glow" />
          </motion.div>

          {/* Right curly brace */}
          <motion.div
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 80, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[120px] md:text-[180px] font-bold text-primary leading-none"
          >
            {"}"}
          </motion.div>
        </div>
        {/* </CHANGE> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={animationComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">&lt;</span>
            LunagaDev
            <span className="text-primary">/&gt;</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">Full Stack Developer</p>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
            Transformando ideas en experiencias digitales excepcionales. Especializado en desarrollo web moderno con
            React, Next.js y tecnologías de vanguardia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={onEnter} className="group text-lg px-8 py-6">
              Entrar al Portfolio
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>Disponible para proyectos freelance</span>
          </div>
        </motion.div>
        {/* </CHANGE> */}
      </div>
    </div>
  )
}
