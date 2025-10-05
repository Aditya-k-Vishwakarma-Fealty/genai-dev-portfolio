import { Code2, Sparkles, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-text bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8 animate-fade-in-up">
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Professional Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With 2 years of hands-on experience in fullstack development, I specialize in building 
                    intelligent web applications that seamlessly integrate Generative AI capabilities. My expertise 
                    spans modern web frameworks including React and Node.js, combined with cutting-edge AI technologies 
                    to deliver innovative solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I excel in designing scalable architectures that handle complex business logic while maintaining 
                    clean, maintainable code. My proficiency extends across both SQL and NoSQL databases, cloud 
                    deployment platforms, and RESTful/GraphQL API design. I bring together traditional software 
                    engineering principles with modern AI model integration techniques.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Personal Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm driven by curiosity and a genuine enthusiasm for solving real-world problems through technology. 
                    I thrive in collaborative environments where I can contribute to innovative projects while continuously 
                    learning and adapting to emerging technologies. My goal is to create applications that not only meet 
                    technical requirements but also deliver exceptional user experiences.
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
