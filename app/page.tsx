import type { Metadata } from "next";
import { LangBlocks } from "@/components/Lang";
import { ExternalLink } from "@/components/ExternalLink";
import { getSocialLinks } from "@/lib/social";

export const metadata: Metadata = {
  title: "Hackertale | 掌控代碼，佈局未來",
  description:
    "Hackertale 是香港的雙語學習社群。這裡說明社群在做什麼，以及你可以學到的網絡安全和領到的免費資源。",
};

export default async function HomePage() {
  const social = await getSocialLinks();

  return (
    <LangBlocks
      zh={
        <>
          <section className="hero wrap">
            <div>
              <p className="kicker">香港雙語學習社群</p>
              <h1>掌控代碼，佈局未來</h1>
              <p className="lede">
                Hackertale 把網絡安全學習、免費技術資源，和一群願意動手做東西的人放在一起。這一頁先講這個社群在做什麼，以及你進來之後拿得到什麼。
              </p>
              <div className="hero-actions">
                <a className="button" href="#get">
                  看你可以得到什麼
                </a>
              </div>
            </div>
            <img
              className="hero-mark"
              src="/logo.webp"
              alt="Hackertale 標誌：金色的 K，外圈收成一個 lambda 形的弧"
              width={640}
              height={640}
            />
          </section>

          <section className="section" id="get">
            <div className="wrap">
              <div className="section-head">
                <p className="section-label">01</p>
                <h2>加入之後，你拿得到什麼</h2>
                <p>三件事。學習在社群裡發生，材料在公開頻道發放。</p>
              </div>
              <article className="offer">
                <p className="section-label">01</p>
                <div className="stack">
                  <h3>網絡安全學習</h3>
                  <p>
                    從道德駭客和日常資安學起。討論圍繞怎樣保護自己、身邊的人和手上的系統，並且守住合法、只做教育的界線。
                  </p>
                  <a className="text-link" href="/learn">
                    看學習與資源怎樣分開
                  </a>
                </div>
              </article>
              <article className="offer">
                <p className="section-label">02</p>
                <div className="stack">
                  <h3>免費資源</h3>
                  <p>
                    公開頻道集中發放三類材料：源碼、課程與技術認證資源、最新科技消息。這個網站列出種類，檔案本身在頻道裡領。
                  </p>
                  <a className="text-link" href="/learn">
                    看這三類資源
                  </a>
                </div>
              </article>
              <article className="offer">
                <p className="section-label">03</p>
                <div className="stack">
                  <h3>討論，以及把資源投回來</h3>
                  <p>
                    討論群用來發問、對做法。你也可以把安全、有質素的材料交回來。社群靠這些貢獻，才繼續免費運作。
                  </p>
                  <a className="text-link" href="/community">
                    看兩個入口的分別
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <p className="section-label">02</p>
                <h2>想拿走這些，從這裡進</h2>
                <p>兩個 Telegram。一個負責發放，一個負責對話。</p>
              </div>
              <div className="gates">
                <ExternalLink className="gate" href={social.telegramChannel}>
                  <strong>公開頻道</strong>
                  <span>香港 HackClub 之 HackerTale。想先領源碼、課程材料和科技消息，走這裡。</span>
                </ExternalLink>
                <ExternalLink className="gate" href={social.telegramGroup}>
                  <strong>討論群</strong>
                  <span>KAZEL&apos;s Secret Society。想發問、一起討論，以及領取免費資源，走這裡。</span>
                </ExternalLink>
              </div>
              <p className="callout">
                公開頻道寫明自己是倫理與教育頻道，遵守 Telegram 的規則，禁止違規內容。學習資安，是為了保護。
              </p>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <p className="section-label">03</p>
                <h2>旁邊的兩個名字</h2>
                <p>它們跟 Hackertale 有關，但不是這個學習社群本身。</p>
              </div>
              <div className="related">
                <a href="/partners">
                  <strong>ITED 創新科技教育有限公司</strong>
                  <span>STEM 教育夥伴。學校課程、機械人和學習平台在他們的網站。</span>
                </a>
                <a href="/bugtraceai">
                  <strong>BugTraceAI</strong>
                  <span>社群正在支持的項目，公開介紹寫的是 Agentic Security Testing Platform。</span>
                </a>
              </div>
            </div>
          </section>
        </>
      }
      en={
        <>
          <section className="hero wrap">
            <div>
              <p className="kicker">A Hong Kong bilingual learning community</p>
              <h1>Master the code. Lay out the future.</h1>
              <p className="lede">
                Hackertale puts cybersecurity study, free technical resources, and people who build things in one place. This page says what the community is for, and what you can take from it.
              </p>
              <div className="hero-actions">
                <a className="button" href="#offers">
                  See what you get
                </a>
              </div>
            </div>
            <img
              className="hero-mark"
              src="/logo.webp"
              alt="Hackertale mark: a gold K inside a lambda-shaped arc"
              width={640}
              height={640}
            />
          </section>

          <section className="section" id="offers">
            <div className="wrap">
              <div className="section-head">
                <p className="section-label">01</p>
                <h2>What you get here</h2>
                <p>Three things. The learning happens in the community. The files go out on the public channel.</p>
              </div>
              <article className="offer">
                <p className="section-label">01</p>
                <div className="stack">
                  <h3>Cybersecurity learning</h3>
                  <p>
                    Ethical hacking and everyday security. The talk is about protecting yourself, the people around you, and the systems you are responsible for, inside a legal and educational line.
                  </p>
                  <a className="text-link" href="/learn">
                    How learning and resources are split
                  </a>
                </div>
              </article>
              <article className="offer">
                <p className="section-label">02</p>
                <div className="stack">
                  <h3>Free resources</h3>
                  <p>
                    The public channel shares three kinds of material: source code, course and certification resources, and tech news. This site names the kinds. You collect the files in the channel.
                  </p>
                  <a className="text-link" href="/learn">
                    See the three kinds
                  </a>
                </div>
              </article>
              <article className="offer">
                <p className="section-label">03</p>
                <div className="stack">
                  <h3>Discussion, and something given back</h3>
                  <p>
                    The discussion group is for questions and comparing approaches. You can also send in safe, useful material. That is how a free community stays up.
                  </p>
                  <a className="text-link" href="/community">
                    The two ways in
                  </a>
                </div>
              </article>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <p className="section-label">02</p>
                <h2>Where you go to get it</h2>
                <p>Two Telegram rooms. One publishes. One talks.</p>
              </div>
              <div className="gates">
                <ExternalLink className="gate" href={social.telegramChannel}>
                  <strong>Public channel</strong>
                  <span>Hong Kong HackClub × HackerTale. Start here for source code, course material, and tech news.</span>
                </ExternalLink>
                <ExternalLink className="gate" href={social.telegramGroup}>
                  <strong>Discussion group</strong>
                  <span>KAZEL&apos;s Secret Society. Start here to ask questions, join the conversation, and pick up free resources.</span>
                </ExternalLink>
              </div>
              <p className="callout">
                The public channel describes itself as ethical and educational, says it follows Telegram&apos;s rules, and bars material that breaks them. Security study here is for protection.
              </p>
            </div>
          </section>

          <section className="section">
            <div className="wrap">
              <div className="section-head">
                <p className="section-label">03</p>
                <h2>Two names beside the community</h2>
                <p>They sit next to Hackertale. They are not the learning community itself.</p>
              </div>
              <div className="related">
                <a href="/partners">
                  <strong>ITED</strong>
                  <span>The STEM education partner. School courses, robots, and their learning platform live on their site.</span>
                </a>
                <a href="/bugtraceai">
                  <strong>BugTraceAI</strong>
                  <span>A project the community asks people to support. Its public label is Agentic Security Testing Platform.</span>
                </a>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
}
