export interface ProjectImage {
    url: string;
    alt: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    images: ProjectImage[];
    featured: boolean;
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: "fleet-management",
      title: "Fleet Management System",
      shortDescription: "Real-time fleet tracking and management system with analytics",
      fullDescription: "A comprehensive fleet management solution that provides real-time tracking, maintenance scheduling, fuel management, and detailed analytics. Features include real-time GPS tracking, driver behavior monitoring, maintenance alerts, and fuel consumption optimization.",
      techStack: ["Symfony", "Vue.js", "PostgreSQL", "Docker", "Grafana"],
      images: Array.from({ length: 6 }, (_, i) => ({
        url: `https://picsum.photos/800/600`,
        alt: `Fleet Management System Screenshot ${i + 1}`
      })),
      featured: true,
      githubUrl: "https://github.com/yourusername/fleet-management",
      liveUrl: "https://fleet.example.com"
    },
    {
      id: "healthcare-platform",
      title: "Healthcare Management Platform",
      shortDescription: "Patient management and telemedicine platform",
      fullDescription: "An integrated healthcare management platform that streamlines patient care, appointment scheduling, and telemedicine services. Includes features for electronic health records, secure video consultations, prescription management, and automated appointment reminders.",
      techStack: ["Laravel", "Node.js", "Vue.js", "MySQL", "WebRTC"],
      images: Array.from({ length: 8 }, (_, i) => ({
        url: `https://picsum.photos/800/600`,
        alt: `Healthcare Platform Screenshot ${i + 1}`
      })),
      featured: true,
      githubUrl: "https://github.com/yourusername/healthcare-platform",
      liveUrl: "https://health.example.com"
    },
    {
      id: "home-automation",
      title: "Smart Home Hub",
      shortDescription: "Centralized home automation control system",
      fullDescription: "A comprehensive home automation system that integrates various IoT devices and provides a unified control interface. Features include automated scheduling, energy monitoring, security system integration, and voice control capabilities.",
      techStack: ["Python", "Home Assistant", "Node.js", "MQTT", "React"],
      images: Array.from({ length: 5 }, (_, i) => ({
        url: `https://picsum.photos/800/600`,
        alt: `Smart Home Hub Screenshot ${i + 1}`
      })),
      featured: true
    }
  ];