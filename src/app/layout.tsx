import type { Metadata } from "next";
// import localFont from "next/font/local";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
config.autoAddCss = false;

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
//   display: "swap",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Linkify - Social Media",
  description:
    "Linkify Social Media is a modern social networking platform that allows users to connect, share, and interact with content in a dynamic and user-friendly environment. Built using the MERN stack (MongoDB, Express, React, Node.js), Linkify offers a range of features including real-time messaging, user profiles, post sharing, and notifications. Whether you're following friends, sharing your thoughts, or engaging with content, Linkify brings users together in an intuitive and secure space.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-black min-h-screen"
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
