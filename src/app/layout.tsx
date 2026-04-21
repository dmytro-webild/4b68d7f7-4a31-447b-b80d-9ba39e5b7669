import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Source_Sans_3 } from "next/font/google";



export const metadata: Metadata = {
  title: 'Mugshot Cafe | Mombasa’s Addictive Coffee Ritual',
  description: 'Experience Mombasa’s favorite coffee ritual. Spanish lattes, cozy vibes, and brunch worth getting hooked on. Visit us in Nyali today.',
  openGraph: {
    "title": "Mugshot Cafe | Mombasa’s Addictive Coffee Ritual",
    "description": "Experience Mombasa’s favorite coffee ritual. Visit us in Nyali.",
    "siteName": "Mugshot Cafe"
  },
};

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${sourceSans3.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
