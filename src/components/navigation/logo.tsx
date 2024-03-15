import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link className="block text-xl font-bold tracking-wide" href="/">
      <span className="sr-only">Home</span>
      <Image src="/logo.svg" alt="Drawit Logo" height={100} width={90} />
    </Link>
  );
};

export default Logo;
