import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "Tech Innovations Inc.",
    role: "Fullstack Developer (GenAI Specialist)",
    duration: "Jan 2023 - Present",
    achievements: [
      "Architected and deployed 5+ fullstack applications integrating GPT-4 and LangChain for intelligent features",
      "Optimized AI-powered recommendation engine, reducing response latency by 40% and improving user engagement by 25%",
      "Led migration of legacy systems to modern React/Node.js stack with AI integration, serving 50K+ active users",
      "Implemented CI/CD pipelines reducing deployment time by 60% and improving code quality through automated testing",
      "Collaborated with cross-functional teams to deliver scalable solutions meeting complex business requirements",
    ],
  },
  {
    company: "Digital Solutions Co.",
    role: "Junior Fullstack Developer",
    duration: "Jun 2022 - Dec 2022",
    achievements: [
      "Developed responsive web applications using React, Node.js, and PostgreSQL",
      "Integrated OpenAI API for customer support chatbot, reducing ticket resolution time by 30%",
      "Built RESTful APIs handling 10K+ requests daily with comprehensive error handling and logging",
      "Participated in agile development cycles with bi-weekly sprints and code reviews",
      "Contributed to open-source projects and maintained technical documentation",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building innovative solutions and delivering measurable impact
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary font-semibold mb-1">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                </div>
              </div>

              <div className="pl-16">
                <h4 className="text-sm font-semibold mb-3 text-foreground/80 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Key Achievements & Responsibilities
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
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
    </section>
  );
};
