"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  User,
  Code,
  Smartphone,
  Globe,
  Database,
  Zap,
  ShoppingCart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const applications = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "Dashboard admin untuk mengelola toko online dengan fitur manajemen produk, pesanan, dan analitik penjualan real-time.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      category: "Web Application",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Manajemen produk dan kategori",
        "Tracking pesanan real-time",
        "Dashboard analitik penjualan",
        "Sistem notifikasi otomatis",
      ],
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "Aplikasi mobile untuk manajemen tugas dengan fitur kolaborasi tim, deadline tracking, dan integrasi kalender.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      category: "Mobile Application",
      status: "In Development",
      demoUrl: "#",
      githubUrl: "#",
      features: ["Kolaborasi tim real-time", "Notifikasi deadline", "Integrasi kalender", "Offline mode support"],
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Weather Forecast API",
      description:
        "RESTful API untuk prediksi cuaca dengan data dari multiple sources, caching system, dan rate limiting.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
      category: "Backend API",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Multiple weather data sources",
        "Redis caching system",
        "Rate limiting & authentication",
        "Comprehensive documentation",
      ],
      icon: <Database className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Real-time Chat Platform",
      description: "Platform chat real-time dengan fitur grup, file sharing, video call, dan enkripsi end-to-end.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Vue.js", "Socket.io", "WebRTC", "PostgreSQL"],
      category: "Web Application",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      features: ["Real-time messaging", "Video & voice calls", "File sharing system", "End-to-end encryption"],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Portfolio Website Builder",
      description:
        "Platform drag-and-drop untuk membuat website portofolio dengan template customizable dan hosting terintegrasi.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "AWS S3", "Stripe API"],
      category: "SaaS Platform",
      status: "Beta",
      demoUrl: "#",
      githubUrl: "#",
      features: ["Drag & drop builder", "Template marketplace", "Custom domain support", "SEO optimization tools"],
      icon: <Globe className="w-6 h-6" />,
    },
    {
      id: 6,
      title: "Inventory Management System",
      description:
        "Sistem manajemen inventori untuk UMKM dengan fitur barcode scanning, laporan stok, dan prediksi kebutuhan.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Angular", "Spring Boot", "MySQL", "Apache Kafka"],
      category: "Enterprise Application",
      status: "Completed",
      demoUrl: "#",
      githubUrl: "#",
      features: [
        "Barcode scanning integration",
        "Automated stock alerts",
        "Sales forecasting",
        "Multi-location support",
      ],
      icon: <Code className="w-6 h-6" />,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="h-6 w-6" />
            <span className="font-bold text-xl">Portfolio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="#home" className="transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="#applications" className="transition-colors hover:text-foreground/80">
              Applications
            </Link>
            <Link href="#about" className="transition-colors hover:text-foreground/80">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-foreground/80">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm">
            <Mail className="h-4 w-4 mr-2" />
            Contact Me
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">Full Stack Developer</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about creating innovative applications that solve real-world problems. Specialized in modern
              web and mobile development with focus on user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 bg-black hover:bg-gray-800 text-white">
                View My Work
              </Button>
              <Button size="lg" className="text-lg px-8 bg-black hover:bg-gray-800 text-white">
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section id="applications" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">My Applications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah koleksi aplikasi yang telah saya kembangkan dengan berbagai teknologi modern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app) => (
              <Card key={app.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-full p-2">{app.icon}</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                    <Badge variant="secondary">{app.category}</Badge>
                  </div>
                  <CardDescription className="text-sm">{app.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {app.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {app.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Link href={`/application/${app.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Details
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-left">
                <p className="text-lg text-muted-foreground">
                  Saya adalah seorang Full Stack Developer dengan pengalaman 5+ tahun dalam mengembangkan aplikasi web
                  dan mobile. Passionate dalam menciptakan solusi teknologi yang user-friendly dan scalable.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Jakarta, Indonesia</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>developer@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+62 812-3456-7890</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Mari diskusikan proyek Anda dan wujudkan ide menjadi kenyataan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-black hover:bg-gray-800 text-white">
              <Mail className="h-5 w-5 mr-2" />
              Send Message
            </Button>
            <Button size="lg" className="text-lg px-8 bg-black hover:bg-gray-800 text-white">
              <Phone className="h-5 w-5 mr-2" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Portfolio. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
