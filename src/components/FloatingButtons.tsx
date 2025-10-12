import { User, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingButtons = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-6 right-6 z-40 flex gap-3">
      <Button
        onClick={() => scrollToSection("about")}
        className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 hover:bg-card-hover hover:shadow-glow transition-all duration-300"
        variant="ghost"
        size="icon"
        title="About Me"
      >
        <User className="w-5 h-5 text-foreground" />
      </Button>
      
      <Button
        onClick={() => scrollToSection("contact")}
        className="w-12 h-12 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 hover:shadow-glow transition-all duration-300"
        variant="ghost"
        size="icon"
        title="Contact"
      >
        <Mail className="w-5 h-5 text-primary" />
      </Button>
    </div>
  );
};