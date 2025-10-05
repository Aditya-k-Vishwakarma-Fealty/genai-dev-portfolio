export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} GenAI Fullstack Developer. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground">
            Designed & Built with <span className="text-primary">❤️</span> using React & Tailwind
          </p>
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-muted-foreground italic">
            "Building the future, one line of code at a time"
          </p>
        </div>
      </div>
    </footer>
  );
};
