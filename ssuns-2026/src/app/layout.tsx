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
  metadataBase: new URL("https://www.ssuns.org"),
  openGraph: {
    title: siteMeta.title,
    description: siteMeta.description,
    url: "https://www.ssuns.org",
    siteName: "SSUNS 2026",
    locale: siteMeta.locale,
    type: "website",
    images: [
      {
        url: siteMeta.ogImage,
        width: 1920,
        height: 1080,
        alt: "Delegates entering plenary at SSUNS 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
  icons: {
    icon: [{ url: "/logos/ssuns-dove-main-navy.png", type: "image/png" }],
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
