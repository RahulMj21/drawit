import { Button } from "@/components/ui/button";
import CTA from "@/components/navigation/cta";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { text: "About", path: "/" },
  { text: "Careers", path: "/" },
  { text: "History", path: "/" },
  { text: "Services", path: "/" },
  { text: "Projects", path: "/" },
  { text: "Blog", path: "/" },
];

export const Header = () => {
  return (
    <header>
      <div className="mx-auto flex justify-between h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="block text-xl font-bold tracking-wide" href="/">
          <span className="sr-only">Home</span>
          <Image src="/logo.svg" alt="Drawit Logo" height={100} width={90} />
        </Link>

        <div className="flex items-center">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map(({ text, path }) => (
                <li key={text}>
                  <Link
                    className="text-gray-600/80 transition hover:duration-500 hover:text-gray-600"
                    href={path}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <CTA />

          <Button className="transition md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};
