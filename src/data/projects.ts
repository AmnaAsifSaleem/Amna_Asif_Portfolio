import { Project } from "@/components/ProjectCard";
import autoimmuneImage from "@/assets/project-autoimmune.jpg";
import busSystemImage from "@/assets/project-bus-system.png";
import auraImage from "@/assets/project-aura.png";
import caveotImage from "@/assets/project-cave-ot.png";

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
    title: "CAVE-OT (Context-Aware Vulnerability Engine)",
    description: "An OT/IT vulnerability engine that prioritizes threats based on context. Fetches data via NVD API, performs model training, and maps attack paths. Features human-in-the-loop recommendations (accept/reject) and comprehensive policy compliance tracking.",
    image: caveotImage,
    githubUrl: "https://github.com/AmnaAsifSaleem",
    technologies: ["Machine Learning", "NVD API", "Attack Paths", "Cybersecurity", "Policy Compliance"],
    liveUrl: ""
  },
  {
    id: "4",
    title: "Aura - AI Event Booking Assistant",
    description: "Grand Vista Venue & Event Assistant powered by qwen2.5:1.5b via Ollama. Features a FastAPI async WebSocket backend with context memory and a glassmorphic real-time UI showing live telemetry (Tokens/Sec, Latency). Includes domain guardrails and automated benchmarking.",
    image: auraImage,
    githubUrl: "https://github.com/AmnaAsifSaleem",
    technologies: ["Ollama (Qwen2.5)", "FastAPI", "WebSockets", "React", "NLP", "Python"],
    liveUrl: ""
  }
];