export const socialFieldList = [
  { key: "telegramChannel", zh: "公開 Telegram 頻道", en: "Public Telegram channel" },
  { key: "telegramGroup", zh: "討論群 Telegram", en: "Discussion group" },
  { key: "instagram", zh: "Instagram", en: "Instagram" },
  { key: "threads", zh: "Threads", en: "Threads" },
  { key: "x", zh: "X", en: "X" },
  { key: "linkedin", zh: "LinkedIn", en: "LinkedIn" },
  { key: "facebook", zh: "Facebook", en: "Facebook" },
] as const;

export type SocialKey = (typeof socialFieldList)[number]["key"];

export type SocialLinks = Record<SocialKey, string>;
