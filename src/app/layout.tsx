import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ConvexClientProvider from "@/lib/ConvexClientProvider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

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
      <body className={cn("bg-background", inter.className)}>
        <ConvexClientProvider>{children}</ConvexClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
