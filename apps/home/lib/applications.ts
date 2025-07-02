import { ShoppingCart, Smartphone, Database, Zap, Globe, Code } from "lucide-react"

export const applications = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Dashboard admin untuk mengelola toko online dengan fitur manajemen produk, pesanan, dan analitik penjualan real-time.",
    longDescription: `
      E-Commerce Dashboard adalah solusi komprehensif untuk mengelola toko online dengan antarmuka yang intuitif dan fitur-fitur canggih. 
      Dashboard ini dirancang khusus untuk membantu pemilik bisnis online dalam mengelola seluruh aspek toko mereka dengan efisien.

      Aplikasi ini menyediakan real-time analytics yang memungkinkan pengguna untuk memantau performa penjualan, 
      menganalisis tren produk, dan membuat keputusan bisnis yang data-driven. Dengan sistem notifikasi otomatis, 
      pengguna akan selalu mendapat update terkini tentang pesanan baru, stok produk yang menipis, dan aktivitas penting lainnya.
    `,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Stripe API"],
    category: "Web Application",
    status: "Completed",
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-dashboard",
    features: [
      "Manajemen produk dan kategori",
      "Tracking pesanan real-time",
      "Dashboard analitik penjualan",
      "Sistem notifikasi otomatis",
      "Integrasi payment gateway",
      "Manajemen inventory",
      "Customer relationship management",
      "Multi-store support",
    ],
    detailedFeatures: [
      {
        title: "Product Management",
        description: "Kelola produk dengan mudah termasuk upload gambar, set harga, dan manage inventory",
        items: ["Bulk product upload", "Image optimization", "Variant management", "SEO optimization"],
      },
      {
        title: "Order Processing",
        description: "Sistem pemrosesan pesanan yang efisien dengan tracking real-time",
        items: ["Order status tracking", "Automated email notifications", "Shipping integration", "Return management"],
      },
      {
        title: "Analytics & Reporting",
        description: "Dashboard analitik komprehensif untuk insights bisnis",
        items: ["Sales analytics", "Customer behavior tracking", "Inventory reports", "Revenue forecasting"],
      },
    ],
    challenges: [
      "Mengoptimalkan performa untuk handling ribuan produk",
      "Implementasi real-time notifications tanpa mengganggu UX",
      "Integrasi dengan multiple payment gateways",
      "Memastikan keamanan data customer dan transaksi",
    ],
    solutions: [
      "Implementasi lazy loading dan pagination untuk performa optimal",
      "Menggunakan WebSocket untuk real-time updates yang efisien",
      "Arsitektur modular untuk mudah menambah payment providers",
      "Enkripsi end-to-end dan compliance dengan PCI DSS",
    ],
    techStack: {
      frontend: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backend: ["Node.js", "Express", "Prisma ORM", "PostgreSQL", "Redis"],
      deployment: ["Vercel", "Railway", "Cloudinary", "Stripe"],
      tools: ["ESLint", "Prettier", "Husky", "Jest", "Cypress"],
    },
    timeline: "3 months",
    teamSize: "4 developers",
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Aplikasi mobile untuk manajemen tugas dengan fitur kolaborasi tim, deadline tracking, dan integrasi kalender.",
    longDescription: `
      Task Management App adalah solusi mobile yang powerful untuk produktivitas tim dan individu. 
      Aplikasi ini dirancang dengan fokus pada user experience yang intuitif dan fitur kolaborasi yang seamless.

      Dengan fitur real-time collaboration, tim dapat bekerja bersama secara efektif dari mana saja. 
      Integrasi kalender memastikan semua deadline dan meeting tersinkronisasi dengan baik, 
      sementara sistem notifikasi yang cerdas membantu pengguna tetap on-track dengan tugas-tugas penting.
    `,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"],
    category: "Mobile Application",
    status: "In Development",
    demoUrl: "https://expo.dev/@username/task-management",
    githubUrl: "https://github.com/username/task-management-app",
    features: [
      "Kolaborasi tim real-time",
      "Notifikasi deadline",
      "Integrasi kalender",
      "Offline mode support",
      "File attachment",
      "Time tracking",
      "Project templates",
      "Progress analytics",
    ],
    detailedFeatures: [
      {
        title: "Team Collaboration",
        description: "Fitur kolaborasi yang memungkinkan tim bekerja bersama secara real-time",
        items: ["Real-time chat", "Task assignment", "Comment system", "Activity timeline"],
      },
      {
        title: "Smart Notifications",
        description: "Sistem notifikasi cerdas yang tidak mengganggu produktivitas",
        items: ["Priority-based alerts", "Custom notification schedules", "Smart reminders", "Do not disturb mode"],
      },
      {
        title: "Offline Capability",
        description: "Bekerja tanpa internet dengan sinkronisasi otomatis",
        items: ["Offline task creation", "Local data storage", "Auto-sync when online", "Conflict resolution"],
      },
    ],
    challenges: [
      "Sinkronisasi data real-time antar multiple devices",
      "Optimasi performa untuk offline mode",
      "Implementasi push notifications yang reliable",
      "Cross-platform consistency",
    ],
    solutions: [
      "Implementasi Firebase Firestore untuk real-time sync",
      "Local SQLite database dengan smart caching strategy",
      "Firebase Cloud Messaging dengan fallback mechanisms",
      "Shared component library dan design system",
    ],
    techStack: {
      frontend: ["React Native", "Expo SDK 49", "TypeScript", "React Navigation"],
      backend: ["Firebase Firestore", "Firebase Auth", "Cloud Functions", "Firebase Storage"],
      state: ["Redux Toolkit", "RTK Query", "Redux Persist"],
      tools: ["Expo CLI", "Flipper", "Reactotron", "Detox"],
    },
    timeline: "4 months",
    teamSize: "3 developers",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Weather Forecast API",
    description:
      "RESTful API untuk prediksi cuaca dengan data dari multiple sources, caching system, dan rate limiting.",
    longDescription: `
      Weather Forecast API adalah layanan backend yang robust dan scalable untuk menyediakan data cuaca akurat 
      dari berbagai sumber terpercaya. API ini dirancang dengan arsitektur microservices dan mengimplementasikan 
      best practices untuk performa dan reliability.

      Dengan sistem caching yang intelligent dan rate limiting yang fleksibel, API ini dapat melayani 
      ribuan request per detik sambil tetap menjaga akurasi data dan efisiensi resource. 
      Dokumentasi yang komprehensif memudahkan developer untuk integrasi yang cepat dan mudah.
    `,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "AWS"],
    category: "Backend API",
    status: "Completed",
    demoUrl: "https://weather-api.example.com/docs",
    githubUrl: "https://github.com/username/weather-forecast-api",
    features: [
      "Multiple weather data sources",
      "Redis caching system",
      "Rate limiting & authentication",
      "Comprehensive documentation",
      "Real-time weather alerts",
      "Historical data access",
      "Webhook notifications",
      "GraphQL support",
    ],
    detailedFeatures: [
      {
        title: "Data Aggregation",
        description: "Mengumpulkan dan memproses data dari multiple weather providers",
        items: ["OpenWeatherMap integration", "AccuWeather API", "NOAA data processing", "Data validation & cleaning"],
      },
      {
        title: "Caching Strategy",
        description: "Sistem caching multi-layer untuk performa optimal",
        items: ["Redis in-memory cache", "CDN integration", "Smart cache invalidation", "Cache warming strategies"],
      },
      {
        title: "API Security",
        description: "Keamanan enterprise-grade dengan multiple authentication methods",
        items: ["JWT authentication", "API key management", "Rate limiting", "Request validation"],
      },
    ],
    challenges: [
      "Menangani inconsistency data dari berbagai weather providers",
      "Optimasi caching untuk data yang frequently changing",
      "Implementasi rate limiting yang fair dan flexible",
      "Monitoring dan alerting untuk high availability",
    ],
    solutions: [
      "Data normalization layer dengan weighted averaging algorithm",
      "Time-based cache expiration dengan predictive refresh",
      "Token bucket algorithm dengan user-specific quotas",
      "Comprehensive monitoring dengan Prometheus dan Grafana",
    ],
    techStack: {
      runtime: ["Node.js 18", "Express.js", "TypeScript"],
      database: ["MongoDB", "Redis", "InfluxDB"],
      infrastructure: ["Docker", "AWS ECS", "AWS CloudFront", "AWS RDS"],
      monitoring: ["Prometheus", "Grafana", "Winston", "Sentry"],
    },
    timeline: "2 months",
    teamSize: "2 developers",
    icon: Database,
  },
  {
    id: 4,
    title: "Real-time Chat Platform",
    description: "Platform chat real-time dengan fitur grup, file sharing, video call, dan enkripsi end-to-end.",
    longDescription: `
      Real-time Chat Platform adalah solusi komunikasi modern yang menggabungkan messaging, voice, dan video calling 
      dalam satu platform yang aman dan user-friendly. Dibangun dengan teknologi WebRTC dan Socket.io untuk 
      performa real-time yang optimal.

      Platform ini mengutamakan privacy dan security dengan implementasi end-to-end encryption untuk semua komunikasi. 
      Fitur-fitur advanced seperti screen sharing, file transfer yang aman, dan group management yang fleksibel 
      menjadikan platform ini ideal untuk komunikasi tim maupun personal.
    `,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: ["Vue.js", "Socket.io", "WebRTC", "PostgreSQL", "Node.js"],
    category: "Web Application",
    status: "Completed",
    demoUrl: "https://chat-platform.example.com",
    githubUrl: "https://github.com/username/realtime-chat-platform",
    features: [
      "Real-time messaging",
      "Video & voice calls",
      "File sharing system",
      "End-to-end encryption",
      "Group management",
      "Screen sharing",
      "Message reactions",
      "Typing indicators",
    ],
    detailedFeatures: [
      {
        title: "Real-time Communication",
        description: "Komunikasi instant dengan latency minimal",
        items: ["WebSocket connections", "Message delivery confirmation", "Typing indicators", "Online presence"],
      },
      {
        title: "Video Conferencing",
        description: "High-quality video calls dengan fitur advanced",
        items: ["HD video quality", "Screen sharing", "Recording capability", "Virtual backgrounds"],
      },
      {
        title: "Security & Privacy",
        description: "Keamanan tingkat enterprise dengan enkripsi end-to-end",
        items: ["E2E encryption", "Message self-destruct", "Admin controls", "Audit logs"],
      },
    ],
    challenges: [
      "Optimasi WebRTC untuk berbagai network conditions",
      "Implementasi end-to-end encryption tanpa mengorbankan UX",
      "Scaling real-time connections untuk ribuan concurrent users",
      "Cross-browser compatibility untuk WebRTC features",
    ],
    solutions: [
      "Adaptive bitrate dan fallback mechanisms untuk poor connections",
      "Signal Protocol implementation dengan user-friendly key management",
      "Horizontal scaling dengan Redis Cluster dan load balancing",
      "Progressive enhancement dengan feature detection",
    ],
    techStack: {
      frontend: ["Vue.js 3", "Composition API", "Pinia", "WebRTC", "Socket.io Client"],
      backend: ["Node.js", "Socket.io", "Express", "PostgreSQL", "Redis"],
      realtime: ["Socket.io", "WebRTC", "STUN/TURN servers"],
      security: ["Signal Protocol", "bcrypt", "JWT", "HTTPS/WSS"],
    },
    timeline: "5 months",
    teamSize: "5 developers",
    icon: Zap,
  },
  {
    id: 5,
    title: "Portfolio Website Builder",
    description:
      "Platform drag-and-drop untuk membuat website portofolio dengan template customizable dan hosting terintegrasi.",
    longDescription: `
      Portfolio Website Builder adalah platform SaaS yang memungkinkan kreator, designer, dan profesional 
      untuk membuat website portofolio yang stunning tanpa coding. Dengan drag-and-drop interface yang intuitif 
      dan template library yang extensive, users dapat membuat website profesional dalam hitungan menit.

      Platform ini tidak hanya menyediakan tools untuk building, tetapi juga integrated hosting, custom domain support, 
      dan SEO optimization tools. Analytics dashboard memberikan insights tentang visitor behavior dan portfolio performance, 
      membantu users untuk optimize presence online mereka.
    `,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: ["React", "Node.js", "AWS S3", "Stripe API", "MongoDB"],
    category: "SaaS Platform",
    status: "Beta",
    demoUrl: "https://portfolio-builder.example.com",
    githubUrl: "https://github.com/username/portfolio-website-builder",
    features: [
      "Drag & drop builder",
      "Template marketplace",
      "Custom domain support",
      "SEO optimization tools",
      "Analytics dashboard",
      "Mobile responsive design",
      "Social media integration",
      "Contact form builder",
    ],
    detailedFeatures: [
      {
        title: "Visual Builder",
        description: "Drag-and-drop interface yang powerful dan user-friendly",
        items: ["Component library", "Real-time preview", "Undo/redo system", "Responsive breakpoints"],
      },
      {
        title: "Template System",
        description: "Koleksi template profesional untuk berbagai industri",
        items: ["Designer templates", "Developer portfolios", "Artist showcases", "Business profiles"],
      },
      {
        title: "Publishing & Hosting",
        description: "One-click publishing dengan hosting yang reliable",
        items: ["Global CDN", "SSL certificates", "Custom domains", "Backup & versioning"],
      },
    ],
    challenges: [
      "Membuat drag-and-drop interface yang smooth dan responsive",
      "Optimasi loading time untuk websites yang di-generate",
      "Implementasi billing system yang flexible",
      "Ensuring generated websites are SEO-friendly",
    ],
    solutions: [
      "Custom drag-and-drop library dengan virtual DOM optimization",
      "Code splitting dan lazy loading untuk generated sites",
      "Stripe integration dengan usage-based billing model",
      "Automated SEO optimization dengan structured data generation",
    ],
    techStack: {
      frontend: ["React 18", "TypeScript", "Styled Components", "React DnD"],
      backend: ["Node.js", "Express", "MongoDB", "AWS Lambda"],
      storage: ["AWS S3", "CloudFront", "Route 53"],
      payments: ["Stripe API", "Webhook handling", "Subscription management"],
    },
    timeline: "6 months",
    teamSize: "4 developers",
    icon: Globe,
  },
  {
    id: 6,
    title: "Inventory Management System",
    description:
      "Sistem manajemen inventori untuk UMKM dengan fitur barcode scanning, laporan stok, dan prediksi kebutuhan.",
    longDescription: `
      Inventory Management System adalah solusi enterprise-grade yang dirancang khusus untuk kebutuhan UMKM 
      dalam mengelola inventory mereka dengan efisien. Sistem ini mengintegrasikan teknologi modern seperti 
      barcode scanning dan machine learning untuk prediksi demand yang akurat.

      Dengan multi-location support dan real-time synchronization, bisnis dapat mengelola inventory di berbagai lokasi 
      dari satu dashboard terpusat. Automated alerts dan forecasting membantu mencegah stockout dan overstock, 
      mengoptimalkan cash flow dan operational efficiency.
    `,
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
    technologies: ["Angular", "Spring Boot", "MySQL", "Apache Kafka", "Docker"],
    category: "Enterprise Application",
    status: "Completed",
    demoUrl: "https://inventory-demo.example.com",
    githubUrl: "https://github.com/username/inventory-management-system",
    features: [
      "Barcode scanning integration",
      "Automated stock alerts",
      "Sales forecasting",
      "Multi-location support",
      "Supplier management",
      "Purchase order automation",
      "Reporting & analytics",
      "Mobile app companion",
    ],
    detailedFeatures: [
      {
        title: "Smart Inventory Tracking",
        description: "Tracking inventory dengan teknologi barcode dan RFID",
        items: ["Barcode generation", "Mobile scanning app", "Batch tracking", "Expiry date management"],
      },
      {
        title: "Demand Forecasting",
        description: "Machine learning untuk prediksi kebutuhan inventory",
        items: ["Historical data analysis", "Seasonal trend detection", "Automated reorder points", "Demand planning"],
      },
      {
        title: "Multi-location Management",
        description: "Kelola inventory di berbagai lokasi dari satu dashboard",
        items: ["Inter-location transfers", "Location-specific reporting", "Centralized purchasing", "Stock balancing"],
      },
    ],
    challenges: [
      "Integrasi dengan berbagai barcode scanner hardware",
      "Real-time synchronization antar multiple locations",
      "Implementasi machine learning untuk demand forecasting",
      "Handling large volume data dengan performa optimal",
    ],
    solutions: [
      "Universal barcode scanning library dengan hardware abstraction",
      "Apache Kafka untuk real-time data streaming antar locations",
      "TensorFlow.js untuk client-side ML predictions",
      "Database partitioning dan indexing optimization",
    ],
    techStack: {
      frontend: ["Angular 16", "TypeScript", "Angular Material", "NgRx"],
      backend: ["Spring Boot", "Java 17", "Spring Security", "JPA/Hibernate"],
      database: ["MySQL", "Redis", "Apache Kafka"],
      deployment: ["Docker", "Kubernetes", "AWS EKS", "Jenkins"],
    },
    timeline: "4 months",
    teamSize: "6 developers",
    icon: Code,
  },
]

export function getApplicationById(id: number) {
  return applications.find((app) => app.id === id)
}
