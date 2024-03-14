"use client";
import "@/app/globals.css";
import useCheckTeam from "@/hooks/useCheckTeam";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading } = useCheckTeam();

  if (isLoading) return <div>Loading...</div>;

  return <div>{children}</div>;
}
