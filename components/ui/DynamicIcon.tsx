import type { ElementType } from "react";
import { 
  Users, Building2, ShieldCheck, Calendar,
  Factory, Heart, HardHat, Car, Plane,
  Database, Mail, Shield, Filter, RefreshCw,
  Clock, Headphones, Zap, Lock, Gift,
  HelpCircle,
  type LucideProps
} from "lucide-react";

interface DynamicIconProps extends LucideProps {
  name: string;
}

const iconMap: Record<string, ElementType> = {
  Users, Building2, ShieldCheck, Calendar,
  Factory, Heart, HardHat, Car, Plane,
  Database, Mail, Shield, Filter, RefreshCw,
  Clock, Headphones, Zap, Lock, Gift
};

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    return <HelpCircle {...props} />;
  }

  return <LucideIcon {...props} />;
}
