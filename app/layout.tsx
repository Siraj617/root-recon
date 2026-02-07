import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "RootRecon | Offensive Security",
  description: "Advanced penetration testing and offensive security services.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "RootRecon | Offensive Security",
    description: "Advanced penetration testing and offensive security services.",
    url: "https://rootrecon.vercel.app",
    siteName: "RootRecon",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "RootRecon Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "RootRecon | Offensive Security",
    description: "Advanced penetration testing and offensive security services.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceMono.variable} antialiased bg-background text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
