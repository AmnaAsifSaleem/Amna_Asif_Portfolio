import profilePic from "@/assets/My Picture(edited).jpg"; // ✅ Import image

import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-background to-secondary/30 border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="w-full px-6 lg:px-12 xl:px-16 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md hover:shadow-lg transition-all duration-300">
                <img 
                  src={profilePic}
                  alt="Amna Asif"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl font-bold gradient-text mb-1">
                Amna Asif
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                Software Engineer | Cybersecurity | AI
              </p>

              {/* Social Links */}
              <div className="flex gap-2 justify-center sm:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://www.linkedin.com/in/amnaasif-dev/", "_blank")}
                  className="h-7 px-2 text-xs flex items-center gap-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-3 h-3" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/AmnaAsifSaleem", "_blank")}
                  className="h-7 px-2 text-xs flex items-center gap-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-3 h-3" />
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-1 sm:gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm h-8 px-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm h-8 px-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm h-8 px-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Certifications
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm h-8 px-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm h-8 px-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-xs sm:text-sm h-8 px-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Contact
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('/resume.pdf', '_blank')}
              className="text-xs sm:text-sm h-8 px-4 ml-2 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm shadow-primary/20"
            >
              Resume
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
