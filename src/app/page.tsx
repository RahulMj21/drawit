import { Header } from "@/components/navigation/header";
import Hero from "@/components/home/hero";
import GradientBg from "@/components/home/gradientBg";

export default async function Home() {
  return (
    <div>
      <GradientBg />
      <Header />
      <Hero />
    </div>
  );
}
