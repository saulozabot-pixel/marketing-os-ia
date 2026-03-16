import { 
  Search, 
  PenTool, 
  FileCode, 
  BarChart3, 
  Youtube,
  Share2,
  Sparkles
} from "lucide-react";
import { DashboardCard } from "@/components/DashboardCard";

export default function Home() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <header className="space-y-2">
        <div className="flex items-center gap-2 text-brand-primary mb-2">
          <Sparkles className="w-5 h-5 fill-brand-primary" />
          <span className="font-outfit font-semibold uppercase tracking-wider text-xs">
            Bem-vindo ao Futuro do Marketing
          </span>
        </div>
        <h1 className="text-5xl font-outfit font-bold tracking-tight">
          O que vamos <span className="text-gradient">criar hoje?</span>
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Sua central de inteligência para decolar produtos, infoprodutos e canais no YouTube com o poder da IA.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard 
          title="Pesquisa de Mercado"
          description="Analise nichos lucrativos e espione a concorrência com inteligência artificial."
          icon={Search}
          color="bg-blue-500/20"
        />
        <DashboardCard 
          title="Criativos & Copy"
          description="Gere anúncios persuasivos e criativos que convertem em segundos."
          icon={PenTool}
          color="bg-purple-500/20"
        />
        <DashboardCard 
          title="Roteiros para YouTube"
          description="Crie roteiros virais e estratégias de conteúdo para crescer seu canal."
          icon={Youtube}
          color="bg-red-500/20"
        />
        <DashboardCard 
          title="Páginas de Vendas"
          description="Construa landing pages de alta conversão otimizadas para SEO."
          icon={FileCode}
          color="bg-emerald-500/20"
        />
        <DashboardCard 
          title="Tráfego & Anúncios"
          description="Estruture campanhas vencedoras e monitore seus pixels de rastreamento."
          icon={BarChart3}
          color="bg-orange-500/20"
        />
        <DashboardCard 
          title="Redes Sociais"
          description="Geração automatizada de conteúdo para escalonamento orgânico."
          icon={Share2}
          color="bg-pink-500/20"
        />
      </section>

      <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-brand-primary/20 transition-all duration-500" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-outfit font-bold">Inicie sua primeira campanha</h2>
            <p className="text-muted-foreground max-w-lg">
              Deixe que nossa IA "fodástica" analise seu produto e sugira a melhor estratégia de lançamento agora mesmo.
            </p>
            <button className="bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-3 rounded-xl font-bold text-white hover:shadow-lg hover:shadow-brand-primary/30 transition-all hover:-translate-y-1">
              Começar Agora
            </button>
          </div>
          <div className="w-full md:w-64 h-48 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center animate-float">
             <Sparkles className="w-16 h-16 text-brand-primary opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
