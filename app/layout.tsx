import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";
import ClientProviders from "@/components/ClientProviders";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi-language chat",
  description: "SAAS Multi-language chat app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en" suppressHydrationWarning={true}>
        <body className="flex min-h-screen flex-col">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClientProviders>
  );
}
