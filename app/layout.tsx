import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Usman Maqbool — Senior Software Engineer",
  description:
    "Senior Software Engineer with 6+ years of experience specializing in backend development, DevOps, cloud infrastructure, and data engineering. Building distributed systems, cloud-native applications, and data platforms.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "DevOps",
    "Cloud Architecture",
    "Data Engineering",
    "Python",
    "AWS",
    "Microservices",
  ],
  authors: [{ name: "Usman Maqbool" }],
  openGraph: {
    title: "Usman Maqbool — Senior Software Engineer",
    description:
      "Building scalable systems, cloud infrastructure, and data platforms.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usman Maqbool — Senior Software Engineer",
    description:
      "Building scalable systems, cloud infrastructure, and data platforms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
