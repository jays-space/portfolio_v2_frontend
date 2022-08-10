import React from "react";
import ReactMarkdown from "react-markdown";

interface IMainContent {
  content: string;
}

const MainContent = ({ content }: IMainContent) => {
  return (
    <div className="my-20 flex flex-col justify-center items-center w-full">
      <ReactMarkdown
        children={content}
        className="prose prose-slate prose-headings:text-slate-700 prose-h3:text-2xl text-slate-700"
      />
    </div>
  );
};

export default MainContent;
