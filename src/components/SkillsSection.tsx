
import { Code, Database, Wrench, Target, Zap, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: [
        { name: "React.js", level: 90, description: "Building dynamic UIs" },
        { name: "JavaScript", level: 85, description: "ES6+ features" },
        { name: "TailwindCSS", level: 88, description: "Responsive design" },
        { name: "HTML5", level: 95, description: "Semantic markup" },
        { name: "CSS3", level: 90, description: "Animations & layouts" }
      ],
      color: "primary"
    },
    {
      title: "Backend",
      icon: Database,
      skills: [
        { name: "Node.js", level: 80, description: "Server-side JavaScript" },
        { name: "Express.js", level: 75, description: "Web framework" },
        { name: "MongoDB", level: 85, description: "NoSQL database" },
        { name: "REST APIs", level: 80, description: "API development" }
      ],
      color: "accent"
    },
    {
      title: "Tools & Tech",
      icon: Wrench,
      skills: [
        { name: "Git", level: 90, description: "Version control" },
        { name: "GitHub", level: 88, description: "Code collaboration" },
        { name: "Figma", level: 85, description: "UI/UX design" },
        { name: "Postman", level: 80, description: "API testing" }
      ],
      color: "secondary"
    },
    {
      title: "Methods",
      icon: Target,
      skills: [
        { name: "Agile", level: 80, description: "Development methodology" },
        { name: "Scrum", level: 75, description: "Project management" },
        { name: "OOP", level: 85, description: "Programming paradigm" },
        { name: "Responsive Design", level: 90, description: "Mobile-first approach" }
      ],
      color: "primary"
    }
  ];

  const floatingSkills = [
    "React", "JavaScript", "Node.js", "MongoDB", "TailwindCSS", 
    "Express.js", "Git", "Figma", "REST APIs", "MERN Stack"
  ];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">My Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I love working with modern technologies to build amazing digital experiences
          </p>
        </div>

        {/* Floating Skills Animation */}
        <div className="mb-20 relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="flex gap-6 animate-[scroll_20s_linear_infinite] whitespace-nowrap">
              {[...floatingSkills, ...floatingSkills].map((skill, index) => (
                <div
                  key={index}
                  className="skill-chip shrink-0 animate-float"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="neon-card group animate-slide-up hover:scale-105"
                style={{ animationDelay: `${categoryIndex * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center group-hover:animate-bounce">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="relative"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                            style={{ 
                              width: hoveredSkill === skill.name ? `${skill.level}%` : '0%' 
                            }}
                          />
                        </div>
                        
                        {hoveredSkill === skill.name && (
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-primary/30 px-3 py-1 rounded-lg text-xs text-foreground whitespace-nowrap animate-fade-in">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Tech Stack */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-8">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Tech Stack I Love</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "⚛️ React", "🟨 JavaScript", "🔷 TypeScript", "🎨 TailwindCSS", 
              "🟢 Node.js", "🍃 MongoDB", "📱 Figma", "🐙 GitHub",
              "⚡ Vite", "📦 npm", "🎯 REST APIs", "🚀 MERN Stack"
            ].map((tech, index) => (
              <div
                key={tech}
                className="px-6 py-3 bg-card/60 border border-border/50 rounded-xl text-foreground hover:bg-primary/20 hover:border-primary/60 hover:scale-110 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Add the scroll animation to globals
const style = document.createElement('style');
style.textContent = `
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`;
document.head.appendChild(style);
