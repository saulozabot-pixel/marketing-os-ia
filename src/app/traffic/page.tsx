"use client";

import { BarChart3, TrendingUp, Filter, MousePointer2, PieChart, Target } from "lucide-react";

export default function TrafficPage() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-2">
        <h1 className="text-4xl font-outfit font-bold">Tráfego & <span className="text-gradient">Anúncios</span></h1>
        <p className="text-muted-foreground">Monitore o desempenho das suas campanhas e otimize seu ROI.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 text-blue-400">
            <Target className="w-8 h-8" />
            <span className="text-2xl font-bold text-white">12.4k</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Impressões</span>
         </div>
         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 text-emerald-400">
            <MousePointer2 className="w-8 h-8" />
            <span className="text-2xl font-bold text-white">842</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Cliques</span>
         </div>
         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 text-purple-400">
            <TrendingUp className="w-8 h-8" />
            <span className="text-2xl font-bold text-white">6.8%</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">CTR Médio</span>
         </div>
         <div className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center space-y-2 text-brand-accent">
            <PieChart className="w-8 h-8" />
            <span className="text-2xl font-bold text-white">R$ 1.2k</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Gasto Total</span>
         </div>
      </div>

      <div className="glass-card p-8 rounded-3xl h-80 flex items-center justify-center border-2 border-dashed border-white/5 bg-white/[0.02]">
          <div className="text-center space-y-4">
            <BarChart3 className="w-16 h-16 text-muted-foreground mx-auto opacity-10" />
            <div className="space-y-1">
               <p className="text-lg font-bold">Conecte sua conta de anúncios</p>
               <p className="text-sm text-muted-foreground">Suporte para Meta Ads, Google Ads e TikTok Ads em breve.</p>
            </div>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl text-sm font-bold transition-all">Integrar Agora</button>
          </div>
      </div>
    </div>
  );
}
