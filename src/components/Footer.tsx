export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} GenAI Fullstack Developer. All rights reserved.
          </p>
          
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
            Designed & Built with <span className="text-primary">❤️</span> using React & Tailwind
          </p>
        </div>
        
        <div className="text-center mt-3 sm:mt-4">
          <p className="text-xs text-muted-foreground italic">
            "Building the future, one line of code at a time"
          </p>
        </div>
      </div>
    </footer>
  );
};
