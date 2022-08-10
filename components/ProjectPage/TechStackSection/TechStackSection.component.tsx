import React from "react";

// TYPES
import { TechStackType } from "../../../types/types";

// COMPONENTS
import { BodyText } from "../../Typography/BodyText";
import { Heading } from "../../Typography/Heading";

interface ITechStackSection {
  techStack: TechStackType;
}

const TechStackSection = ({ techStack }: ITechStackSection) => {
  return (
    <div>
      <Heading
        variant="h4"
        title="tech stack"
        className="mb-2 !text-sm font-bold opacity-80"
      />
      <div className="flex flex-row flex-wrap justify-start items-center">
        {techStack.map((tech, index) => {
          return (
            <BodyText
              key={index}
              className="mr-3 !text-left !lowercase text-slate-700"
            >
              {tech}
            </BodyText>
          );
        })}
      </div>
    </div>
  );
};

export default TechStackSection;
