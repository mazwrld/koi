import { type Listing } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  listing: Listing;
}

function Card({ listing }: CardProps) {
  return (
    <div className="max-w-sm rounded-lg border border-gray-700 bg-[#272132] shadow">
      <Link href="/">
        <Image
          className="rounded-t-lg"
          src="https://nb.scene7.com/is/image/NB/m2002rsb_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880"
          alt="shoes"
        />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            {listing.name}
          </h5>
        </Link>
        <p className="mb-3 overflow-hidden font-normal leading-6 text-gray-200">
          {listing.description.length > 200
            ? listing.description.slice(0, 200) + "..."
            : listing.description}
        </p>
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

export default Card;
