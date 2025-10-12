import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  technologies: string[];
}

interface ProjectCardProps {
  project: Project;
  style?: React.CSSProperties;
  onDrag?: (e: React.DragEvent) => void;
  onDragEnd?: (e: React.DragEvent) => void;
  className?: string;
}

export const ProjectCard = ({ 
  project, 
  style, 
  onDrag, 
  onDragEnd, 
  className = "" 
}: ProjectCardProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = (e: React.DragEvent) => {
    setIsDragging(true);
    e.dataTransfer.effectAllowed = "move";
    onDrag?.(e);
  };

  const handleDragEnd = (e: React.DragEvent) => {
    setIsDragging(false);
    onDragEnd?.(e);
  };

  return (
    <Card 
      className={`
        w-80 min-h-96 bg-card border border-border/50 backdrop-blur-sm
        card-hover cursor-move select-none
        ${isDragging ? 'opacity-50 scale-105' : 'opacity-100'}
        ${className}
      `}
      style={style}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 pt-2">
            {project.githubUrl && (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.githubUrl, "_blank");
                }}
              >
                <Github className="w-4 h-4 mr-2" />
                Code
              </Button>
            )}
            {project.liveUrl && (
              <Button 
                variant="default" 
                size="sm" 
                className="flex-1 bg-gradient-primary text-primary-foreground hover:opacity-90"
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, "_blank");
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};