import type { Metadata } from "next";
import { LangBlocks } from "@/components/Lang";

export const metadata: Metadata = {
  title: "關於 | Hackertale",
  description: "Hackertale 是什麼、怎樣開始，以及這個資安學習社群的界線。",
};

export default function AboutPage() {
  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">關於</p>
          <h1>一個拿來學資安、也拿來交換資源的社群</h1>
          <p className="lede">
            Hackertale 是香港的雙語社群。主題是網絡安全與道德駭客，旁邊是科技教育，以及一種自己找資源、自己做、再把有用的東西交回去的做事方式。
          </p>

          <h2>社群怎樣介紹自己</h2>
          <blockquote className="quote">
            全港唯一 資安/EdTech × 創業強者思維 雙語領先學習社群
            <cite>Hackertale 的公開介紹。英文一句是 Join our Exclusive EdTech × Elite Mindset Community。</cite>
          </blockquote>

          <h2>怎樣開始</h2>
          <ol className="timeline">
            <li>
              <time>2024 年 7 月</time>
              <span>以 Kazel&apos;s Secret Society 起步，用來討論和分享技術資源。</span>
            </li>
            <li>
              <time>2025 年 2 月 24 日</time>
              <span>改以 Hackertale 的名字獨立運作。創辦人是 Kazel Lau。</span>
            </li>
          </ol>

          <h2>界線</h2>
          <p>
            公開 Telegram 頻道寫明：這是倫理與教育頻道，遵守 Telegram 的規則，禁止違規內容。這裡的資安學習用來保護自己和別人，不用來越界。
          </p>
          <p>
            <a className="text-link" href="/founder">
              看創辦人
            </a>
          </p>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">About</p>
          <h1>A community for learning security, and for passing resources on</h1>
          <p className="lede">
            Hackertale is a bilingual community in Hong Kong. The subject is cybersecurity and ethical hacking, set next to technology education and a habit of finding material, building with it, and sending the useful parts back.
          </p>

          <h2>In its own words</h2>
          <blockquote className="quote">
            全港唯一 資安/EdTech × 創業強者思維 雙語領先學習社群
            <cite>
              Hackertale&apos;s own public introduction. The English line it uses is “Join our Exclusive EdTech × Elite Mindset Community.”
            </cite>
          </blockquote>

          <h2>How it started</h2>
          <ol className="timeline">
            <li>
              <time>July 2024</time>
              <span>It began as Kazel&apos;s Secret Society, a place to talk and share technical resources.</span>
            </li>
            <li>
              <time>24 February 2025</time>
              <span>It continued independently under the name Hackertale. The founder is Kazel Lau.</span>
            </li>
          </ol>

          <h2>The line</h2>
          <p>
            The public Telegram channel describes itself as ethical and educational, says it follows Telegram&apos;s rules, and bars material that breaks them. Security study here is for protecting yourself and other people.
          </p>
          <p>
            <a className="text-link" href="/founder">
              Read about the founder
            </a>
          </p>
        </article>
      }
    />
  );
}
