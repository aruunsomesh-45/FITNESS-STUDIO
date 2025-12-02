import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ConsultationChatbot } from "@/components/ConsultationChatbot";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zokufitness.com'), // Update with your actual production URL
  title: "Zoku | Fitness Redefined",
  description: "Join the Zoku movement. Premium fitness for everyone.",
  icons: {
    icon: "/zoku-logo.jpg",
    apple: "/zoku-logo.jpg",
    shortcut: "/zoku-logo.jpg",
  },
  openGraph: {
    title: "Zoku | Fitness Redefined",
    description: "Join the Zoku movement. Premium fitness for everyone.",
    url: "https://zoku.fitness",
    siteName: "Zoku",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zoku Fitness",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoku | Fitness Redefined",
    description: "Join the Zoku movement. Premium fitness for everyone.",
    images: ["/og-image.jpg"],
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
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <ConsultationChatbot />
      </body>
    </html>
  );
}
