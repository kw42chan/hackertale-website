import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { LangBlocks } from "@/components/Lang";
import { getSocialLinks } from "@/lib/social";

export const metadata: Metadata = {
  title: "社群 | Hackertale",
  description: "Hackertale 的公開 Telegram 頻道、討論群，以及其他社交頁面。",
};

export default async function CommunityPage() {
  const social = await getSocialLinks();

  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">社群</p>
          <h1>兩個入口，做兩件不同的事</h1>
          <p className="lede">
            想領資源，去公開頻道。想說話，去討論群。其餘的社交頁面用來看社群在公開場合說什麼。
          </p>

          <div className="split">
            <section className="panel">
              <p className="section-label">公開頻道</p>
              <h2>香港 HackClub 之 HackerTale</h2>
              <p>頻道這樣描述自己：香港 Tech 人自強的華語科技學習頻道，附有學習資源，包括：</p>
              <ul>
                <li>源碼</li>
                <li>課程與技術認證資源</li>
                <li>最新 IT 消息</li>
              </ul>
              <p>歡迎投稿。請在 Telegram 標註 @kazelegendo。</p>
              <ExternalLink className="button" href={social.telegramChannel}>
                打開公開頻道
              </ExternalLink>
            </section>
            <section className="panel">
              <p className="section-label">討論群</p>
              <h2>KAZEL&apos;s Secret Society</h2>
              <p>
                這是討論和領取免費資源的群組。適合發問、交換做法，以及跟已經在學的人說話。
              </p>
              <p>它比公開頻道早，是 2024 年社群起步時的名字。</p>
              <ExternalLink className="button" href={social.telegramGroup}>
                打開討論群
              </ExternalLink>
            </section>
          </div>

          <h2>其他公開頁面</h2>
          <ul className="plain-list">
            <li>
              <ExternalLink className="text-link" href={social.instagram}>
                Instagram @hackertale
              </ExternalLink>
            </li>
            <li>
              <ExternalLink className="text-link" href={social.threads}>
                Threads @hackertale
              </ExternalLink>
            </li>
            <li>
              <ExternalLink className="text-link" href={social.x}>
                X @thehackertale
              </ExternalLink>
            </li>
          </ul>
          <p>
            創辦人的 Facebook 和 LinkedIn 是個人頁，放在
            <a className="text-link" href="/founder"> 創辦人</a>
            ，不當作社群的公司專頁。
          </p>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">Community</p>
          <h1>Two doors, for two different things</h1>
          <p className="lede">
            Collect resources on the public channel. Talk in the discussion group. The other social pages are where the community speaks in public.
          </p>

          <div className="split">
            <section className="panel">
              <p className="section-label">Public channel</p>
              <h2>Hong Kong HackClub × HackerTale</h2>
              <p>The channel describes itself as a Chinese-language technology learning channel for Hong Kong, with resources that include:</p>
              <ul>
                <li>Source code</li>
                <li>Course and certification resources</li>
                <li>The latest IT news</li>
              </ul>
              <p>Submissions are welcome. Mark them for @kazelegendo on Telegram.</p>
              <ExternalLink className="button" href={social.telegramChannel}>
                Open the public channel
              </ExternalLink>
            </section>
            <section className="panel">
              <p className="section-label">Discussion group</p>
              <h2>KAZEL&apos;s Secret Society</h2>
              <p>
                This is the group for discussion and free resources. Use it to ask questions, compare approaches, and talk with people who are already learning.
              </p>
              <p>It is the older room, and the name the community used when it started in 2024.</p>
              <ExternalLink className="button" href={social.telegramGroup}>
                Open the discussion group
              </ExternalLink>
            </section>
          </div>

          <h2>Other public pages</h2>
          <ul className="plain-list">
            <li>
              <ExternalLink className="text-link" href={social.instagram}>
                Instagram @hackertale
              </ExternalLink>
            </li>
            <li>
              <ExternalLink className="text-link" href={social.threads}>
                Threads @hackertale
              </ExternalLink>
            </li>
            <li>
              <ExternalLink className="text-link" href={social.x}>
                X @thehackertale
              </ExternalLink>
            </li>
          </ul>
          <p>
            The founder&apos;s Facebook and LinkedIn are personal pages. They live on the
            <a className="text-link" href="/founder"> founder page</a>
            , not as a company profile.
          </p>
        </article>
      }
    />
  );
}
