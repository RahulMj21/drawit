import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ConvexClientProvider from "@/lib/ConvexClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Drawit",
  description: "Drawit - Docs and Diagrams made Easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
