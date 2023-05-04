import { type Listing } from "@prisma/client";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";

function Card({ listing }: { listing: Listing }) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-700 bg-[#272132] shadow">
      <Link href="/">
        <Image className="rounded-t-lg" src="" alt="" />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {listing.name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-200">{listing.description}</p>
        <Link
          href={`/listings/${listing.id}`}
          className="inline-flex items-center rounded-lg bg-[#e4ff1b] px-3 py-2 text-center text-sm font-medium text-[#131019] hover:bg-[#c9e209] focus:outline-none focus:ring-4"
        >
          View
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}

const Home: NextPage = () => {
  const listings = api.listings.getListings.useQuery();
  return (
    <>
      <Head>
        <title>Koi</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center">
        <h1 className="mt-3 text-2xl">Items for sale!</h1>
        <div className="container grid grid-cols-3 items-center justify-center gap-4 px-4 py-16">
          {listings.data?.map((listing) => (
            <Card key={listing.id} listing={listing} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
