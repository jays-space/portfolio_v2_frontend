import Image from "next/image";
import Link from "next/link";
import React from "react";

// TYPES
import { Work } from "../../types/types";

// COMPONENTS
import { BodyText } from "../Typography/BodyText";

interface IProjectCard {
  project: Work;
  cols?: boolean;
}

const ProjectCard = ({ project, cols }: IProjectCard) => {
  return (
    <Link href={`/work/${project?.id}`}>
      <div
        className={`${
          cols && "col-span-2 row-span-2"
        } mx-4 shadow-xl rounded-lg bg-white cursor-pointer`}
      >
        {/* thumbnail */}
        <div className="aspect-video">
          <Image
            src="/images/img.jpg"
            alt="dashboard"
            layout="responsive"
            width={375}
            height={240}
            className="rounded-t-lg object-cover"
          />
        </div>

        <div className="flex flex-col justify-between items-center h-56 mt-4 py-4 px-6 ">
          {/* description */}
          <BodyText className="tracking-wide leading-normal">
            {project?.attributes?.description}
          </BodyText>

          {/* text stack */}
          <div className="flex flex-row flex-wrap justify-center pb-2">
            {project?.attributes?.techStack.map((tech, index) => (
              <BodyText
                key={index}
                className="mr-4 !text-sm !text-left text-slate-700"
              >
                {tech}
              </BodyText>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
