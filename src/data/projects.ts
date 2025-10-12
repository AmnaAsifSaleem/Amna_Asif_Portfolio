import { Project } from "@/components/ProjectCard";
import autoimmuneImage from "@/assets/project-autoimmune.jpg";
import busSystemImage from "@/assets/project-bus-system.png";
import movieRecImage from "@/assets/project-movie-rec.jpg";

export const projects: Project[] = [
  {
    id: "1",
    title: "Autoimmune Diagnosis Assistant",
    description: "Developed a web app using Streamlit that predicts autoimmune diseases based on patient symptoms with ML models (Random Forest & MLP). Implemented a two-phase diagnosis process combining symptom analysis and rule-based validation (CSP).",
    image: autoimmuneImage,
    githubUrl: "https://github.com/AmnaAsifSaleem/Autoimune-Diagnosis-Assistant.git",
    technologies: ["Python", "Streamlit", "Machine Learning", "Random Forest", "MLP"],
    liveUrl: ""
  },
  {
    id: "2",
    title: "Bus Ticket Management System",
    description: "Developed a full-stack web application for managing bus ticket bookings and schedules. Implemented features like user authentication, route browsing, seat selection, ticket reservation, and payment processing. Built using the MERN stack.",
    image: busSystemImage,
    githubUrl: "https://github.com/AmnaAsifSaleem/Bus-Management-System",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "MERN Stack"],
    liveUrl: ""
  },
  {
    id: "3",
    title: "Movie Recommendation System Backend",
    description: "Built a sophisticated backend system for movie recommendations using advanced algorithms and data processing techniques. Designed to provide personalized movie suggestions based on user preferences and viewing history.",
    image: movieRecImage,
    githubUrl: "https://github.com/AmnaAsifSaleem/Movie_RecommendationSystem",
    technologies: ["Python", "Machine Learning", "Data Processing", "Recommendation Algorithms"],
    liveUrl: ""
  }
];