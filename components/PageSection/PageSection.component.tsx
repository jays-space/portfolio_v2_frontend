import React, { ReactNode } from "react";

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
    <section className="min-h-screen">
      {variant === "hero" && (
        <div>
          <h1 className="text-4xl text-center mb-12">
            I build things for the web.
          </h1>
        </div>
      )}
      {variant === "default" && <h2>{title}</h2>}
      {children}

      <span
        className={`flex h-12 w-12 justify-center items-center mx-auto z-40 transition-opacity ease-in-out duration-700 cursor-pointer `}
        // onClick={() =>
        //   contentRef.current.scrollIntoView({
        //     behavior: "smooth",
        //     block: "start",
        //   })
        // }
      >
        <svg
          className="animate-bounce w-6 h-6 text-black"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </span>
    </section>
  );
};

export default PageSection;
