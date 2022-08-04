import { ReactNode } from "react";
import { Heading } from "../Typography/Heading";

// COMPONENTS
import { NextSectionIcon } from "./NextSectionIcon";

interface IPageSection {
  title: string;
  variant?: "hero" | "default";
  children: ReactNode;
}

const PageSection = ({
  title,
  variant = "default",
  children,
}: IPageSection) => {
  return (
    <section
      className={`min-h-screen flex flex-col justify-center items-center snap-start ${
        variant === "hero" && '-mt-20'
      }`}
    >
      {variant === "hero" && (
        <Heading
          title="I build things for the web."
          className="mb-10 text-center"
        />
      )}

      {variant === "default" && (
        <Heading variant="h2" title={title} className="mb-6 text-center" />
      )}

      {children}

      {variant === "hero" && <NextSectionIcon />}
    </section>
  );
};

export default PageSection;
