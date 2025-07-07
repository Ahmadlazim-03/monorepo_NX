"use client"

import { JSX, useEffect, useState } from "react"
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
  Code,
  Smartphone,
  Globe,
  Database,
  ShoppingCart,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { pb } from "@/lib/pocketbase" // Pastikan path ini benar

// Definisikan tipe data untuk konsistensi
interface Application {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  status: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
  icon: JSX.Element;
}

// Fungsi untuk memetakan nama ikon dari Pocketbase ke komponen ikon
const getIconComponent = (iconName: string): JSX.Element => {
  switch (iconName) {
    case "ShoppingCart":
      return <ShoppingCart className="w-6 h-6" />;
    case "Smartphone":
      return <Smartphone className="w-6 h-6" />;
    case "Database":
      return <Database className="w-6 h-6" />;
    case "Globe":
      return <Globe className="w-6 h-6" />;
    // Tambahkan case lain untuk ikon yang Anda miliki di Pocketbase
    default:
      return <Code className="w-6 h-6" />; // Ikon default
  }
};

export default function Component() {
  // Gunakan useState untuk menyimpan data aplikasi dari Pocketbase
  const [applications, setApplications] = useState<Application[]>([]);

  // Gunakan useEffect untuk mengambil data saat komponen dimuat
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        // Ambil semua data dari koleksi 'portfolio_application'
        const records = await pb.collection('portfolio_application').getFullList({
          sort: '-created', // Urutkan berdasarkan data terbaru
        });

        // Transformasi data dari Pocketbase agar sesuai dengan tipe 'Application'
        const formattedApplications = records.map((record): Application => {
          const imageUrl = (record.images && record.images.length > 0)
            ? pb.getFileUrl(record, record.images[0])
            : "/placeholder.svg";

          const featuresArray = record.features ? record.features.split('\n').filter((f: string) => f.trim() !== '') : [];

          return {
            id: record.id,
            title: record.name,
            description: record.description,
            image: imageUrl,
            technologies: record.technologies || [],
            category: record.categories,
            status: record.status,
            demoUrl: record.url_application,
            githubUrl: record.url_github,
            features: featuresArray,
            icon: getIconComponent(record.icon)
          };
        });

        setApplications(formattedApplications);
      } catch (error) {
        console.error("Failed to fetch applications:", error);
      }
    };

    fetchApplications();
  }, []); // Array dependensi kosong agar hanya berjalan sekali

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "In Development":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Beta":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  }

  return (
    <div className="min-h-screen bg-background">
      
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
                  <a href={app.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent" disabled={!app.demoUrl}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                  <a href={app.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full bg-transparent" disabled={!app.githubUrl}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </a>
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