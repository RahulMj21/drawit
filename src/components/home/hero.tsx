import { LinkButton } from "@/components/ui/button";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-secondary-foreground/80 font-extrabold sm:text-5xl">
            Diagrams made simple{" "}
            <strong className="mt-2 font-extrabold text-brand sm:block">
              Like never before.
            </strong>
          </h1>

          <p className="mt-4 sm:text-lg text-muted-foreground">
            Add diagrams, mindmaps and mental models along with documentation
            with ease.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LinkButton className="px-12 py-3 h-auto" href="/dashboard">
              Get Started
            </LinkButton>

            <LinkButton
              variant="outline"
              className="px-12 py-3 h-auto"
              href="/dashboard"
            >
              Learn More
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
