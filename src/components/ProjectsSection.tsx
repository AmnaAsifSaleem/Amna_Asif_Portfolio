import { ExternalLink, Github, Folder, Star, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/data/projects";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/5 to-background"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Folder className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">My Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work in frontend development, full-stack applications, and innovative solutions. Each project represents a unique challenge and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="neon-card group hover:scale-[1.02] hover:shadow-glow transition-all duration-500 border-0 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden relative bg-card">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      className="bg-background/90 hover:bg-background border-border/50 hover:scale-110 transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                        className="bg-primary hover:bg-primary/90 hover:scale-110 transition-all"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <Star className="w-5 h-5 text-accent/60 group-hover:text-accent transition-colors flex-shrink-0 mt-1" />
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Technologies
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-3 py-1.5 bg-card/60 text-foreground rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-xs px-3 py-1.5 bg-muted/60 text-muted-foreground rounded-lg border border-border/30">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="flex items-center gap-2 flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-medium">Code</span>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      onClick={() => window.open(project.liveUrl, "_blank")}
                      className="flex items-center gap-2 flex-1 bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="font-medium">Live Demo</span>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/AmnaAsifSaleem", "_blank")}
            className="border-primary/30 hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 px-8"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};