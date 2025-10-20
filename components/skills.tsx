"use client"

import { Card } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML/CSS", level: 95 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 82 },
        { name: "API REST", level: 88 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 78 },
        { name: "Supabase", level: 80 },
      ],
    },
    {
      category: "Herramientas & Otros",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Vercel", level: 88 },
        { name: "Responsive Design", level: 92 },
        { name: "Figma", level: 75 },
        { name: "SEO", level: 70 },
        { name: "Performance", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">&lt;</span>
              Skills
              <span className="text-primary">/&gt;</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-lg text-muted-foreground">Tecnologías y herramientas con las que trabajo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${categoryIndex * 150}ms` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${categoryIndex * 150 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
