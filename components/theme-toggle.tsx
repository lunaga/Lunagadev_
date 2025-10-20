"use client"

import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform bg-transparent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </Button>
  )
}
