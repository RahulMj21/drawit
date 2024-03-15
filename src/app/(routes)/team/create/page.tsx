import CreateTeamForm from "@/components/forms/createTeamForm";
import Logo from "@/components/navigation/logo";
import LogoutButton from "@/components/navigation/logoutButton";

const Create = () => {
  return (
    <div className="container">
      <header className="flex items-center justify-between h-20">
        <Logo />
        <LogoutButton />
      </header>
      <main className="flex flex-col gap-6 py-16 text-center">
        <h1 className="text-3xl text-gray-700 font-extrabold sm:text-5xl">
          What should we call
          <br /> your team?
        </h1>
        <h2 className="text-gray-600/80">
          You can change it anytime from the settings.
        </h2>
        <CreateTeamForm />
      </main>
    </div>
  );
};

export default Create;
