import Image from "next/image";
import React from "react";

const techStack = ["react", "aws", "tailwind css"];

const ProjectCard = () => {
  return (
    <div className="w-full shadow-xl rounded-lg bg-white cursor-pointer">
      {/* thumbnail */}
      <Image
        src="/images/img.jpg"
        alt="dashboard"
        layout="intrinsic"
        width={360}
        height={240}
        className="rounded-t-lg object-cover"
      />

      <div className="py-4 px-6">
        {/* description */}
        <p className="mb-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          nesciunt eveniet et quae libero error autem sint aliquam fuga quod?
        </p>

        {/* text stack */}
        <div className="flex flex-row">
          {techStack.map((stack, index) => (
            <p key={index} className="mr-2">
              {stack}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
