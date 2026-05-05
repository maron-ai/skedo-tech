import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ImigongoDivider } from "@/components/ImigongoDivider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "skedo.tech — Native AI Software Development",
  description:
    "A studio for companies that need the thing built right the first time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <nav className="flex items-center justify-between px-8 py-5">
          <Link href="/" className="text-lg font-bold tracking-tight">
            skedo.tech
          </Link>
          <div className="flex gap-8 text-sm text-[var(--color-muted)]">
            <Link href="/work" className="hover:text-white transition-colors">
              work
            </Link>
            <Link
              href="/#contact"
              className="hover:text-white transition-colors"
            >
              contact
            </Link>
          </div>
        </nav>
        <ImigongoDivider />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
