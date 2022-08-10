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
          variant="h1"
          title={project?.attributes?.headline}
          className="mb-10 w-2/3 text-center"
        />

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-10 mt-20">
            <div className="col-span-2">
              <Heading
                variant="h2"
                title={project?.attributes?.description}
                capitalize={false}
              />
            </div>

            <div>
              <Heading
                variant="h4"
                title="tech stack"
                className="mb-2 !text-sm font-bold opacity-80"
              />
              <div className="flex flex-row flex-wrap justify-start items-center">
                {project?.attributes?.techStack.map((tech, index) => {
                  return (
                    <BodyText
                      key={index}
                      className="mr-4 !text-left text-slate-700"
                    >
                      {tech}
                    </BodyText>
                  );
                })}
              </div>
            </div>
          </div>

          {/* approach */}
          <div className="my-20 flex flex-col justify-center items-center w-full">
            <ReactMarkdown
              children={project?.attributes?.approach}
              className="prose prose-slate prose-headings:text-slate-700 prose-h3:text-2xl text-slate-700"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedWorkPage;
