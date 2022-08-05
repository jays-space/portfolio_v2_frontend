import { ReactNode } from "react";
import { BodyText } from "../Typography/BodyText";
import { Heading } from "../Typography/Heading";

// COMPONENTS
import { NextSectionIcon } from "./NextSectionIcon";

interface IPageSection {
  title: string;
  variant?: "hero" | "default";
  cols?: boolean;
  children: ReactNode;
}

const PageSection = ({
  title,
  variant = "default",
  cols = false,
  children,
}: IPageSection) => {
  return (
    <section
      className={`${
        variant === "hero" && ""
      } min-h-screen flex flex-col justify-center items-center snap-start`}
    >
      {variant === "hero" && (
        <div className="mb-24 flex flex-col items-center">
          <Heading
            title="I build things for the web"
            className="mt-10 mb-10 text-center"
          />

          <BodyText className="w-2/3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            consectetur repudiandae, quae sunt quisquam aspernatur, inventore
            repellat tempora sequi non atque dolore, enim mollitia vero ducimus
            veritatis sit. Vitae, voluptate animi? Reprehenderit quidem cum ut
            necessitatibus libero illum assumenda placeat.
          </BodyText>
        </div>
      )}

      <Heading variant="h2" title={title} className="mb-6 text-center" />

      {children}

      {/* {variant === "hero" && <NextSectionIcon />} */}
    </section>
  );
};

export default PageSection;
