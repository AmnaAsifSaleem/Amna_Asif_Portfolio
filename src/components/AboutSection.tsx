
import { Code, Heart, Target, BookOpen, Star, Award, Briefcase } from "lucide-react";

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
        
        <div className="w-full max-w-[95%] xl:max-w-[1600px] mx-auto px-4 lg:px-8">
          {/* Main Content - Centered Layout */}
          <div className="mb-16">
            <div className="neon-card p-8 lg:p-12 rounded-3xl animate-slide-up text-left flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  Software Engineer | Cybersecurity Enthusiast | AI Developer
                </h3>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  I'm a Software Engineering student with a multifaceted passion for full-stack 
                  development, cybersecurity, and artificial intelligence. My core expertise lies in 
                  the MERN stack, where I create seamless experiences from database to user interface. 
                  Recently, I've expanded my technical horizons into the realms of AI/NLP for intelligent 
                  chatbots and deep network security through CAVE-OT vulnerability scanning using Suricata.
                </p>
                <p className="leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest in network threat detection, 
                  experimenting with NLP models, or working on personal projects that challenge me to 
                  bridge the gap between secure systems and delightful user experiences.
                </p>
              </div>
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
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
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
                  "AI & NLP", 
                  "Cybersecurity",
                  "Vulnerability Scanning",
                  "Docker & Suricata",
                  "MongoDB",
                  "React & Node.js",
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

          {/* Experience */}
          <div id="experience" className="neon-card p-8 rounded-2xl animate-slide-up mb-8 scroll-mt-24" style={{ animationDelay: '1100ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-6 h-6 text-accent" />
              <h4 className="text-xl font-bold text-foreground">Experience</h4>
            </div>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                <h5 className="font-semibold text-foreground text-lg">Teaching Assistant (Cloud Computing)</h5>
                <p className="text-primary text-sm mb-2">FAST-NUCES Islamabad | Current</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Assisting professors and guiding students in the Cloud Computing course. Conducting interactive problem-solving sessions, explaining cloud architectures (AWS, Docker, deployments), grading assignments, and providing comprehensive feedback to support student learning.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1.5 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                <h5 className="font-semibold text-foreground text-lg">Machine Learning Intern</h5>
                <p className="text-primary text-sm mb-2">FlyRank AI | Jul 2026 - Sep 2026</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Developed machine learning solutions using Python and real-world datasets. Performed data preprocessing, feature engineering, and model evaluation while collaborating via Git/GitHub in professional, agile development workflows.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div id="certifications" className="neon-card p-8 rounded-2xl animate-slide-up scroll-mt-24" style={{ animationDelay: '1300ms' }}>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-bold text-foreground">Certifications & Achievements</h4>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <a href="/certs/anthropic-fluency.pdf" target="_blank" rel="noopener noreferrer" className="block space-y-2 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer">
                <h5 className="font-semibold text-foreground text-lg">AI Fluency: Framework & Foundations</h5>
                <p className="text-primary text-sm">Anthropic Certification</p>
                <p className="text-muted-foreground text-sm mt-1">Successfully completed a specialized certification focused on advanced AI concepts and foundational frameworks.</p>
              </a>
              
              <a href="/certs/anthropic-mcp.pdf" target="_blank" rel="noopener noreferrer" className="block space-y-2 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer">
                <h5 className="font-semibold text-foreground text-lg">Model Context Protocol: Advanced Topics</h5>
                <p className="text-primary text-sm">Anthropic Certification</p>
                <p className="text-muted-foreground text-sm mt-1">Completed advanced training in Model Context Protocol, demonstrating expertise in prompt engineering and model behavior.</p>
              </a>

              <a href="/certs/ielts.jpg" target="_blank" rel="noopener noreferrer" className="block space-y-2 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer">
                <h5 className="font-semibold text-foreground text-lg">IELTS Certification</h5>
                <p className="text-primary text-sm">Overall Band Score: 7.5 (CEFR: C1)</p>
                <p className="text-muted-foreground text-sm mt-1">Demonstrated advanced English communication proficiency, essential for effective global collaboration and technical documentation.</p>
              </a>

              <a href="/certs/flyrank-internship.pdf" target="_blank" rel="noopener noreferrer" className="block space-y-2 p-4 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer">
                <h5 className="font-semibold text-foreground text-lg">Machine Learning Internship</h5>
                <p className="text-primary text-sm">FlyRank.ai</p>
                <p className="text-muted-foreground text-sm mt-1">Successfully completed the Machine Learning Internship Program, demonstrating excellence in technical competency and collaborative contribution.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
