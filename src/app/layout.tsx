import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Cal_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const calSans = Cal_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ogedi Favour Uchibeke | Senior Full-Stack Engineer",
    template: "%s | Ogedi Favour Uchibeke",
  },
  description:
    "Senior Full-Stack Engineer specializing in scalable distributed systems, cloud-native architectures, AI/LLM integration, and high-performance APIs. 5+ years building systems that power millions of transactions.",
  keywords: [
    "Senior Full-Stack Engineer",
    "Distributed Systems",
    "Cloud Architecture",
    "Node.js",
    "TypeScript",
    "Kubernetes",
    "AWS",
    "Azure",
    "AI Integration",
    "LLM",
    "API Design",
    "System Optimization",
  ],
  authors: [{ name: "Ogedi Favour Uchibeke" }],
  creator: "Ogedi Favour Uchibeke",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ogedi-dev.vercel.app",
    title: "Ogedi Favour Uchibeke | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in scalable distributed systems, cloud-native architectures, AI/LLM integration, and high-performance APIs.",
    siteName: "Ogedi Favour Uchibeke",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ogedi Favour Uchibeke | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer specializing in scalable distributed systems, cloud-native architectures, and AI/LLM integration.",
    creator: "@Ogedi_01",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${calSans.variable}`}
    >
      <body className="antialiased font-body bg-background text-foreground min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
