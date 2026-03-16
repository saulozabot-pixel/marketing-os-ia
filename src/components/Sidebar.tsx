"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Search, 
  PenTool, 
  FileCode, 
  BarChart3, 
  Settings,
  Zap,
  Youtube,
  Share2
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: Search, label: "Pesquisa de Mercado", href: "/research" },
  { icon: PenTool, label: "Criativos & Copy", href: "/content" },
  { icon: Youtube, label: "Roteiros YouTube", href: "/youtube" },
  { icon: FileCode, label: "Páginas de Vendas", href: "/landing-pages" },
  { icon: BarChart3, label: "Tráfego & Anúncios", href: "/traffic" },
  { icon: Share2, label: "Redes Sociais", href: "/social" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 glass border-r border-white/5 h-screen sticky top-0 flex flex-col p-4 z-50">
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
          <Zap className="text-white w-6 h-6 fill-white" />
        </div>
        <h1 className="font-outfit font-bold text-xl tracking-tight text-gradient">
          Marketing-OS
        </h1>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group",
              pathname === item.href 
                ? "bg-brand-primary/10 text-brand-primary" 
                : "text-muted-foreground hover:bg-white/5 hover:text-white"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5 transition-colors",
              pathname === item.href ? "text-brand-primary" : "group-hover:text-white"
            )} />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-6 border-t border-white/5">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-muted-foreground hover:bg-white/5 hover:text-white transition-all"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium">Configurações</span>
        </Link>
      </div>
    </aside>
  );
}
