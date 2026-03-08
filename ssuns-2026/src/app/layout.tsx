import type { Metadata } from "next";
import { chivo, marketFresh, petitFormal } from "@/app/fonts";
import { AppPreferencesProvider } from "@/components/providers/AppPreferencesProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { siteMeta } from "@/content/en/site";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  icons: {
    icon: "/logos/ssuns-dove.png",
    shortcut: "/logos/ssuns-dove.png",
    apple: "/logos/ssuns-dove.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} ${marketFresh.variable} ${petitFormal.variable} antialiased`}>
        <AppPreferencesProvider>
          <SiteChrome>{children}</SiteChrome>
        </AppPreferencesProvider>
      </body>
    </html>
  );
}
