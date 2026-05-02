import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CompetitorWatch — Get alerts when competitors ship new features",
  description: "Monitor competitor websites and changelogs. Get instant email and Slack alerts when competitors launch new features. Built for startup founders and product managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="81c01032-4ee9-4c5c-9e25-32515c953029"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
