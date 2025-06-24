"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function About() {
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
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground text-lg">Get to know the person behind the AI solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-6">AI & Machine Learning Enthusiast</h3>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                I'm Amrish Puri Goswami, a passionate AI developer and B.Tech student at Jodhpur Institute of
                Engineering & Technology (JIET), India. I specialize in machine learning, deep learning, and web
                development, creating innovative solutions to solve real-world problems using cutting-edge artificial
                intelligence technologies.
              </p>

              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Currently pursuing my Bachelor of Technology in Information Technology (2023-27) with a CGPA of 7.79. My
                work spans across various domains including computer vision, natural language processing, and web
                development with modern frameworks like Next.js and React.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-primary mb-2">15+</h4>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">2+</h4>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">8+</h4>
                  <p className="text-muted-foreground">Certifications</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">12+</h4>
                  <p className="text-muted-foreground">Technologies</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary to-purple-600 p-1">
                  <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                    <Image
                      src="https://avatars.githubusercontent.com/u/174265714?v=4"
                      alt="AI Developer Profile"
                      width={300}
                      height={300}
                      className="rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600/20 rounded-full animate-pulse delay-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
