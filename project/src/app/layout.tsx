import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import Nav from "@/components/system/Nav";
import Footer from "@/components/system/Footer";
import { Chat } from "@/components/Chat";
import { siteSettings } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${siteSettings.name} - ${siteSettings.role}`,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.tagline,
  metadataBase: new URL("https://sreerambangaru.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: siteSettings.name,
    title: `${siteSettings.name} - ${siteSettings.role}`,
    description: siteSettings.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.name} - ${siteSettings.role}`,
    description: siteSettings.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${siteSettings.gaId}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${siteSettings.gaId}');
            `,
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Nav />
          <main id="main-content" tabIndex={-1}>
          {children}
          </main>
          <Footer />
          <Chat />
        </ThemeProvider>
      </body>
    </html>
  );
}
