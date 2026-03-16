"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import { 
  PenTool, 
  Youtube, 
  Share2, 
  Sparkles, 
  Copy, 
  Download, 
  RefreshCw,
  Send,
  Loader2
} from "lucide-react";
import { cn } from "@/lib/utils";

const templates = [
  { id: "ads", label: "Copy de Anúncios", icon: PenTool, color: "text-purple-400", bg: "bg-purple-400/10" },
  { id: "youtube", label: "Roteiros YouTube", icon: Youtube, color: "text-red-400", bg: "bg-red-400/10" },
  { id: "social", label: "Redes Sociais", icon: Share2, color: "text-pink-400", bg: "bg-pink-400/10" },
];

export default function ContentPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("ads");
  const { messages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
    api: "/api/chat",
    body: { template: selectedTemplate },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, show a toast here
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-2">
        <h1 className="text-4xl font-outfit font-bold">Criativos & <span className="text-gradient">Copy Engine</span></h1>
        <p className="text-muted-foreground">Escolha um modelo e deixe a IA gerar conteúdo de alta conversão para você.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar: Templates & Params */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-4">
            <h3 className="font-outfit font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-primary" />
              Selecionar Modelo
            </h3>
            <div className="space-y-2">
              {templates.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setSelectedTemplate(t.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all border",
                    selectedTemplate === t.id 
                      ? "bg-white/5 border-brand-primary/50 text-white shadow-lg shadow-brand-primary/10" 
                      : "border-transparent text-muted-foreground hover:bg-white/5 hover:text-white"
                  )}
                >
                  <div className={cn("p-2 rounded-lg", t.bg)}>
                    <t.icon className={cn("w-4 h-4", t.color)} />
                  </div>
                  <span className="font-medium">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-outfit font-bold mb-4">Prompt Rápido</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <textarea
                value={input}
                onChange={handleInputChange}
                placeholder="Ex: Crie um anúncio para um curso de investimento para iniciantes que foca em liberdade financeira..."
                className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all resize-none"
              />
              <button 
                type="submit"
                disabled={isLoading || !input}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary py-3 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-lg hover:shadow-brand-primary/30 transition-all"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                Gerar Conteúdo
              </button>
            </form>
          </div>
        </div>

        {/* Output Area */}
        <div className="lg:col-span-8">
          <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <span className="text-sm font-medium text-muted-foreground">Resultado da Geração</span>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => reload()} 
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors text-muted-foreground"
                  title="Regerar"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-muted-foreground" title="Download">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-8 overflow-y-auto min-h-[500px] prose prose-invert max-w-none">
              {messages.length === 0 && !isLoading && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                  <Sparkles className="w-16 h-16" />
                  <p>Aguardando seu comando para criar algo incrível...</p>
                </div>
              )}
              
              {messages.filter(m => m.role === 'assistant').map((m, idx) => (
                <div key={idx} className="relative group animate-in fade-in duration-500">
                  <div className="absolute -right-2 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => copyToClipboard(m.content)}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" /> Copiar
                    </button>
                  </div>
                  <div className="whitespace-pre-wrap text-lg leading-relaxed text-gray-200">
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-brand-primary animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm font-medium">A IA está pensando...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
