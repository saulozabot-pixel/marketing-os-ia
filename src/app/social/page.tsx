"use client";

import { Share2, Instagram, Twitter, Facebook, Plus, Grid } from "lucide-react";

export default function SocialPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-4xl font-outfit font-bold">Redes <span className="text-gradient">Sociais</span></h1>
          <p className="text-muted-foreground">Planeje e gere conteúdo orgânico para todas as suas redes.</p>
        </div>
        <button className="bg-brand-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-brand-primary/30 transition-all">
          <Plus className="w-5 h-5" /> Novo Post
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 glass-card p-8 rounded-3xl min-h-[400px] flex flex-col">
           <div className="flex items-center justify-between mb-8">
              <h3 className="font-outfit font-bold text-xl flex items-center gap-2">
                 <Grid className="w-5 h-5 text-brand-primary" /> Visualização do Feed
              </h3>
              <div className="flex gap-2">
                 <div className="p-2 bg-pink-500/10 rounded-lg"><Instagram className="w-4 h-4 text-pink-500" /></div>
                 <div className="p-2 bg-blue-500/10 rounded-lg opacity-40"><Twitter className="w-4 h-4 text-blue-500" /></div>
                  <div className="p-2 bg-blue-600/10 rounded-lg opacity-40"><Facebook className="w-4 h-4 text-blue-600" /></div>
              </div>
           </div>
           
           <div className="flex-1 grid grid-cols-3 gap-2 opacity-20">
              {[...Array(6)].map((_, i) => (
                 <div key={i} className="aspect-square bg-white/5 rounded-lg border border-white/5" />
              ))}
           </div>
           
           <div className="mt-8 text-center text-muted-foreground text-sm italic">
              Seu feed do Instagram aparecerá aqui após a integração.
           </div>
        </div>

        <div className="space-y-6">
           <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-brand-primary/10 to-transparent">
              <h4 className="font-bold mb-2">IA Content Suggest</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                 Com base no seu perfil, a IA recomenda postar sobre **"Estratégias de Tráfego Pago"** hoje para maximizar o engajamento.
              </p>
           </div>
           
           <div className="glass-card p-6 rounded-2xl space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Contas Conectadas</h4>
              <div className="space-y-2">
                 <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-2">
                       <Instagram className="w-4 h-4 text-pink-500" />
                       <span className="text-sm">@seu_perfil</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-2 py-0.5 rounded-full font-bold">Ativo</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
