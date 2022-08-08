import Image from "next/image";
import React from "react";

// TYPES
import { TechStackType } from "../../types/types";

// COMPONENTS
import { BodyText } from "../Typography/BodyText";

interface IProjectCard {
  description: string;
  techStack: TechStackType;
  cols?: boolean;
}

const ProjectCard = ({ description, techStack, cols }: IProjectCard) => {
  return (
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
          {description}
        </BodyText>

        {/* text stack */}
        <div className="flex flex-row flex-wrap justify-center pb-2">
          {techStack.map((stack, index) => (
            <BodyText key={index} className="mr-4 !text-sm !text-left text-slate-700">
              {stack}
            </BodyText>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
