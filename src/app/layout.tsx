import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { ConsultationChatbot } from "@/components/ConsultationChatbot";
import { env } from "@/lib/env";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.site.url),
  title: "Zoku | Fitness Redefined",
  description: "Join the Zoku movement. Premium fitness for everyone.",
  icons: {
    icon: [
<<<<<<< HEAD
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.png",
=======
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/logo.png",
>>>>>>> e32c146c101c0cf96e47ce9471a9c296a67da570
  },
  openGraph: {
    title: "Zoku | Fitness Redefined",
    description: "Join the Zoku movement. Premium fitness for everyone.",
    url: "https://zokufitness.com",
    siteName: "Zoku",
    images: [
      {
        url: "/redefining-fitness.jpg",
        width: 1200,
        height: 630,
        alt: "Zoku Fitness - Redefining Fitness",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoku | Fitness Redefined",
    description: "Join the Zoku movement. Premium fitness for everyone.",
    images: ["/redefining-fitness.jpg"],
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
        suppressHydrationWarning
        className={`${inter.variable} ${oswald.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <ConsultationChatbot />
      </body>
    </html>
  );
}