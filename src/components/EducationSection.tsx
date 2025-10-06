import { GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Indore Institute of Science & Technology",
    year: "November 2022 – April 2026",
    description: "CGPA: 7.88 | Courses: Operating Systems, Data Structures, Analysis of Algorithms, Computer Network, Machine Learning, DBMS, OOPs",
    hasCertificate: false,
    logo: "/certifications/IIST logo.png",
    isEducation: true,
  },
  {
    degree: "Microsoft Career Essentials in Software Development",
    institution: "Microsoft",
    year: "2024",
    description: "Comprehensive software development fundamentals and best practices",
    hasCertificate: true,
    logo: "/certifications/Microsoft.jpg",
    isEducation: false,
  },
  {
    degree: "AWS Security Essentials",
    institution: "Amazon Web Services",
    year: "2024",
    description: "Cloud security fundamentals and best practices",
    hasCertificate: true,
    logo: "/certifications/aws.png",
    isEducation: false,
  },
  {
    degree: "Certified Software Engineer",
    institution: "HackerRank",
    year: "2024",
    description: "Advanced software engineering and problem-solving skills certification",
    hasCertificate: true,
    logo: "/certifications/Hackerrank.png",
    isEducation: false,
  },
  {
    degree: "Certified Ethical Hacker",
    institution: "CompTIA",
    year: "2024",
    description: "Cybersecurity and ethical hacking methodologies certification",
    hasCertificate: true,
    logo: "/certifications/comptia.webp",
    isEducation: false,
  },
  {
    degree: "Google Analytics & Advanced Analytics",
    institution: "Google",
    year: "2024",
    description: "Data Analytics and Power BI expertise",
    hasCertificate: true,
    logo: "/certifications/Google.png",
    isEducation: false,
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-sm sm:text-base text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-card p-4 sm:p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="p-2 sm:p-3 bg-primary/10 rounded-lg w-fit mb-3 sm:mb-4 flex items-center justify-center">
                  {edu.logo ? (
                    <img 
                      src={edu.logo} 
                      alt={`${edu.institution} logo`}
                      className={`object-contain ${
                        edu.institution === "Indore Institute of Science & Technology" 
                          ? "h-10 w-10 sm:h-12 sm:w-12" 
                          : "h-8 w-8 sm:h-10 sm:w-10"
                      }`}
                    />
                  ) : edu.isEducation ? (
                    <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  ) : (
                    <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  )}
                </div>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 leading-tight">{edu.degree}</h3>
                <p className="text-primary font-semibold mb-1 text-xs sm:text-sm">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mb-2 sm:mb-3">{edu.year}</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4">{edu.description}</p>
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
