import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Fira_Code } from "next/font/google";
import { Toaster } from "sonner";
import EasterEggs from "@/components/easter-eggs";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const fontMono = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Engineering Leader`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Engineering Leader Dubai",
    "Engineering Manager UAE",
    "Software Architect Dubai",
    "Digital Banking Engineering",
    "Mobile Architect UAE",
    "Swift Expert UAE",
    "Engineering Leadership",
    "Digital Wealth",
    "AI Engineering",
    "Technical Leadership",
    "Software Architecture",
    "Mobile Banking",
    "Digital Banking",
    "FinTech Engineering"
  ],
  openGraph: {
    title: `${DATA.name} | Engineering Leader`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: `${DATA.name} | Engineering Leader`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: DATA.name,
              url: DATA.url,
              image: `${DATA.url}${DATA.avatarUrl}`,
              sameAs: [
                DATA.contact.social.LinkedIn.url,
                DATA.contact.social.GitHub.url,
                DATA.contact.social.X.url,
              ],
              jobTitle: "Engineering Leader",
              worksFor: {
                "@type": "Organization",
                name: "Emirates NBD"
              }
            })
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[300px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full opacity-50"
                squareSize={4}
                gridGap={6}
                color="#6B7280"
                maxOpacity={0.1}
                flickerChance={0.1}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <Link href="/" className="absolute top-6 left-6 z-50 transition-transform hover:scale-105">
              <img src="/logo-options/minimal-vs.svg" alt="Vineet Sansare Logo" className="w-12 h-12 text-foreground" />
            </Link>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
            <EasterEggs />
            <Toaster position="bottom-center" />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
