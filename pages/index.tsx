import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// API
import { fetchAPI } from "../lib/api";

// TYPES
import { WorksType, HeroType } from "../types/types";

// COMPONENTS
import { PageSection } from "../components/PageSection";
import { ProjectGrid } from "../components/ProjectGrid";
import { BodyText } from "../components/Typography/BodyText";

export const getStaticProps = async (context: any) => {
  const hero = await fetchAPI("/hero-blurb");
  const about = await fetchAPI("/about-me");
  const featuredWorks = await fetchAPI("/featured-works");
  const notableWorks = await fetchAPI("/works");

  // Pass the data to our page via props
  return {
    props: {
      about: about.data,
      hero: hero.data,
      featured: featuredWorks.data,
      otherWork: notableWorks.data,
    },
  };
};

interface IHome {
  hero: HeroType;
  about: {
    attributes: {
      opening: string;
      middle: string;
      end: string;
    };
  };
  featured: WorksType;
  otherWork: WorksType;
}

const Home = ({ hero, about, featured, otherWork }: IHome) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    navigator.clipboard.writeText("contact.jays.space@gmail.com");
    let email = await navigator.clipboard.readText();

    if (email === "contact.jays.space@gmail.com") {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  };

  return (
    <main className="h-full flex flex-col snap-proximity snap-y">
      {/* hero/featured works section */}
      <PageSection
        variant="hero"
        title="notable work"
        blurb={hero.attributes.blurb}
      >
        <ProjectGrid projects={featured} />
      </PageSection>

      {/* notable works section */}
      <PageSection title="other projects">
        <ProjectGrid variant="other" projects={otherWork} />
      </PageSection>

      {/* about section */}
      <PageSection title="about">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/img.jpg"
            alt="dashboard"
            layout="intrinsic"
            width={375}
            height={375}
            className="md:rounded object-cover"
          />
          <div className="w-2/3 mt-10">
            <BodyText>{about.attributes.opening}</BodyText>

            <BodyText className="my-6">{about.attributes.middle}</BodyText>

            {/* <BodyText>{about.attributes.end}</BodyText> */}
          </div>
        </div>
      </PageSection>

      {/* contact section */}
      <PageSection title="contact">
        <div className="flex flex-col justify-center items-center">
          <BodyText className="mb-10 w-2/3">
            My inbox is always open. Whether you have a question or just want to
            say hi, give me a shout.
          </BodyText>

          <div className="mt-5 flex flex-col justify-center items-center">
            <Link href="mailto:contact.jays.space@gmail.com">
              <a className="mx-2 py-2 px-4 text-white capitalize font-bold bg-red-500 rounded">
                shout out
              </a>
            </Link>

            <BodyText className="hidden lg:flex my-2">or</BodyText>

            <div
              className="hidden lg:flex cursor-pointer mb-2 px-2 py-1 font-bold border border-slate-500 rounded"
              onClick={copyToClipboard}
            >
              <BodyText className="!text-sm">copy email to clipboard</BodyText>
            </div>

            <span
              className={`px-2 py-1 bg-green-400 rounded transition-opacity duration-300 ${
                copied ? "opacity-100" : "opacity-0"
              }`}
            >
              <BodyText className={`text-xs text-center !text-white`}>
                Copied
              </BodyText>
            </span>
          </div>
        </div>
      </PageSection>
    </main>
  );
};

export default Home;
