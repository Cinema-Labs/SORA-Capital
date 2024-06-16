import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '../contexts/AuthContext'

const inter = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sora Capital",
  description: "Private Equity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
