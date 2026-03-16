"use client";

import { useState } from "react";
import { 
  Search, 
  TrendingUp, 
  Users, 
  Target, 
  ArrowRight,
  BarChart2,
  Globe
} from "lucide-react";
import { cn } from "@/lib/utils";

const researchCards = [
  { title: "Análise de Nicho", description: "Identifique demandas reprimidas e oportunidades de lucro.", icon: Target, color: "text-blue-400" },
  { title: "Tendências Atuais", description: "Veja o que está viralizando no Google e Redes Sociais.", icon: TrendingUp, color: "text-emerald-400" },
  { title: "Avatar do Cliente", description: "Mapeie dores, desejos e objeções do seu público.", icon: Users, color: "text-orange-400" },
];

export default function ResearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-2">
        <h1 className="text-4xl font-outfit font-bold">Inteligência de <span className="text-gradient">Mercado</span></h1>
        <p className="text-muted-foreground">Analise o mercado e tome decisões baseadas em dados reais antes de investir.</p>
      </header>

      <div className="glass-card p-1 items-center flex rounded-2xl border-white/10 overflow-hidden max-w-3xl">
        <div className="pl-4 text-muted-foreground">
          <Globe className="w-5 h-5" />
        </div>
        <input 
          type="text" 
          placeholder="Digite seu nicho ou produto (ex: Yoga para idosos, SaaS de gestão...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-4 text-white"
        />
        <button className="bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-3 rounded-xl m-1 transition-all flex items-center gap-2 font-bold">
          Pesquisar <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {researchCards.map((card, idx) => (
          <div key={idx} className="glass-card p-6 rounded-2xl group hover:border-brand-primary/30 transition-all cursor-pointer">
            <div className={cn("p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform", card.color)}>
              <card.icon className="w-6 h-6" />
            </div>
            <h3 className="font-outfit font-bold text-lg mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 rounded-3xl space-y-6">
        <div className="flex items-center gap-3">
          <BarChart2 className="w-6 h-6 text-brand-primary" />
          <h2 className="text-2xl font-outfit font-bold">Insights Estratégicos</h2>
        </div>
        
        <div className="h-64 flex items-center justify-center border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02]">
          <div className="text-center space-y-2">
            <Search className="w-12 h-12 text-muted-foreground mx-auto opacity-20" />
            <p className="text-muted-foreground italic">Faça uma pesquisa para gerar insights...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
