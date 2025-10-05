import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-gradient-bg opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="flex items-center justify-between h-full gap-12">
          {/* Content Section - 65% */}
          <div className="flex-[0.65] animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Aditya Kumar Vishwakarma
            </h1>
            
            <p className="text-lg md:text-xl bg-gradient-text bg-clip-text text-transparent mb-6">
              GenAI Full Stack Developer | 1+ Years Experience
            </p>
            
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">
              Innovative GenAI Full Stack Developer with expertise in building LLM-powered applications, 
              prompt engineering, RAG pipelines, and full-stack development using MERN, FastAPI, and 
              cloud platforms, delivering AI-driven, user-centric solutions with real-world impact.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProjects}
                className="group"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            <a
              href="mailto:adityakvishwakarmaofficial@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linktr.ee/aditya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-secondary hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 2c-5.621 0-10.211 4.443-10.475 10h3.005c.264-3.86 3.464-7 7.47-7 4.006 0 7.206 3.14 7.47 7h3.005c-.264-5.557-4.854-10-10.475-10z"/>
                <path d="M10.5 22c5.621 0 10.211-4.443 10.475-10h-3.005c-.264 3.86-3.464 7-7.47 7-4.006 0-7.206-3.14-7.47-7H.025c.264 5.557 4.854 10 10.475 10z"/>
              </svg>
            </a>
            </div>
          </div>

          {/* Image Section - 35% */}
          <div className="flex-[0.35] flex items-center justify-center">
            <div className="relative max-w-md w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl scale-105"></div>
              <img 
                src="/Media (17).jfif" 
                alt="Profile" 
                className="relative w-full aspect-square object-cover rounded-3xl border-4 border-primary/30 shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-primary/25 hover:shadow-2xl hover:rotate-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
