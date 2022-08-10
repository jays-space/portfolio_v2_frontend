import React from "react";
import Image from "next/image";

// API
import { fetchAPI } from "../../lib/api";

// TYPES
import { Work } from "../../types/types";
import { GetStaticProps } from "next";

// COMPONENTS
import { ProjectHeadline } from "../../components/ProjectPage/ProjectHeadline";
import { ProjectDescriptionSection } from "../../components/ProjectPage/ProjectDescriptionSection";
import { TechStackSection } from "../../components/ProjectPage/TechStackSection";
import { MainContent } from "../../components/ProjectPage/MainContent";

export const getStaticPaths = async () => {
  const featuredWorks = await fetchAPI("/featured-works");
  const paths = featuredWorks.data.map((work: Work) => ({
    params: {
      id: work.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const featuredWork = await fetchAPI(`/featured-works/${params?.id}`);

  return {
    props: { project: featuredWork.data },
  };
};

interface IFeaturedWorkPage {
  project: Work;
}

const FeaturedWorkPage = ({ project }: IFeaturedWorkPage) => {
  return (
    <main className="min-h-screen flex flex-col ">
      <div className="w-full flex flex-col justify-center items-center max-w-screen-xl self-center">
        {/* headline */}
        <ProjectHeadline headline={project?.attributes?.headline} />

        {/* cover image */}
        <Image
          src="/images/img.jpg"
          alt="dashboard"
          layout="intrinsic"
          width={1080}
          height={600}
          className="lg:rounded-lg object-cover"
        />

        <div className="mx-10 lg:mx-24">
          {/* description + tech stack*/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-10 mt-10 md:mt-20">
            <div className="col-span-2">
              <ProjectDescriptionSection
                description={project?.attributes?.description}
                problemSolved={project?.attributes?.problemSolved}
              />
            </div>

            <TechStackSection techStack={project?.attributes?.techStack} />
          </div>

          {/* approach */}
          <MainContent content={project?.attributes?.approach} />
        </div>
      </div>
    </main>
  );
};

export default FeaturedWorkPage;
