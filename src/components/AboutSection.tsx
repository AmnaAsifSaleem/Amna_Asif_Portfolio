
import { Code, Heart, Target, BookOpen, Star, Award } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/10 to-background"></div>
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Heart className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Get to know me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating beautiful, functional web experiences that make a difference
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Content - Centered Layout */}
          <div className="text-center mb-16">
            <div className="neon-card p-8 lg:p-12 rounded-3xl animate-slide-up">
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Full Stack Developer & Software Engineering Student
              </h3>
              <div className="prose prose-lg max-w-4xl mx-auto text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  I'm a Software Engineering student with a passion for full-stack development 
                  and building complete web applications. I specialize in the MERN stack, 
                  creating seamless experiences from database to user interface. My expertise 
                  spans both frontend and backend technologies, with additional skills in UI/UX 
                  design to create comprehensive digital solutions.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest web technologies, 
                  designing interfaces, or working on personal projects that challenge me to 
                  grow as a full-stack developer. My goal is to build digital solutions that 
                  are not just functional, but truly delightful to use.
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="neon-card p-6 text-center rounded-2xl animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Full Stack</h4>
              <p className="text-muted-foreground">End-to-end development with modern technologies</p>
            </div>

            <div className="neon-card p-6 text-center rounded-2xl animate-slide-up" style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">User-Focused</h4>
              <p className="text-muted-foreground">Designing with users in mind, every pixel matters</p>
            </div>

            <div className="neon-card p-6 text-center rounded-2xl animate-slide-up" style={{ animationDelay: '600ms' }}>
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">Innovation</h4>
              <p className="text-muted-foreground">Always learning and implementing cutting-edge solutions</p>
            </div>
          </div>

          {/* Education & Background */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="neon-card p-8 rounded-2xl animate-slide-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h4 className="text-xl font-bold text-foreground">Education</h4>
              </div>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-foreground">Bachelor of Software Engineering</h5>
                  <p className="text-primary text-sm mb-2">National University of Computer and Emerging Sciences (FAST)</p>
                  <p className="text-muted-foreground text-sm">Expected Graduation 2026</p>
                </div>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-muted-foreground text-sm">
                    Focused on modern software development practices, full-stack web technologies, 
                    and computer science fundamentals.
                  </p>
                </div>
              </div>
            </div>

            <div className="neon-card p-8 rounded-2xl animate-slide-up" style={{ animationDelay: '1000ms' }}>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-accent" />
                <h4 className="text-xl font-bold text-foreground">Expertise</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "MERN Stack",
                  "Full Stack Dev", 
                  "JavaScript/ES6+",
                  "React Development",
                  "Node.js & Express",
                  "MongoDB",
                  "UI/UX Design",
                  "REST APIs"
                ].map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20 hover:bg-primary/20 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
