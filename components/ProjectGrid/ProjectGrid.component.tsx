import React from "react";

// COMPONENTS
import { ProjectCard } from "../ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6 md:gap-x-0 mb-20 md:mb-0">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectGrid;
