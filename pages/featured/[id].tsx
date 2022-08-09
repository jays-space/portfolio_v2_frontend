import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import ReactDom from "react-dom";

// API
import { fetchAPI } from "../../lib/api";

// TYPES
import { Work } from "../../types/types";

// COMPONENTS
import { BodyText } from "../../components/Typography/BodyText";
import { GetStaticProps } from "next";
import { Heading } from "../../components/Typography/Heading";

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
        {/* title */}
        <Heading
          variant="h2"
          title={project?.attributes?.title}
          className="mb-10 w-2/3 text-center"
        />

        {/* cover image */}
        <Image
          src="/images/img.jpg"
          alt="dashboard"
          layout="intrinsic"
          width={1080}
          height={600}
          className="rounded-lg object-cover"
        />

        <div className="w-2/3">
          {/* description + tech stack*/}
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <Heading
                variant="h3"
                title={project?.attributes?.description}
                className="my-10"
              />
            </div>

            <div className="flex flex-row flex-wrap justify-start items-start">
              {project?.attributes?.techStack.map((tech, index) => {
                return (
                  <BodyText
                    key={index}
                    className="mr-4 !text-sm !text-left text-slate-700"
                  >
                    {tech}
                  </BodyText>
                );
              })}
            </div>
          </div>

          {/* approach */}
          <div className="my-20 flex flex-col justify-center items-center w-full">
            <ReactMarkdown
              children={project?.attributes?.approach}
              className="prose"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedWorkPage;
