import { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

// COMPONENTS
import { PageSection } from "../components/PageSection";
import { ProjectGrid } from "../components/ProjectGrid";
import { BodyText } from "../components/Typography/BodyText";
import { ContactLinks } from "../components/ContactLinks";

const Home: NextPage = () => {
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
      <PageSection variant="hero" title="notable work">
        <ProjectGrid />
      </PageSection>

      {/* notable works section */}
      <PageSection title="other projects">
        <ProjectGrid />
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

          <BodyText className="w-2/3 text-center mt-6 mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quas molestiae veritatis consectetur? Recusandae porro praesentium
            ut explicabo sit fugiat.
          </BodyText>

          <BodyText className="w-2/3 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consectetur nostrum itaque exercitationem repellat recusandae
            deserunt tempore ex vero ipsam, officiis non sit quae esse tempora
            assumenda iusto sequi ipsum nisi, pariatur iure aspernatur.
            Eligendi, officiis ex explicabo est dolores laudantium magnam
            tenetur esse deserunt pariatur. Obcaecati blanditiis sit ipsum
            voluptate cum temporibus, quam unde adipisci asperiores labore vero
            veritatis?
          </BodyText>
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

            <BodyText className="my-2">or</BodyText>

            <div
              className="cursor-pointer mb-2 px-2 py-1 font-bold border border-slate-500 rounded"
              onClick={copyToClipboard}
            >
              <BodyText className="!text-sm">copy email to clipboard</BodyText>
            </div>

            <span
              className={`px-2 py-1 bg-green-500 rounded transition-opacity duration-300 ${
                copied ? "opacity-100" : "opacity-0"
              }`}
            >
              <BodyText className={`text-xs text-center text-white`}>
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
