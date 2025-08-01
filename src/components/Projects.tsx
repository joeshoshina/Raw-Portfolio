import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section
      className="flex flex-col items-center justify-center text-center pb-10"
      id="projects"
    >
      <div className="w-full px-6 border-b-2 border-b-(--link-color) border-solid py-5 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold">Things I’ve Built</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-3xl px-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
