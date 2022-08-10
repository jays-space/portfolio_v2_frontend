import Head from "next/head";
import Link from "next/link";
import React from "react";

// COMPONENTS
import { PageSection } from "../components/PageSection";
import { Heading } from "../components/Typography/Heading";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Not Found | Jay&apos;s Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen -my-20 lg:-mt-48 -mb-16 flex flex-col justify-center items-center">
        <Heading
          title="Oops! Page does not exist...yet!"
          className="text-center"
        />

        <Link href={"/"}>
          <a className="text-white bg-red-500 font-bold rounded my-4 px-3 py-2">
            Back
          </a>
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;
