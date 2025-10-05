import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    year: "2018 - 2022",
    description: "Focused on software engineering, artificial intelligence, and web development",
  },
  {
    degree: "Advanced AI & Machine Learning Certification",
    institution: "Online Learning Platform",
    year: "2023",
    description: "Specialized training in GPT models, LangChain, and prompt engineering",
  },
  {
    degree: "Fullstack Web Development Bootcamp",
    institution: "Tech Academy",
    year: "2022",
    description: "Intensive program covering MERN stack, RESTful APIs, and modern deployment practices",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                {edu.degree.includes("Certification") ? (
                  <Award className="h-6 w-6 text-primary" />
                ) : (
                  <GraduationCap className="h-6 w-6 text-primary" />
                )}
              </div>
              
              <h3 className="text-lg font-bold mb-2 leading-tight">{edu.degree}</h3>
              <p className="text-primary font-semibold mb-1 text-sm">{edu.institution}</p>
              <p className="text-xs text-muted-foreground mb-3">{edu.year}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
