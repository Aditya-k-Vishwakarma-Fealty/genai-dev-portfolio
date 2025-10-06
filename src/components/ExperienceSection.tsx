import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "Fealty Technologies PVT LTD",
    role: "Full Stack GenAI Developer",
    duration: "Present (On-Site)",
    logo: "/experience/fealty_technologies_logo.jfif",
    achievements: [
      "Generative AI & Prompt Engineering: Working with LLMs (GPT, LLaMA, Claude), Fine-tuning, LangChain, RAG pipelines",
      "AI Development & Data Handling: OpenAI API, Hugging Face, TensorFlow, PyTorch, Vector Databases (ChromaDB, FAISS, Weaviate)",
      "Backend & API Integration: FastAPI, Flask, Node.js for scalable AI-powered applications and APIs",
      "Advanced NLP preprocessing, Embeddings, and context optimization for AI applications",
      "Zero-shot, Few-shot, Chain-of-thought prompting techniques for enhanced AI performance",
    ],
  },
  {
    company: "Zenbourg",
    role: "AI Automation Intern",
    duration: "Remote",
    logo: "/experience/Zenbourg logo.png",
    achievements: [
      "Engineered automation workflows using n8n and Zapier to seamlessly integrate business tools and eliminate manual bottlenecks",
      "Developed Selenium-based test suites for end-to-end web application testing and UI validation",
      "Collaborated with cross-functional teams on automation initiatives, boosting internal productivity by 60%",
      "Streamlined operations and accelerated project delivery timelines through automation",
      "Performance monitoring and ensuring product reliability through comprehensive testing",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            Building innovative solutions and delivering measurable impact
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="bg-card p-6 sm:p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 flex items-center justify-center">
                  {exp.logo ? (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`}
                      className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
                    />
                  ) : (
                    <Briefcase className="h-6 w-6 text-primary" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">{exp.role}</h3>
                  <p className="text-base sm:text-lg text-primary font-semibold mb-1">{exp.company}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{exp.duration}</p>
                </div>
              </div>

              <div className="sm:pl-16">
                <h4 className="text-xs sm:text-sm font-semibold mb-3 text-foreground/80 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
                  Key Achievements & Responsibilities
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
