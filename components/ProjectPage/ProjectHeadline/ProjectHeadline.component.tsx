import React from "react";

// COMPONENTS
import { Heading } from "../../Typography/Heading";

const ProjectHeadline = ({ headline }: { headline: string }) => {
  return (
    <Heading
      variant="h1"
      title={headline}
      className="my-10 mx-10 md:mx-0 md:w-2/3 text-center"
    />
  );
};

export default ProjectHeadline;
