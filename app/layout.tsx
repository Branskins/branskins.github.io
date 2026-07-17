import type { Metadata } from "next";
import "@portfolio/ui/styles.css";
import "./globals.css";
import { Footer } from "@portfolio/ui";
import { SiteNav } from "@/components/site-nav";

export const metadata: Metadata = {
  title: "YOUR_NAME_ — Portfolio",
  description: "Developer portfolio — projects, blog, and CV.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
