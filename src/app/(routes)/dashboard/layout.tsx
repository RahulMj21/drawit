"use client";

import "@/app/globals.css";
import useCheckTeam from "@/hooks/useCheckTeam";
import Sidebar from "./_components/sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useCheckTeam();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex-1 bg-white">{children}</div>
    </div>
  );
}
