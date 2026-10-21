import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { LangBlocks } from "@/components/Lang";
import { getSocialLinks } from "@/lib/social";

export const metadata: Metadata = {
  title: "學習與資源 | Hackertale",
  description: "Hackertale 提供的網絡安全學習，以及源碼、課程認證資源和科技消息。",
};

export default async function LearnPage() {
  const social = await getSocialLinks();

  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">學習</p>
          <h1>先學資安，再按種類領資源</h1>
          <p className="lede">
            社群的學習主題是網絡安全：道德駭客，以及怎樣保護自己和身邊的人。資源分三類。這一頁只說明種類。檔案在公開頻道發放，網站不轉載課程或源碼。
          </p>

          <article className="offer">
            <p className="section-label">01</p>
            <div className="stack">
              <h2>源碼</h2>
              <p>頻道會分享 source code，給想自己打開、改、跑、看懂的人。</p>
            </div>
          </article>
          <article className="offer">
            <p className="section-label">02</p>
            <div className="stack">
              <h2>課程與技術認證資源</h2>
              <p>
                課程材料，以及跟技術認證有關的資源。拿走之前先看授權。社群要求交來的材料安全、合規。
              </p>
            </div>
          </article>
          <article className="offer">
            <p className="section-label">03</p>
            <div className="stack">
              <h2>科技消息</h2>
              <p>頻道也發最新 IT 消息，讓學習不只停在舊教材。</p>
            </div>
          </article>

          <h2>材料會先被看過</h2>
          <p>
            創辦人公開提過：自製或別人交來的材料會先被檢視，包括工具是否安全，再決定是否發出。投稿請在 Telegram 標註 @kazelegendo。
          </p>
          <p>
            <ExternalLink className="button" href={social.telegramChannel}>
              到公開頻道領取
            </ExternalLink>
          </p>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">Learn</p>
          <h1>Study security, then collect resources by kind</h1>
          <p className="lede">
            The community&apos;s subject is cybersecurity: ethical hacking, and how to protect yourself and the people around you. Resources come in three kinds. This page names them. The files are posted on the public channel. The site does not republish courses or source code.
          </p>

          <article className="offer">
            <p className="section-label">01</p>
            <div className="stack">
              <h2>Source code</h2>
              <p>The channel shares source code for people who want to open it, change it, run it, and understand it.</p>
            </div>
          </article>
          <article className="offer">
            <p className="section-label">02</p>
            <div className="stack">
              <h2>Courses and certification resources</h2>
              <p>
                Course material, and resources tied to technical certifications. Check the licence before you take something. The community asks that submitted material be safe and within the rules.
              </p>
            </div>
          </article>
          <article className="offer">
            <p className="section-label">03</p>
            <div className="stack">
              <h2>Tech news</h2>
              <p>The channel also posts current IT news, so the learning is not stuck on old handouts.</p>
            </div>
          </article>

          <h2>Material is looked at first</h2>
          <p>
            The founder has said in public that material, whether made by the community or sent in by others, is reviewed before it is posted, including whether a tool is safe. Mark submissions for @kazelegendo on Telegram.
          </p>
          <p>
            <ExternalLink className="button" href={social.telegramChannel}>
              Collect them on the public channel
            </ExternalLink>
          </p>
        </article>
      }
    />
  );
}
