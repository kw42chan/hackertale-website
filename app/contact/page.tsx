import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { LangBlocks } from "@/components/Lang";
import { getSocialLinks } from "@/lib/social";

export const metadata: Metadata = {
  title: "聯絡 | Hackertale",
  description: "加入 Hackertale、投稿資源，或談合作。",
};

export default async function ContactPage() {
  const social = await getSocialLinks();

  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">聯絡</p>
          <h1>按你要做的事，走對應的路</h1>
          <p className="lede">
            這個網站還沒有獨立信箱。四件事，四條已經在用的路。
          </p>
          <div className="routes">
            <ExternalLink className="route" href={social.telegramChannel}>
              <span>01 領取資源</span>
              <strong>公開頻道</strong>
              <p>源碼、課程與認證資源、科技消息。</p>
            </ExternalLink>
            <ExternalLink className="route" href={social.telegramGroup}>
              <span>02 參與討論</span>
              <strong>KAZEL&apos;s Secret Society</strong>
              <p>發問，交換做法，領取免費資源。</p>
            </ExternalLink>
            <ExternalLink className="route" href={social.telegramChannel}>
              <span>03 投稿</span>
              <strong>@kazelegendo</strong>
              <p>把安全、有質素的材料交到頻道，並標註這個名字。</p>
            </ExternalLink>
            <ExternalLink className="route" href={social.linkedin}>
              <span>04 合作與贊助</span>
              <strong>Kazel Lau 的 LinkedIn</strong>
              <p>學校、贊助，以及一起做的活動。</p>
            </ExternalLink>
          </div>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">Contact</p>
          <h1>Pick the door that matches what you want</h1>
          <p className="lede">
            This site does not have its own mailbox yet. Four things, four paths that are already in use.
          </p>
          <div className="routes">
            <ExternalLink className="route" href={social.telegramChannel}>
              <span>01 RESOURCES</span>
              <strong>Public channel</strong>
              <p>Source code, course and certification resources, tech news.</p>
            </ExternalLink>
            <ExternalLink className="route" href={social.telegramGroup}>
              <span>02 DISCUSSION</span>
              <strong>KAZEL&apos;s Secret Society</strong>
              <p>Ask questions, compare approaches, and collect free resources.</p>
            </ExternalLink>
            <ExternalLink className="route" href={social.telegramChannel}>
              <span>03 SUBMIT</span>
              <strong>@kazelegendo</strong>
              <p>Send safe, useful material to the channel and mark that name.</p>
            </ExternalLink>
            <ExternalLink className="route" href={social.linkedin}>
              <span>04 PARTNERS</span>
              <strong>Kazel Lau on LinkedIn</strong>
              <p>Schools, sponsors, and things you want to run together.</p>
            </ExternalLink>
          </div>
        </article>
      }
    />
  );
}
