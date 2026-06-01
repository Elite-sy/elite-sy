export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readingTime: number; // minutes
  hero: string;
  heroAlt: string;
  intro: string;
  content: Block[];
  status: "published" | "planned";
  related?: string[];
};

export type PlannedPost = Pick<
  Post,
  "slug" | "title" | "description" | "category" | "date"
>;