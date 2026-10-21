import fs from "fs";
import path from "path";
import { connection } from "next/server";
import defaultSocial from "@/data/social.json";
import { socialFieldList, type SocialLinks } from "@/lib/social-fields";

const filePath = path.join(process.cwd(), "data", "social.json");

export async function getSocialLinks(): Promise<SocialLinks> {
  await connection();
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8")) as SocialLinks;
  } catch {
    return defaultSocial as SocialLinks;
  }
}

export function writeSocialLinks(links: SocialLinks) {
  fs.writeFileSync(filePath, `${JSON.stringify(links, null, 2)}\n`, "utf8");
}

export function validateSocialLinks(
  input: unknown,
): { ok: true; links: SocialLinks } | { ok: false; error: string } {
  if (!input || typeof input !== "object") {
    return { ok: false, error: "Missing links." };
  }

  const source = input as Record<string, unknown>;
  const links = {} as SocialLinks;

  for (const field of socialFieldList) {
    const value = source[field.key];
    if (typeof value !== "string" || !isHttpUrl(value)) {
      return { ok: false, error: `${field.en} needs a full http or https link.` };
    }
    links[field.key] = value.trim();
  }

  return { ok: true, links };
}

function isHttpUrl(value: string) {
  try {
    const url = new URL(value.trim());
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
