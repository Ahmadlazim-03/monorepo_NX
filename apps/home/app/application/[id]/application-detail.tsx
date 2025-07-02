"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, CheckCircle, AlertCircle, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Application {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  technologies: string[]
  category: string
  status: string
  demoUrl: string
  githubUrl: string
  features: string[]
  detailedFeatures: Array<{
    title: string
    description: string
    items: string[]
  }>
  challenges: string[]
  solutions: string[]
  techStack: {
    [key: string]: string[]
  }
  timeline: string
  teamSize: string
  icon: any
}

interface ApplicationDetailProps {
  application: Application
}

export default function ApplicationDetail({ application }: ApplicationDetailProps) {
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="h-4 w-4" />
      case "In Development":
        return <Clock className="h-4 w-4" />
      case "Beta":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href={application.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href={application.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                Source Code
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <application.icon className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{application.title}</h1>
              <div className="flex items-center space-x-4">
                <Badge variant="secondary">{application.category}</Badge>
                <Badge className={getStatusColor(application.status)}>
                  {getStatusIcon(application.status)}
                  <span className="ml-1">{application.status}</span>
                </Badge>
              </div>
            </div>
          </div>

          <p className="text-xl text-muted-foreground mb-8 max-w-4xl">{application.description}</p>

          {/* Project Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Card>
              <CardContent className="flex items-center space-x-3 p-4">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="font-semibold">{application.timeline}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-3 p-4">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Team Size</p>
                  <p className="font-semibold">{application.teamSize}</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center space-x-3 p-4">
                <CheckCircle className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Features</p>
                  <p className="font-semibold">{application.features.length} key features</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Image */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <Image
              src={application.image || "/placeholder.svg"}
              alt={application.title}
              width={1200}
              height={600}
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <div className="prose prose-gray max-w-none">
                {application.longDescription.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground mb-4">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>

            {/* Detailed Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="space-y-6">
                {application.detailedFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-red-600">Challenges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {application.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg text-green-600">Solutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {application.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Screenshots */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {application.images.map((image, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${application.title} screenshot ${index + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card>
              <CardHeader>
                <CardTitle>Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(application.techStack).map(([category, technologies]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-sm mb-2 capitalize">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* All Features */}
            <Card>
              <CardHeader>
                <CardTitle>All Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {application.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Project Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-black hover:bg-gray-800 text-white" asChild>
                  <Link href={application.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Live Demo
                  </Link>
                </Button>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href={application.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source Code
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
