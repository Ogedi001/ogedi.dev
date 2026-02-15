import { Container } from "@/components/layout/container";
import { siteConfig } from "@/configs/config";

export function AboutIntro() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-heading">
            About me
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {siteConfig.aboutMe.intro}
          </p>
        </div>
      </Container>
    </section>
  );
}
