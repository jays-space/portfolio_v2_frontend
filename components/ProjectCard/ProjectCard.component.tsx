import Image from "next/image";
import React from "react";

// COMPONENTS
import { BodyText } from "../Typography/BodyText";

const techStack = ["react", "aws", "tailwind css"];

interface IProjectCard {
  cols?: boolean;
}

const ProjectCard = ({ cols }: IProjectCard) => {
  return (
    <div className={`${cols && 'col-span-2 row-span-2'} w-full shadow-xl rounded-lg bg-white cursor-pointer`}>
      {/* thumbnail */}
      <Image
        src="/images/img.jpg"
        alt="dashboard"
        layout="intrinsic"
        width={340}
        height={240}
        className="rounded-t-lg object-cover"
      />

      <div className="py-4 px-6">
        {/* description */}
        <BodyText className="mb-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo illum
          facilis exercitationem ea non nulla dicta mollitia iure, rem
          aspernatur?
        </BodyText>

        {/* text stack */}
        <div className="flex flex-row pb-2">
          {techStack.map((stack, index) => (
            <span key={index} className="mr-2 text-sm text-slate-700">
              {stack}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
