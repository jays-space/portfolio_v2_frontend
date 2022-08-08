import Image from "next/image";
import React from "react";

// TYPES
import { Work } from "../../types/types";

// COMPONENTS
import { BodyText } from "../../components/Typography/BodyText";

const getStaticPaths = async () => {};

interface IFeaturedWorkPage {
  project: Work;
}

const FeaturedWorkPage = ({ project }) => {
  return (
    <main className="min-h-screen flex flex-col ">
      <div className="w-full flex flex-col justify-center items-center max-w-screen-xl self-center">
        <Image
          src="/images/img.jpg"
          alt="dashboard"
          layout="intrinsic"
          width={1080}
          height={600}
          className="rounded-lg object-cover"
        />

        <BodyText>{}</BodyText>
      </div>
    </main>
  );
};

export default FeaturedWorkPage;
