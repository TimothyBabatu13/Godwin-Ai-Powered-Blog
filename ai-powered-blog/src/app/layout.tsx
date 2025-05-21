import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";
import TransitionProvider from "@/context/transition-provider";
import { CREATOR, DESCRIPTION, TITLE, WEBSITE_URL } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    siteId: '',
    creator: CREATOR,
    images: ''
  },
  openGraph : {
    title: TITLE,
    description: DESCRIPTION,
    url: WEBSITE_URL,
    siteName: TITLE,
    locale: 'en_US',
    type: 'website',
    images: ''
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
          <TransitionProvider>
            <Navbar />
            {children}
            <Footer />
          </TransitionProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
