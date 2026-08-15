import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vikram Sran | Offensive Security Portfolio",
  description:
    "Evidence-backed offensive security projects, sanitized assessment reports, technical research, and lab methodology from Vikram Sran.",
  openGraph: {
    title: "Vikram Sran | Offensive Security Portfolio",
    description:
      "Web application testing, network assessment, Active Directory fundamentals, security tooling, and professional reporting.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vikram Sran | Offensive Security Portfolio",
    description:
      "Evidence-backed offensive security projects, reports, and technical research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

