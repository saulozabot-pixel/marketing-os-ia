"use client";

import { useState } from "react";
import { useChat } from "ai/react";
import { 
  Youtube, 
  Sparkles, 
  Copy, 
  RefreshCw,
  Send,
  Loader2,
  Video,
  Clapperboard,
  Music,
  ListVideo
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function YouTubePage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, reload } = useChat({
    api: "/api/chat",
    body: { template: "youtube" },
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <header className="space-y-2">
        <h1 className="text-4xl font-outfit font-bold"><span className="text-red-500">YouTube</span> Script <span className="text-gradient">Architect</span></h1>
        <p className="text-muted-foreground">Transforme ideias em roteiros de alta retenção projetados para o algoritmo.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6 rounded-2xl space-y-6">
            <h3 className="font-outfit font-bold flex items-center gap-2">
              <Clapperboard className="w-4 h-4 text-red-500" />
              Configuração do Roteiro
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase text-muted-foreground tracking-wider">Assunto do Vídeo</label>
                <textarea
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ex: Como ganhar os primeiros R$ 10k como afiliado em 30 dias..."
                  className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center gap-1 opacity-50">
                  <Video className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase">4K / 60fps</span>
                </div>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex flex-col items-center gap-1 opacity-50">
                  <Music className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase">Background Mix</span>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading || !input}
                className="w-full bg-gradient-to-r from-red-600 to-red-400 py-3 rounded-xl font-bold flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-lg hover:shadow-red-500/30 transition-all"
              >
                {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5 fill-white" />}
                Arquiteta Roteiro
              </button>
            </form>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-outfit font-bold mb-4 flex items-center gap-2">
              <ListVideo className="w-4 h-4 text-red-400" /> Estratégias Inclusas
            </h3>
            <ul className="space-y-3 text-xs text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1" />
                <span>Gancho de Retenção (Primeiros 30s)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1" />
                <span>Storytelling Estruturado</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1" />
                <span>CTA de Inscrição e Venda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col min-h-[600px]">
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-red-500/5">
              <div className="flex items-center gap-2">
                <Video className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-white">Script Completo</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => reload()} className="p-2 hover:bg-white/10 rounded-lg transition-colors text-muted-foreground">
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 p-8 overflow-y-auto prose prose-invert max-w-none">
              {messages.filter(m => m.role === 'assistant').length === 0 && !isLoading && (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
                  <Youtube className="w-16 h-16" />
                  <p>Insira o tema do seu vídeo para começar a arquitetura.</p>
                </div>
              )}
              
              {messages.filter(m => m.role === 'assistant').map((m, idx) => (
                <div key={idx} className="relative group animate-in fade-in duration-500 pb-10">
                  <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => copyToClipboard(m.content)}
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs flex items-center gap-1"
                    >
                      <Copy className="w-3 h-3" /> Copiar Roteiro
                    </button>
                  </div>
                  <div className="whitespace-pre-wrap text-base font-mono leading-relaxed text-gray-300">
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-red-500 animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm font-medium">Orquestrando roteiro viral...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
