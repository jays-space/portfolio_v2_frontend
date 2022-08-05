import type { NextPage } from "next";
import Image from "next/image";

// COMPONENTS
import { PageSection } from "../components/PageSection";
import { ProjectGrid } from "../components/ProjectGrid";
import { BodyText } from "../components/Typography/BodyText";

const Home: NextPage = () => {
  return (
    <main className="h-full flex flex-col px-96 snap-proximity snap-y">
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
            width={360}
            height={360}
            className="rounded object-cover"
          />

          <p className="w-2/3 text-center mt-6 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            quas molestiae veritatis consectetur? Recusandae porro praesentium
            ut explicabo sit fugiat.
          </p>

          <p className="w-2/3 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consectetur nostrum itaque exercitationem repellat recusandae
            deserunt tempore ex vero ipsam, officiis non sit quae esse tempora
            assumenda iusto sequi ipsum nisi, pariatur iure aspernatur.
            Eligendi, officiis ex explicabo est dolores laudantium magnam
            tenetur esse deserunt pariatur. Obcaecati blanditiis sit ipsum
            voluptate cum temporibus, quam unde adipisci asperiores labore vero
            veritatis?
          </p>
        </div>
      </PageSection>

      {/* contact section */}
      <PageSection title="contact">
        <div className="flex flex-col justify-center items-center">
          <BodyText className="mt-6 mb-4">
            Got a question, a proposal, or just want to say hello?
            <br /> Give me a shout.
          </BodyText>

          
        </div>
      </PageSection>
    </main>
  );
};

export default Home;
