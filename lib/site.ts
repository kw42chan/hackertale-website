export const links = {
  ited: "https://ited.hk/",
  itedMail: "mailto:info@ited.hk",
  bugtrace: "https://bugtraceai.com",
} as const;

export const nav = [
  { href: "/about", zh: "關於", en: "About" },
  { href: "/community", zh: "社群", en: "Community" },
  { href: "/learn", zh: "學習", en: "Learn" },
  { href: "/partners", zh: "夥伴", en: "Partners" },
  { href: "/contact", zh: "聯絡", en: "Contact" },
] as const;

export const titles: Record<string, { zh: string; en: string }> = {
  "/": {
    zh: "Hackertale | 掌控代碼，佈局未來",
    en: "Hackertale | Master the code. Lay out the future.",
  },
  "/about": {
    zh: "關於 | Hackertale",
    en: "About | Hackertale",
  },
  "/community": {
    zh: "社群 | Hackertale",
    en: "Community | Hackertale",
  },
  "/learn": {
    zh: "學習與資源 | Hackertale",
    en: "Learning and resources | Hackertale",
  },
  "/partners": {
    zh: "夥伴 | Hackertale",
    en: "Partners | Hackertale",
  },
  "/founder": {
    zh: "創辦人 | Hackertale",
    en: "Founder | Hackertale",
  },
  "/bugtraceai": {
    zh: "BugTraceAI | Hackertale",
    en: "BugTraceAI | Hackertale",
  },
  "/contact": {
    zh: "聯絡 | Hackertale",
    en: "Contact | Hackertale",
  },
  "/links": {
    zh: "更新社交連結 | Hackertale",
    en: "Update social links | Hackertale",
  },
};
