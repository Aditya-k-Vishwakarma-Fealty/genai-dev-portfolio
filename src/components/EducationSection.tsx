import { GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Indore Institute of Science & Technology",
    year: "November 2022 – April 2026",
    description: "CGPA: 7.88 | Courses: Operating Systems, Data Structures, Analysis of Algorithms, Computer Network, Machine Learning, DBMS, OOPs",
    hasCertificate: false,
  },
  {
    degree: "Microsoft Career Essentials in Software Development",
    institution: "Microsoft",
    year: "2024",
    description: "Comprehensive software development fundamentals and best practices",
    hasCertificate: true,
  },
  {
    degree: "AWS Security Essentials",
    institution: "Amazon Web Services",
    year: "2024",
    description: "Cloud security fundamentals and best practices",
    hasCertificate: true,
  },
  {
    degree: "Certified Software Engineer",
    institution: "HackerRank",
    year: "2024",
    description: "Advanced software engineering and problem-solving skills certification",
    hasCertificate: true,
  },
  {
    degree: "Certified Ethical Hacker",
    institution: "CompTIA",
    year: "2024",
    description: "Cybersecurity and ethical hacking methodologies certification",
    hasCertificate: true,
  },
  {
    degree: "Google Analytics & Advanced Analytics",
    institution: "Google",
    year: "2024",
    description: "Data Analytics and Power BI expertise",
    hasCertificate: true,
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
              className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{edu.description}</p>
              </div>
              
              <div className="flex-grow"></div>
              
              {edu.hasCertificate && (
                <div className="flex-shrink-0 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={() => {
                      // You can add actual certificate links here
                      console.log(`Get certificate for: ${edu.degree}`);
                    }}
                  >
                    Get Certificate
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
