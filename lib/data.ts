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
  statusKey?: string;
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
  { key: "tgbot", statusKey: "status" },
  { key: "dashboard", statusKey: "status" },
  { key: "aichat", statusKey: "status" },
  { key: "twa", statusKey: "status" },
];

export const contacts = {
  github: "https://github.com/Zadirox",
  telegram: "https://t.me/zadirox",
  email: "shahmatov.dmitriy90@gmail.com",
};
