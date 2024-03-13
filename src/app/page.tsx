import { Header } from "@/components/navigation/header";
import Hero from "@/components/home/hero";

export default async function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
    </div>
  );
}
