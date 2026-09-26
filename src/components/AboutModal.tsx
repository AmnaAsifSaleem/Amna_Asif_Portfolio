import { useState } from "react";
import { X, ExternalLink, Mail, MapPin, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal = ({ isOpen, onClose }: AboutModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border/50 shadow-card animate-slide-up">
        <CardContent className="p-0">
          {/* Header */}
          <div className="relative p-8 bg-gradient-primary rounded-t-lg">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </Button>
            
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary-foreground">
                AA
              </div>
              <h2 className="text-3xl font-bold text-primary-foreground mb-2">
                Amna Asif
              </h2>
              <p className="text-primary-foreground/90 text-lg">
                Software Engineer | Cybersecurity Enthusiast | AI Developer
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-6">
            {/* Bio */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a 6th semester Software Engineering student passionate about full-stack development, 
                cybersecurity, and artificial intelligence. My core expertise lies in the MERN stack, 
                along with recent hands-on experience in AI/NLP (Intelligent Chatbots) and deep network 
                security/vulnerability scanning using Suricata and Docker (CAVE-OT).
              </p>
            </div>

            {/* Skills & Interests */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Skills & Interests</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React", "Node.js", "MongoDB", "AI / NLP", "Cybersecurity",
                  "Suricata", "Docker", "Vulnerability Scanning", "REST APIs",
                  "MERN Stack", "Frontend Development", "Full-Stack Development"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-accent/20 text-accent-foreground border border-accent/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-medium text-foreground">Software Engineering Student</p>
                <p className="text-muted-foreground">6th Semester • Currently Pursuing</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>amnaasif320@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Available for opportunities</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => window.open("https://github.com/AmnaAsifSaleem", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="flex-1"
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
  );
};