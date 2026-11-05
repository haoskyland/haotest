export type Language = "vi" | "en";

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  status: string;
  accent: "gold" | "cyan";
}