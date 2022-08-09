import Image from "next/image";
import Link from "next/link";
import React from "react";

// TYPES
import { Work } from "../../types/types";

// COMPONENTS
import { BodyText } from "../Typography/BodyText";
import { Heading } from "../Typography/Heading";

interface IProjectCard {
  project: Work;
  variant?: "featured" | "other";
  cols?: boolean;
}

const ProjectCard = ({ project, variant = "featured", cols }: IProjectCard) => {
  return (
    <Link href={`/${variant === 'featured' ? 'featured' : 'projects'}/${project?.id}`}>
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

        <div className="flex flex-col justify-between items-center py-4 px-6 ">
          {/* title */}
          {/* <Heading variant="h4" title={project?.attributes?.title} className='mb-2 text-center' />           */}
          <BodyText className="!tracking-wide !leading-relaxed max-w-prose font-bold">
            {project?.attributes?.title}
          </BodyText>

          {/* description */}
          <BodyText className="!text-sm !tracking-wide !leading-relaxed max-w-prose my-5">
            {project?.attributes?.subtitle}
          </BodyText>

          {/* text stack */}
          {/* <div className="flex flex-row flex-wrap justify-center pb-2">
            {project?.attributes?.techStack.map((tech, index) => (
              <BodyText
                key={index}
                className="mr-2 !text-xs !text-left text-slate-700"
              >
                {tech}
              </BodyText>
            ))}
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
