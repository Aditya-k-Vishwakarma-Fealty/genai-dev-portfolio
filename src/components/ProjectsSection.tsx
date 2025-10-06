import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "SMTS – Smart Mail Transmission System",
    description: "AI-powered postal logistics optimizer using Dijkstra's Algorithm for shortest route calculation and K-Means Clustering for sorting hub efficiency. Integrated Google Maps API for real-time mail tracking, reducing delivery time and operational costs.",
    features: ["Route optimization", "Real-time tracking", "AI-powered sorting", "Cost reduction"],
    tech: ["MERN", "AI", "Google Maps API", "Graph Algorithms", "K-Means Clustering"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "Fealty AI – Advanced RAG Application",
    description: "Personalized AI assistant for database interaction using advanced RAG pipelines. Converts natural language queries into SQL, retrieves results, and communicates through LLMs, enabling efficient, human-like data access.",
    features: ["Natural language queries", "SQL conversion", "RAG pipelines", "Human-like interaction"],
    tech: ["RAG", "LLMs", "Vector Databases", "SQL", "FastAPI"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "Bento – AI-powered Food Delivery App",
    description: "Smart tiffin service with ML-based meal recommendations, dynamic pricing algorithms, and real-time delivery tracking via Google Maps API. Integrated secure payment systems (Razorpay/Stripe) for seamless transactions.",
    features: ["ML recommendations", "Dynamic pricing", "Real-time tracking", "Payment integration"],
    tech: ["MERN", "AI", "Geolocation API", "Payment Gateway", "Machine Learning"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "AI Resume & Job Matcher",
    description: "AI-driven recruitment assistant matching resumes to job descriptions via semantic search and embeddings. Utilized OpenAI API for skill gap analysis and personalized recommendations, with Pinecone for fast, context-aware retrieval.",
    features: ["Semantic search", "Skill gap analysis", "Personalized recommendations", "Context-aware retrieval"],
    tech: ["React.js", "OpenAI API", "Chroma", "FastAPI", "Pinecone"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
  {
    title: "WhatsApp Web Broadcasting Automation",
    description: "Automated bulk, personalized WhatsApp messaging using Automa for browser automation. Improved delivery accuracy and campaign efficiency through dynamic message injection and URL template integration.",
    features: ["Bulk messaging", "Personalization", "Browser automation", "Campaign efficiency"],
    tech: ["Automa", "JavaScript", "Browser Automation", "WhatsApp API"],
    aiIntegrated: false,
    demo: "#",
    github: "#",
  },
  {
    title: "MediAid",
    description: "AI-powered medicine information and prescription assistant providing accurate extraction of medicine details from prescriptions and packaging using OCR and Generative AI. Leveraged OpenAI API for text enhancement, entity extraction, and structured data generation.",
    features: ["Medicine extraction", "Prescription parsing", "AI text correction", "OCR integration", "Entity recognition"],
    tech: ["React Native", "FastAPI", "OpenAI API", "Google Vision API", "Python", "OCR"],
    aiIntegrated: true,
    demo: "#",
    github: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            Showcasing innovative solutions that combine fullstack development with AI capabilities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card p-4 sm:p-6 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-xs sm:text-sm font-semibold mb-2 text-foreground/80">Key Features:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <Button variant="default" size="sm" asChild className="w-full sm:w-auto">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
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
