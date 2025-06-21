import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Portfolio - Machine Learning Engineer",
  description:
    "Professional AI portfolio showcasing machine learning projects, skills, and expertise in artificial intelligence.",
  keywords: "AI, Machine Learning, Deep Learning, Data Science, Portfolio",
  authors: [{ name: "AI Developer" }],
  openGraph: {
    title: "AI Portfolio - Machine Learning Engineer",
    description: "Professional AI portfolio showcasing machine learning projects and expertise",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
