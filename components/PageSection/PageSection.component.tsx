import { ReactNode } from "react";
import { BodyText } from "../Typography/BodyText";
import { Heading } from "../Typography/Heading";

// COMPONENTS
import { NextSectionIcon } from "./NextSectionIcon";

interface IPageSection {
  title: string;
  blurb?: string;
  variant?: "hero" | "default";
  cols?: boolean;
  children: ReactNode;
}

const PageSection = ({
  title,
  blurb = "",
  variant = "default",
  cols = false,
  children,
}: IPageSection) => {
  return (
    <section
      className={`${
        variant === "hero" && ""
      } min-h-screen flex flex-col justify-center items-center max-w-screen-xl self-center snap-start`}
    >
      {variant === "hero" && (
        <div className="mb-10 md:mb-24 flex flex-col items-center">
          <Heading
            title="I build things for the web"
            className="mt-10 mb-10 text-center"
          />

          {variant === "hero" && (
            <BodyText className="px-10 w-full md:w-2/3">{blurb}</BodyText>
          )}
        </div>
      )}

      <Heading variant="h2" title={title} className="mb-6 text-center" />

      {children}

      {/* {variant === "hero" && <NextSectionIcon />} */}
    </section>
  );
};

export default PageSection;
