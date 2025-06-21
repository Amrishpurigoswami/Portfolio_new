import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI Portfolio
              </h3>
              <p className="text-muted-foreground mb-4">
                Building intelligent solutions for tomorrow's challenges through cutting-edge AI and machine learning.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={20} />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
                <Link
                  href="mailto:contact@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Machine Learning Consulting</li>
                <li>AI Model Development</li>
                <li>Data Science Solutions</li>
                <li>Computer Vision Projects</li>
                <li>NLP Applications</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2025 AI Portfolio. All rights reserved. Built with Next.js and deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
