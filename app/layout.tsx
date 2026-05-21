import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CookieRevenue — Measure Revenue Lost to Cookie Consent",
  description: "Track conversion rate differences between users who accept vs reject cookies to quantify your GDPR compliance costs."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ade215e0-948b-4574-b483-657a6e9ff198"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
