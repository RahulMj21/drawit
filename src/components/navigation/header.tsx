import { LinkButton } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import Logo from "@/components/navigation/logo";
import { ModeToggle } from "@/components/ui/modeToggle";

const NAV_LINKS = [
  { text: "About", path: "/" },
  { text: "History", path: "/" },
  { text: "Services", path: "/" },
  { text: "Projects", path: "/" },
  { text: "Blog", path: "/" },
];

export const Header = async () => {
  const { isAuthenticated } = getKindeServerSession();

  return (
    <header>
      <div className="mx-auto flex justify-between h-20 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="flex items-center">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {NAV_LINKS.map(({ text, path }) => (
                <li key={text}>
                  <Link
                    className="text-muted-foreground transition hover:duration-500 hover:text-muted-foreground/8"
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
          <ModeToggle />
          {(await isAuthenticated()) ? (
            <LinkButton href="/dashboard">Dashboard</LinkButton>
          ) : (
            <LoginLink>
              <Button>Log In</Button>
            </LoginLink>
          )}
        </div>
      </div>
    </header>
  );
};
