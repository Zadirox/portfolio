import {
  Code2,
  Layout,
  Paintbrush,
  Server,
  Bot,
  Brain,
  FileCode2,
  Database,
  type LucideIcon,
} from "lucide-react";

export interface SkillItem {
  key: string;
  icon: LucideIcon;
}

export interface ProjectItem {
  key: string;
  href?: string;
  hasStatus?: boolean;
}

export const skills: SkillItem[] = [
  { key: "nextjs", icon: Layout },
  { key: "react", icon: Code2 },
  { key: "tailwind", icon: Paintbrush },
  { key: "nodejs", icon: Server },
  { key: "telegram", icon: Bot },
  { key: "ai", icon: Brain },
  { key: "typescript", icon: FileCode2 },
  { key: "supabase", icon: Database },
];

export const projects: ProjectItem[] = [
  { key: "portfolio", href: "https://github.com/Zadirox/portfolio" },
  { key: "tgbot", href: "https://github.com/Zadirox/serpantin-bot-portfolio" },
  { key: "dashboard", hasStatus: true },
  { key: "aichat", hasStatus: true },
  { key: "twa", hasStatus: true },
];

export const contacts = {
  github: "https://github.com/Zadirox",
  telegram: "https://t.me/zadirox",
  email: "shahmatov.dmitriy90@gmail.com",
};
