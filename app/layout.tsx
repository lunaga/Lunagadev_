import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lunagadev.com"),
  title: {
    default: "LunagaDev | Freelance Web Developer | Full-Stack Developer Portfolio",
    template: "%s | LunagaDev",
  },
  description:
    "Alan Gabriel Luna - Freelance Web Developer & Full-Stack Developer specializing in React, Next.js, Node.js, and modern web applications. Available for freelance projects and web development services.",
  keywords: [
    "web developer",
    "freelance developer",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "frontend developer",
    "backend developer",
    "freelance web developer",
    "desarrollador web",
    "desarrollador freelance",
    "LunagaDev",
    "Alan Gabriel Luna",
    "JavaScript developer",
    "TypeScript developer",
    "Node.js developer",
    "web development services",
    "portfolio developer",
    "hire web developer",
        "web developer",
    "desarrollador web",
    "freelance developer",
    "desarrollador freelance",
    "full-stack developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Node.js developer",
    "frontend developer",
    "backend developer",
    "dev",
    "programador",
    "LunagaDev",
    "Alan Gabriel Luna",
    "portfolio developer",
    "web design",
    "diseño web",
    "desarrollo web",
    "Argentina developer",
  ],
  authors: [{ name: "Alan Gabriel Luna", url: "https://www.lunagadev.com" }],
  creator: "Alan Gabriel Luna",
  publisher: "LunagaDev",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.lunagadev.com",
    siteName: "LunagaDev",
    title: "LunagaDev | Freelance Web Developer | Full-Stack Developer Portfolio",
    description:
      "Alan Gabriel Luna - Freelance Web Developer & Full-Stack Developer specializing in React, Next.js, Node.js, and modern web applications. Available for freelance projects.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LunagaDev - Freelance Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LunagaDev | Freelance Web Developer | Full-Stack Developer",
    description:
      "Alan Gabriel Luna - Freelance Web Developer specializing in React, Next.js, and modern web applications. Available for freelance projects.",
    images: ["/og-image.png"],
    creator: "@lunaga_",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alan Gabriel Luna",
              alternateName: "LunagaDev",
              url: "https://www.lunagadev.com",
              image: "https://www.lunagadev.com/og-image.png",
              jobTitle: "Freelance Web Developer",
              description: "Full-Stack Developer specializing in React, Next.js, Node.js, and modern web applications",
              sameAs: ["https://github.com/lunaga", "https://www.instagram.com/lunaga_"],
              knowsAbout: [
                "Web Development",
                "React",
                "Next.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Full-Stack Development",
                "Frontend Development",
                "Backend Development",
              ],
              email: "alan.gabriel.luna@hotmail.com",
              worksFor: {
                "@type": "Organization",
                name: "LunagaDev",
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
