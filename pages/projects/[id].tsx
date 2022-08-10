import React from "react";
import Head from "next/head";

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
import { NextImage } from "../../components/NextImage";

export const getStaticPaths = async () => {
  const works = await fetchAPI("/works");
  const paths = works.data.map((work: Work) => ({
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
  const work = await fetchAPI(`/works/${params?.id}`, {
    populate: {
      coverImage: "*",
      image1: "*",
      image2: "*",
      image3: "*",
      defaultSeo: {
        populate: "*",
      },
    },
  });

  return {
    props: { project: work.data },
  };
};

interface INotableProject {
  project: Work;
}

const NotableProject = ({ project }: INotableProject) => {
  return (
    <>
      <Head>
        <title>{project?.attributes?.title} | Jay&apos;s Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex flex-col ">
        <div className="w-full flex flex-col justify-center items-center max-w-screen-xl self-center">
          {/* headline */}
          <ProjectHeadline headline={project?.attributes?.headline} />

          {/* cover image */}
          <NextImage image={project?.attributes?.coverImage} priority />

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

            {/* image 1 */}
            {project?.attributes?.image1?.data?.attributes && (
              <div className="mt-10">
                <NextImage image={project?.attributes?.image1} />
              </div>
            )}

            {/* image 2 */}
            {project?.attributes?.image2?.data?.attributes && (
              <div className="mt-10">
                <NextImage image={project?.attributes?.image2} />
              </div>
            )}

            {/* approach */}
            <MainContent content={project?.attributes?.approach} />

            {/* image 3 */}
            {project?.attributes?.image3?.data?.attributes && (
              <div className="mb-10">
                <NextImage image={project?.attributes?.image3} />
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default NotableProject;
