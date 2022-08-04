import React from "react";

// COMPONENTS
import { ProjectCard } from "../ProjectCard";

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-8 mb-20">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default ProjectGrid;
