import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { ContactLinks } from "../components/ContactLinks";

// COMPONENTS
import { PageSection } from "../components/PageSection";
import { ProjectGrid } from "../components/ProjectGrid";
import { BodyText } from "../components/Typography/BodyText";

const Home: NextPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendEmail = (event) => {
    event.preventDefault();
    alert({
      name,
      email,
      message,
    });
  };
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
          <BodyText className="mb-10">
            My inbox is always open. Whether you have a question or just want to
            say hi, give me a shout.
          </BodyText>

          <div>
            <form>
              <label htmlFor="name">name</label>
              <input
                type={"text"}
                id='name'
                name="name"
                value={name}
                onChange={() => setName((v) => v)}
                required
                className="border border-black"
              />
              <input
                type={"email"}
                name="email"
                value={email}
                onChange={() => setEmail((v) => v)}
                required
              />
              <textarea
                rows={5}
                name="message"
                value={message}
                onChange={() => setMessage((v) => v)}
                required
              />
              <input type={"submit"} onClick={sendEmail} />
            </form>
          </div>
        </div>
      </PageSection>
    </main>
  );
};

export default Home;
