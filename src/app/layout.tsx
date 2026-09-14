import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Hasset Pastry | Digital Menu", description: "Order your favorite pastry" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
