import LogoIcon from "@/components/common/icons/logo";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  height?: number;
  width?: number;
}

const Logo = ({ height, width }: LogoProps) => {
  return (
    <Link
      className="flex items-center gap-3 text-xl font-bold tracking-wide"
      href="/"
    >
      <span className="sr-only">Home</span>
      <span className="inline-block h-6 w-6">
        <LogoIcon height="25" width="25" />
      </span>
      <Image
        src="/logo.svg"
        alt="Drawit Logo"
        height={height || 100}
        width={width || 90}
      />
    </Link>
  );
};

export default Logo;
