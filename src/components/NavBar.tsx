import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import koi from "../../public/koi-logo.png";

export const NavBar = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();
  if (!userLoaded) return <div />;
  return (
    <nav className="bg-[#1a34d3]">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center self-center">
          <Image
            src={koi}
            className="mr-3 h-8"
            alt="Logo"
            width={32}
            height={32}
            sizes="100vw"
          />
          <span className="self-center whitespace-nowrap text-2xl font-semibold">
            Koi
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="mt-4 flex flex-col border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li className="self-center">
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 md:p-0"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {isSignedIn && (
              <>
                <li className="self-center">
                  <Link
                    href="/sell-an-item"
                    className="block py-2 pl-3 pr-4 md:p-0"
                    aria-current="page"
                  >
                    Sell
                  </Link>
                </li>
              </>
            )}
            {!isSignedIn && (
              <>
                <li className="self-center">
                  <SignInButton>
                    <span className="block cursor-pointer py-2 pl-3 pr-4 md:p-0">
                      Sign in
                    </span>
                  </SignInButton>
                </li>
              </>
            )}
            <li>
              <UserButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
