export type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  link: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  link,
}) => {
  const isValidUrl = link.startsWith("http");

  return (
    <div className="text-left border border-solid border-(--nav-border-color) bg-(--nav-bg-color) p-4 max-h-sm h-50 max-w-sm w-full rounded-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-[10px_10px_15px_var(--card-shadow-color)]">
      <div className="flex flex-col gap-y-2 h-full">
        <h3 className="font-bold text-xl text-(--link-color)">{title}</h3>
        <p className="text-sm italic">{description}</p>
        {isValidUrl ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-(--link-color) hover:text-(--link-hover-color) mt-2 inline-block"
          >
            View on my GitHub &rarr;
          </a>
        ) : (
          <span className="text-gray-500 mt-2 inline-block">Coming Soon</span>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
