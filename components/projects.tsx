"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI-Powered Chatbot",
    description:
      "Built an intelligent chatbot using NLP and deployed it with Flask. Features include sentiment analysis, intent recognition, and multi-language support.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "TensorFlow", "Flask", "NLP"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/chatbot",
  },
  {
    id: 2,
    title: "Image Classification Model",
    description:
      "Developed a deep learning model for image classification with 95% accuracy. Implemented using CNN architecture and deployed on AWS.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "PyTorch", "AWS", "Computer Vision"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/image-classifier",
  },
  {
    id: 3,
    title: "Predictive Analytics Dashboard",
    description:
      "Created a real-time analytics dashboard for business intelligence. Features predictive modeling and interactive data visualizations.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "Scikit-learn", "React", "D3.js"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/analytics-dashboard",
  },
  {
    id: 4,
    title: "Recommendation System",
    description:
      "Built a collaborative filtering recommendation system for e-commerce. Improved user engagement by 40% through personalized recommendations.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Python", "TensorFlow", "MongoDB", "Docker"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/recommendation-system",
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">Explore my latest AI and machine learning projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-muted"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">{project.description}</CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button size="sm" asChild className="flex-1">
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild className="flex-1">
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
