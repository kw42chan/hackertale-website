import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { LangBlocks } from "@/components/Lang";
import { getSocialLinks } from "@/lib/social";

export const metadata: Metadata = {
  title: "創辦人 | Hackertale",
  description: "Hackertale 創辦人 Kazel Lau。",
};

export default async function FounderPage() {
  const social = await getSocialLinks();

  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">創辦人</p>
          <h1>Kazel Lau</h1>
          <p className="lede">
            Hackertale 的創辦人，在香港。公開履歷寫著：道德駭客，香港大學畢業，並在 ITED 負責 STEAM 教育的增長與營運。
          </p>

          <h2>社群的時間</h2>
          <ol className="timeline">
            <li>
              <time>2024 年 7 月</time>
              <span>建立 Kazel&apos;s Secret Society。</span>
            </li>
            <li>
              <time>2025 年 2 月 24 日</time>
              <span>社群改名 Hackertale，並獨立運作。</span>
            </li>
          </ol>

          <h2>標誌</h2>
          <p>
            創辦人公開解釋過現在的標誌：中間是 K，表示在創辦人之下的一個整體；外圈的弧帶出 lambda，取駭客文化裡匿名和函數的意思。黑與金是社群自己選的顏色。
          </p>

          <h2>聯絡她</h2>
          <ul className="plain-list">
            <li>
              <ExternalLink className="text-link" href={social.linkedin}>
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink className="text-link" href={social.facebook}>
                Facebook（個人頁 kazelegendo）
              </ExternalLink>
            </li>
            <li>資源投稿：Telegram @kazelegendo</li>
          </ul>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">Founder</p>
          <h1>Kazel Lau</h1>
          <p className="lede">
            Founder of Hackertale, based in Hong Kong. Her public profile describes her as an ethical hacker, a graduate of the University of Hong Kong, and the person driving growth and operations in STEAM education at ITED.
          </p>

          <h2>The community&apos;s timeline</h2>
          <ol className="timeline">
            <li>
              <time>July 2024</time>
              <span>Kazel&apos;s Secret Society starts.</span>
            </li>
            <li>
              <time>24 February 2025</time>
              <span>The community takes the name Hackertale and runs independently.</span>
            </li>
          </ol>

          <h2>The mark</h2>
          <p>
            The founder has explained the current mark in public: a K in the centre, for one body of people under the founder, and an outer arc that reads as lambda, from the hacker emblem and from unnamed functions. Black and gold are the colours the community chose.
          </p>

          <h2>Reach her</h2>
          <ul className="plain-list">
            <li>
              <ExternalLink className="text-link" href={social.linkedin}>
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink className="text-link" href={social.facebook}>
                Facebook (personal page, kazelegendo)
              </ExternalLink>
            </li>
            <li>Resource submissions: Telegram @kazelegendo</li>
          </ul>
        </article>
      }
    />
  );
}
