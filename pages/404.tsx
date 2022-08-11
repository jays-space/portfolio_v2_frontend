import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BodyText } from "../components/Typography/BodyText";

// COMPONENTS
import { Heading } from "../components/Typography/Heading";

const NotFoundPage = () => {
  return (
    <>
      <Head>
        <title>Not Found | Jay&apos;s Space</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen my-10 lg:-mt-40 md:-mb-16 flex flex-col justify-center items-center">
        <Heading title="This is no ordinary a 404 page" className="text-center !text-red-500" />
        <BodyText className="mb-5 font-bold">
          This is ... a dance off!
        </BodyText>

        <Image
          src="/giphy.gif"
          alt="dance away"
          height={400}
          width={400}
          className="md:rounded-lg"
        />

        <Link href={"/"}>
          <a className="text-white bg-red-500 font-bold rounded my-10 px-3 py-2 capitalize">
            ok ok, I give up! Please! No more!
          </a>
        </Link>
      </main>
    </>
  );
};

export default NotFoundPage;
