import CreateTeamForm from "@/components/forms/createTeamForm";
import GradientBg from "@/components/home/gradientBg";
import Logo from "@/components/navigation/logo";
import { ModeToggle } from "@/components/ui/modeToggle";

const Create = () => {
  return (
    <>
      <GradientBg />
      <div className="container">
        <header className="flex items-center justify-between h-20">
          <Logo />
          <ModeToggle />
        </header>
        <main className="flex flex-col gap-6 py-16 text-center">
          <h1 className="text-3xl text-secondary-foreground/80 font-extrabold sm:text-5xl">
            What should we call
            <br /> your team?
          </h1>
          <h2 className="text-muted-foreground">
            You can change it anytime from the settings.
          </h2>
          <CreateTeamForm />
        </main>
      </div>
    </>
  );
};

export default Create;
