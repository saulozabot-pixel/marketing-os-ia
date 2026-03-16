import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

export function DashboardCard({ title, description, icon: Icon, color, className }: DashboardCardProps) {
  return (
    <div className={cn(
      "glass-card p-6 rounded-2xl group cursor-pointer hover:border-white/20 transition-all duration-300",
      className
    )}>
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300",
        color
      )}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-outfit font-bold text-xl mb-2 text-white group-hover:text-gradient transition-all">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}
