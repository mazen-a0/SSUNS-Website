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
    icon: "/logos/ssuns-dove.png",
    shortcut: "/logos/ssuns-dove.png",
    apple: "/logos/ssuns-dove.png",
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
      <body className={`${chivo.variable} ${marketFresh.variable} ${petitFormal.variable} antialiased`}>
        <SiteContentProvider bundles={bundles}>
          <AppPreferencesProvider>
            <SiteChrome>{children}</SiteChrome>
          </AppPreferencesProvider>
        </SiteContentProvider>
      </body>
    </html>
  );
}
