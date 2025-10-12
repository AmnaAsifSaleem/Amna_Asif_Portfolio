import { useState, useRef, useEffect } from "react";
import { ProjectCard, Project } from "./ProjectCard";

interface ProjectPosition extends Project {
  position: { x: number; y: number };
}

interface InteractiveCanvasProps {
  projects: Project[];
}

export const InteractiveCanvas = ({ projects }: InteractiveCanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [projectPositions, setProjectPositions] = useState<ProjectPosition[]>([]);
  const [draggedProject, setDraggedProject] = useState<string | null>(null);

  // Initialize project positions
  useEffect(() => {
    if (projects.length > 0 && projectPositions.length === 0) {
      const positions = projects.map((project, index) => ({
        ...project,
        position: {
          x: 100 + (index % 3) * 350, // 3 columns
          y: 100 + Math.floor(index / 3) * 450, // Row spacing
        },
      }));
      setProjectPositions(positions);
    }
  }, [projects, projectPositions.length]);

  const handleDragStart = (e: React.DragEvent, projectId: string) => {
    setDraggedProject(projectId);
    
    // Store the offset from the mouse to the top-left corner of the card
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    
    e.dataTransfer.setData("text/plain", JSON.stringify({ projectId, offsetX, offsetY }));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    
    if (!canvasRef.current || !draggedProject) return;

    try {
      const data = JSON.parse(e.dataTransfer.getData("text/plain"));
      const canvasRect = canvasRef.current.getBoundingClientRect();
      
      // Calculate new position relative to canvas
      const newX = e.clientX - canvasRect.left - data.offsetX;
      const newY = e.clientY - canvasRect.top - data.offsetY;

      // Update project position
      setProjectPositions(prev => 
        prev.map(project => 
          project.id === draggedProject
            ? { ...project, position: { x: Math.max(0, newX), y: Math.max(0, newY) } }
            : project
        )
      );
    } catch (error) {
      console.error("Error handling drop:", error);
    }

    setDraggedProject(null);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-canvas">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(270 50% 75% / 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(330 50% 75% / 0.3) 0%, transparent 50%)`
          }}
        />
      </div>

      {/* Floating orbs for ambiance */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-32 w-24 h-24 bg-secondary/20 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }} />

      {/* Interactive canvas */}
      <div
        ref={canvasRef}
        className="relative w-full min-h-screen"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {/* Projects */}
        {projectPositions.map((project) => (
          <div
            key={project.id}
            className="absolute animate-slide-up"
            style={{
              left: `${project.position.x}px`,
              top: `${project.position.y}px`,
              zIndex: draggedProject === project.id ? 50 : 10,
            }}
          >
            <ProjectCard
              project={project}
              onDrag={(e) => handleDragStart(e, project.id)}
              className="shadow-card hover:shadow-glow"
            />
          </div>
        ))}

        {/* Instructions */}
        <div className="absolute bottom-8 left-8 text-muted-foreground text-sm bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Drag cards around to explore my projects
          </p>
        </div>
      </div>
    </div>
  );
};