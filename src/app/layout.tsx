import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Marketing-OS AI | Seu Comando de Marketing",
  description: "Plataforma completa de tráfego, campanhas, criativos e SEO alimentada por IA.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-mesh min-h-screen text-foreground selection:bg-brand-primary/30 selection:text-brand-primary`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto px-8 py-10">
            <div className="max-w-6xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
