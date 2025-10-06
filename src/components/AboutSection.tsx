import { Code2, Sparkles } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 animate-fade-in-up">
            <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">Professional Journey</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    With 1.5+ years of hands-on experience in fullstack development, I specialize in building 
                    intelligent web applications that seamlessly integrate Generative AI capabilities. My expertise 
                    spans modern web frameworks including React, Node.js, FastAPI, and LangChain, combined with 
                    cutting-edge AI technologies to deliver innovative solutions with real-world impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">AI & Automation Excellence</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    I excel in building LLM-powered applications, RAG pipelines, and automation workflows using 
                    n8n and Zapier. My proficiency extends across vector databases (ChromaDB, FAISS, Weaviate), 
                    prompt engineering techniques, and AI model integration. I combine traditional software 
                    engineering principles with modern AI automation to create intelligent, scalable solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
