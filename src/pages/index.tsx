import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Koi</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          Main
        </div>
      </main>
    </>
  );
};

export default Home;
