import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Content Generator Platform",
    description: "A SaaS platform that leverages GPT-4 to generate marketing content, blog posts, and social media copies with advanced customization options.",
    features: ["AI-powered generation", "Custom templates", "Multi-language support", "Real-time collaboration"],
    tech: ["React", "Node.js", "OpenAI API", "MongoDB", "Stripe"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "Smart Document Analysis Tool",
    description: "An intelligent document processor that uses LangChain and vector databases to extract insights, answer questions, and summarize large documents.",
    features: ["PDF processing", "Semantic search", "Q&A capabilities", "Multi-document analysis"],
    tech: ["Next.js", "Python", "LangChain", "Pinecone", "FastAPI"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory management, payment processing, and AI-powered product recommendations.",
    features: ["Payment integration", "Admin dashboard", "AI recommendations", "Order tracking"],
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS S3"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "Real-Time Collaboration App",
    description: "A collaborative workspace application featuring real-time updates, video conferencing, and AI meeting summaries.",
    features: ["WebSocket integration", "Video calls", "AI summaries", "File sharing"],
    tech: ["React", "Socket.io", "WebRTC", "Express", "MongoDB"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "Task Management Dashboard",
    description: "An intelligent task manager with AI-powered prioritization, deadline predictions, and automated workflow suggestions.",
    features: ["AI task prioritization", "Team collaboration", "Analytics dashboard", "Custom workflows"],
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Tailwind"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "API Monitoring System",
    description: "A comprehensive API monitoring and analytics platform with automated alerts and performance insights.",
    features: ["Real-time monitoring", "Custom alerts", "Performance analytics", "API testing"],
    tech: ["React", "Node.js", "InfluxDB", "GraphQL", "Docker"],
    aiIntegrated: false,
    demo: "#",
    github: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing innovative solutions that combine fullstack development with AI capabilities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {project.aiIntegrated && (
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="default" className="bg-gradient-primary">
                    <Sparkles className="h-3 w-3 mr-1" />
                    AI Integrated
                  </Badge>
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-foreground/80">Key Features:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button variant="default" size="sm" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
