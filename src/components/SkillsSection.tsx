import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Cloud, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C++", "JavaScript", "SQL", "C", "Java", "Rust"],
    color: "primary",
  },
  {
    title: "Frameworks & Libraries",
    icon: Database,
    skills: ["ReactJS", "NodeJS", "Express", "Bootstrap", "TailwindCSS", "Django", "LangChain", "LanGraph", "FastAPI"],
    color: "accent",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL", "MongoDB", "PostgreSQL", "Neo4j", "ChromaDB", "FAISSDB", "Weaviate"],
    color: "primary",
  },
  {
    title: "Generative AI",
    icon: Brain,
    skills: ["OpenAI API", "Hugging Face", "TensorFlow", "PyTorch", "Transformers", "RAG Pipelines", "Prompt Engineering"],
    color: "accent",
  },
  {
    title: "Tools & Platforms",
    icon: Cloud,
    skills: ["GitHub", "GIT", "Jupyter Notebook", "MySQL", "VS Code", "Pycharm", "IntelliJ IDEA", "Linux"],
    color: "primary",
  },
  {
    title: "Automations & Agentic AI",
    icon: Zap,
    skills: ["n8n", "Automa", "Selenium", "Workflow Automation", "AI Agents", "Task Automation", "Zapier"],
    color: "accent",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, intelligent web applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${category.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <category.icon className={`h-6 w-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1 text-sm hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
