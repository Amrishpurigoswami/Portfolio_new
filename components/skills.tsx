"use client"

import { useEffect, useRef, useState } from "react"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95, icon: "🐍" },
      { name: "JavaScript", level: 85, icon: "⚡" },
      { name: "R", level: 75, icon: "📊" },
      { name: "SQL", level: 90, icon: "🗄️" },
    ],
  },
  {
    title: "AI/ML Frameworks",
    skills: [
      { name: "TensorFlow", level: 90, icon: "🧠" },
      { name: "PyTorch", level: 85, icon: "🔥" },
      { name: "Scikit-learn", level: 95, icon: "🔬" },
      { name: "Keras", level: 88, icon: "⚙️" },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", level: 92, icon: "📝" },
      { name: "Docker", level: 80, icon: "🐳" },
      { name: "AWS", level: 78, icon: "☁️" },
      { name: "MongoDB", level: 85, icon: "🍃" },
    ],
  },
  {
    title: "Specializations",
    skills: [
      { name: "Computer Vision", level: 88, icon: "👁️" },
      { name: "NLP", level: 92, icon: "💬" },
      { name: "Data Visualization", level: 85, icon: "📈" },
      { name: "Deep Learning", level: 90, icon: "🤖" },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-6" style={{ animationDelay: `${categoryIndex * 200}ms` }}>
                <h3 className="text-xl font-semibold text-primary mb-6">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={isVisible ? skill.level : 0}
                        className="h-2"
                        style={{
                          transition: `all 1s ease-in-out ${categoryIndex * 200 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
