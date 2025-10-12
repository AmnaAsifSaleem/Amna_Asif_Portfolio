import profilePic from "@/assets/My Picture(edited).jpg"; // ✅ Import image

import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-gradient-to-r from-background to-secondary/30 border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container-responsive section-padding">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={profilePic}  // ✅ Use imported image
                  alt="Amna Asif"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-1 sm:mb-2">
                Amna Asif
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4">
                Full Stack Developer | MERN Stack | JavaScript
              </p>

              {/* Social Links */}
              <div className="flex gap-3 justify-center sm:justify-start">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://www.linkedin.com/in/amnaasif-dev/", "_blank")}
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">LinkedIn</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open("https://github.com/AmnaAsifSaleem", "_blank")}
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex gap-2 sm:gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              Contact
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
