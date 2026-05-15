import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capital Case",
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
