"use client";

import { 
  FileCode, 
  Plus, 
  Layout, 
  Palette, 
  Type, 
  MousePointer2,
  Sparkles,
  Search
} from "lucide-react";

const templates = [
  { name: "Página de Vendas Ebook", type: "Infoproduto", image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=400&h=300&auto=format&fit=crop" },
  { name: "Página de Captura (Lead)", type: "Marketing", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&h=300&auto=format&fit=crop" },
  { name: "Checkout Personalizado", type: "Vendas", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&h=300&auto=format&fit=crop" },
];

export default function LandingPagesPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-outfit font-bold">Páginas de <span className="text-gradient">Vendas</span></h1>
          <p className="text-muted-foreground">Crie landing pages de alta conversão otimizadas para SEO com um clique.</p>
        </div>
        <button className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-brand-primary/30 transition-all">
          <Plus className="w-5 h-5" /> Nova Página
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 space-y-4">
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <h3 className="font-outfit font-bold flex items-center gap-2">
              <Palette className="w-4 h-4 text-brand-secondary" /> Personalização
            </h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Paleta de Cores</span>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-primary cursor-pointer border border-white/20" />
                  <div className="w-6 h-6 rounded-full bg-brand-secondary cursor-pointer border border-white/20" />
                  <div className="w-6 h-6 rounded-full bg-brand-accent cursor-pointer border border-white/20" />
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-bold text-muted-foreground">Fontes AI</span>
                <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-xs">Modern / Minimalist</div>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl space-y-4">
             <div className="flex items-center gap-2 text-brand-accent">
                <Search className="w-4 h-4" />
                <span className="text-sm font-bold">SEO Optimizer</span>
             </div>
             <div className="space-y-2">
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full w-[85%] bg-brand-accent" />
                </div>
                <span className="text-[10px] text-muted-foreground">Health Score: 85%</span>
             </div>
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((tpl, idx) => (
              <div key={idx} className="glass-card rounded-2xl overflow-hidden group hover:border-brand-primary/40 transition-all cursor-pointer">
                <div className="aspect-video bg-white/5 relative overflow-hidden">
                  <img src={tpl.image} alt={tpl.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-black px-4 py-2 rounded-lg font-bold text-sm shadow-xl">Editar Demo</button>
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold text-brand-primary uppercase">{tpl.type}</span>
                  <h4 className="font-bold text-sm">{tpl.name}</h4>
                </div>
              </div>
            ))}
            <div className="border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 space-y-4 hover:border-brand-primary/20 transition-all cursor-pointer opacity-40 hover:opacity-100">
               <Sparkles className="w-10 h-10 text-brand-primary" />
               <p className="text-xs font-bold text-center">Gerar Template com IA Personalizada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
