import { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ContactInfo } from "@/components/contact/contact-info";
import { SocialLinks } from "@/components/contact/social-links";
import { ContactForm } from "@/components/contact/contact-form";
import { AvailabilityInfo } from "@/components/contact/availability-info";

export const metadata: Metadata = {
  title: "Contact | Ogedi Favour Uchibeke",
  description:
    "Get in touch with Ogedi Favour Uchibeke for opportunities, collaborations, or inquiries.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-heading">
              Get in touch
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              I&apos;m always open to discussing new opportunities, projects, or
              partnerships. Let&apos;s build something great together.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div>
              <ContactInfo />
              <div className="mt-8">
                <SocialLinks />
              </div>
              <AvailabilityInfo />
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
