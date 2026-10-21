import type { Metadata } from "next";
import { LinkEditor } from "@/components/LinkEditor";

export const metadata: Metadata = {
  title: "更新社交連結 | Hackertale",
  description: "更新 Hackertale 網站上的 Telegram、Instagram、Threads、X、LinkedIn 和 Facebook 連結。",
};

export default function LinksPage() {
  return (
    <article className="wrap page-hero stack">
      <LinkEditor />
    </article>
  );
}
