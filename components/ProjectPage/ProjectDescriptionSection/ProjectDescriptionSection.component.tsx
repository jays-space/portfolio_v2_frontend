import React from "react";
import { Heading } from "../../Typography/Heading";

interface IProjectDescriptionSection {
  description: string;
  problemSolved?: string | undefined;
}

const ProjectDescriptionSection = ({
  description,
  problemSolved = undefined,
}: IProjectDescriptionSection) => {
  return (
    <div className="ml-10">
      <Heading variant="h3" title={description} capitalize={false} />

      {problemSolved && (
        <Heading
          variant="h3"
          title={problemSolved}
          capitalize={false}
          className="!text-red-500 font-bold mt-5"
        />
      )}
    </div>
  );
};

export default ProjectDescriptionSection;
