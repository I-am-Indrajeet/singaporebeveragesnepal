import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

import "@/styles/globals.css";
import { SchemaScript } from "@/components/shared/SchemaScript";
import { buildOrganizationSchema } from "@/lib/seo/metadata";
import { buildMetadata } from "@/lib/seo/metadata";
import { cn } from "@/lib/utils/cn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Premium Beverages",
  description:
    "Singapore Beverages crafts premium soft drinks and mixers for the Nepal market.",
  path: "/",
  keywords: [
    "singapore beverages nepal",
    "soft drinks nepal",
    "premium beverages nepal",
  ],
});

import { HeroThemeProvider } from "@/components/hero/HeroThemeContext";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteLoader } from "@/components/shared/SiteLoader";
import { WhatsAppFloatingButton } from "@/components/shared/WhatsAppFloatingButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, playfairDisplay.variable, "scroll-smooth")}
    >
      <body className="bg-background font-sans text-foreground antialiased relative">
        <SchemaScript schema={buildOrganizationSchema()} />
        <SiteLoader />
        <HeroThemeProvider>
          <SiteHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <SiteFooter />
          <WhatsAppFloatingButton />
        </HeroThemeProvider>
      </body>
    </html>
  );
}
