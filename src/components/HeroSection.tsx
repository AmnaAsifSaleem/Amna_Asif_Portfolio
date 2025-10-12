
import { ExternalLink, Mail, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="bg-card/50 backdrop-blur-xl border border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-slide-up">
          <CardContent className="p-0">
            {/* Hero Header */}
            <div className="p-10 bg-gradient-primary rounded-t-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
              <div className="text-center relative z-10">
                <div className="w-28 h-28 mx-auto mb-6 bg-primary-foreground/20 rounded-full flex items-center justify-center text-4xl font-bold text-primary-foreground animate-glow">
                  AA
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-3">
                  Amna Asif
                </h1>
                <p className="text-primary-foreground/90 text-xl mb-4">
                  Full Stack Developer & Software Engineering Student
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <span className="px-4 py-2 bg-primary-foreground/20 rounded-full text-primary-foreground text-sm">
                    MERN Stack
                  </span>
                  <span className="px-4 py-2 bg-primary-foreground/20 rounded-full text-primary-foreground text-sm">
                    Full Stack
                  </span>
                  <span className="px-4 py-2 bg-primary-foreground/20 rounded-full text-primary-foreground text-sm">
                    UI/UX Design
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 space-y-8">
              {/* Bio */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">About Me</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm a Software Engineering student passionate about full-stack development 
                  and building complete web applications from front to back. I specialize in 
                  the MERN stack and love creating seamless user experiences with clean, 
                  efficient code. My expertise spans both frontend and backend development, 
                  with additional skills in UI/UX design to create holistic digital solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>amnaasif320@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>Available for opportunities</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
                  <div className="flex flex-col gap-3">
                    <Button
                      variant="outline"
                      className="justify-start hover:bg-primary/20 hover:text-primary hover:border-primary"
                      onClick={() => window.open("#", "_blank")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start hover:bg-accent/20 hover:text-accent hover:border-accent"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Me
                    </Button>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-6 border-t border-border/50">
                <Button
                  variant="outline"
                  className="flex-1 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300"
                  onClick={() => window.open("https://github.com/AmnaAsifSaleem", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 hover:bg-secondary/20 hover:text-secondary hover:border-secondary transition-all duration-300"
                  onClick={() => window.open("https://www.linkedin.com/in/amnaasif-dev/", "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
