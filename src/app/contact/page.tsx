import { Container } from "@/components/layout/container";
import { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

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
              <h2 className="text-2xl font-semibold font-heading">
                Let&apos;s connect
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you have a project in mind, want to collaborate, or just
                want to say hi, I&apos;ll try my best to get back to you!
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href="mailto:ogedifavour2@gmail.com"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      ogedifavour2@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">Remote (Nigeria)</p>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      Available worldwide
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-4">Social links</h3>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/Ogedi001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-muted transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/ogedi-favour-uchibeke-553955152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-muted transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://x.com/Ogedi_01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg border hover:bg-muted transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-lg border bg-muted/30">
                <h3 className="font-medium mb-2">Current availability</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  I&apos;m currently available for:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Senior Full-Stack Engineering roles</li>
                  <li>• Staff Engineer positions</li>
                  <li>• Technical Lead opportunities</li>
                  <li>• Consulting projects</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border bg-card p-6 md:p-8">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-foreground/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  I typically respond within 24-48 hours.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
