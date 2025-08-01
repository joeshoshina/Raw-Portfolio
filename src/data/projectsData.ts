import type { ProjectCardProps } from "../components/ProjectCard";
export const projects: ProjectCardProps[] = [
  {
    id: "prompt-polish",
    title: "Prompt Polish",
    description:
      "Chrome extension optimizing vague prompts via Gemini API, boosting AI response clarity by 65%. FastAPI backend on Render, built with Manifest V3 and modern web APIs.",
    link: "https://github.com/joeshoshina/Prompt-Polish.git",
  },
  {
    id: "task-manager",
    title: "Task Manager",
    description:
      "Full-stack task manager with JWT authentication for 10+ users. Express backend with REST API and MySQL, responsive React frontend with dynamic routing.",
    link: "https://github.com/joeshoshina/Task-Manager.git",
  },
  {
    id: "bonding-game",
    title: "Bonding Game",
    description:
      "Social web game with 90+ interactive prompts across themes. Uses React hooks and stack logic, tested at events and refined with feedback.",
    link: "https://github.com/joeshoshina/Bonding-Game.git",
  },
  {
    id: "movie-search",
    title: "Movie Search",
    description:
      "Responsive app displaying top 50 trending films via TMDb API. Clean UI inspired by Figma, animated loading states using Tailwind CSS, built to deepen API and async React skills.",
    link: "https://github.com/joeshoshina/Movie-Search.git",
  },
  {
    id: "message-mate",
    title: "Message Mate",
    description:
      "Messaging bot automating personalized reminders and recurring messages across SMS, Discord, etc. Features flexible scheduling, contact/event tracking, and smart templating.",
    link: "Coming Soon",
  },
];
