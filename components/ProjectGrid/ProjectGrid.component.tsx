import React from "react";
import { WorksType } from "../../types/types";

// COMPONENTS
import { ProjectCard } from "../ProjectCard";

interface IProjectGrid {
  variant?: "featured" | "other";
  projects?: WorksType;
}

const ProjectGrid = ({ projects, variant = "featured" }: IProjectGrid) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 md:gap-x-0 mb-20 md:mb-0">
      {projects &&
        projects.map((project, idx) => {
          return <ProjectCard key={idx} project={project} variant={variant} />;
        })}
    </div>
  );
};

export default ProjectGrid;
