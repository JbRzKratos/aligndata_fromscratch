import { cn } from "@/lib/utils";
import { 
  HelpCircle, 
  Target, 
  List, 
  ShieldCheck, 
  Rocket, 
  Briefcase, 
  Clock, 
  Star, 
  Map, 
  Users, 
  Database, 
  Cpu, 
  Zap,
  CheckCircle2,
  Tag
} from "lucide-react";

interface BadgeProps {
  label: string;
  variant?: "default" | "cyan" | "success";
  className?: string;
  icon?: React.ReactNode;
}

export function Badge({ label, variant = "default", className, icon }: BadgeProps) {
  const variants = {
    default: "bg-blue-50 text-blue-700 border-blue-200",
    cyan: "bg-cyan-50 text-cyan-700 border-cyan-200",
    success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  };

  // Auto-resolve icon based on label if not provided
  let IconToRender = icon;
  
  if (!IconToRender) {
    const l = label.toLowerCase();
    if (l.includes("faq")) IconToRender = <HelpCircle className="w-3.5 h-3.5" />;
    else if (l.includes("why us") || l.includes("advantage") || l.includes("benefit")) IconToRender = <Star className="w-3.5 h-3.5" />;
    else if (l.includes("ideal for") || l.includes("target")) IconToRender = <Target className="w-3.5 h-3.5" />;
    else if (l.includes("list")) IconToRender = <List className="w-3.5 h-3.5" />;
    else if (l.includes("trust") || l.includes("guarantee") || l.includes("compliant")) IconToRender = <ShieldCheck className="w-3.5 h-3.5" />;
    else if (l.includes("start") || l.includes("process")) IconToRender = <Rocket className="w-3.5 h-3.5" />;
    else if (l.includes("industr")) IconToRender = <Briefcase className="w-3.5 h-3.5" />;
    else if (l.includes("hour") || l.includes("time") || l.includes("day") || l.includes("week")) IconToRender = <Clock className="w-3.5 h-3.5" />;
    else if (l.includes("coverage") || l.includes("map")) IconToRender = <Map className="w-3.5 h-3.5" />;
    else if (l.includes("contact") || l.includes("people") || l.includes("m+")) IconToRender = <Users className="w-3.5 h-3.5" />;
    else if (l.includes("data") || l.includes("database")) IconToRender = <Database className="w-3.5 h-3.5" />;
    else if (l.includes("feature")) IconToRender = <Cpu className="w-3.5 h-3.5" />;
    else if (l.includes("deliver")) IconToRender = <Zap className="w-3.5 h-3.5" />;
    else if (l.includes("accuracy")) IconToRender = <CheckCircle2 className="w-3.5 h-3.5" />;
    else IconToRender = <Tag className="w-3.5 h-3.5" />;
  }

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 border px-[12px] py-[5px] rounded-full",
        "text-[11px] font-semibold tracking-[0.08em] uppercase",
        variants[variant],
        className
      )}
    >
      {IconToRender}
      {label}
    </span>
  );
}
