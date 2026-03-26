import type { Metadata } from "next";
import { chivo, marketFresh, petitFormal } from "@/app/fonts";
import { SiteContentProvider } from "@/components/providers/SiteContentProvider";
import { AppPreferencesProvider } from "@/components/providers/AppPreferencesProvider";
import { SiteChrome } from "@/components/SiteChrome";
import { siteMeta } from "@/content/en/site";
import { getAllContentBundles } from "@/lib/contentSource";
import "./globals.css";

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  icons: {
    icon: "/logos/ssuns-dove-main-navy.png",
    shortcut: "/logos/ssuns-dove-main-navy.png",
    apple: "/logos/ssuns-dove-main-navy.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const bundles = await getAllContentBundles();

  return (
    <html lang="en">
      <body className={`${chivo.variable} ${marketFresh.variable} ${petitFormal.variable} ui-copy antialiased`}>
        <SiteContentProvider bundles={bundles}>
          <AppPreferencesProvider>
            <SiteChrome>{children}</SiteChrome>
          </AppPreferencesProvider>
        </SiteContentProvider>
      </body>
    </html>
  );
}
