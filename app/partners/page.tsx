import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { LangBlocks } from "@/components/Lang";
import { getSocialLinks } from "@/lib/social";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "夥伴 | Hackertale",
  description: "Hackertale 的 STEM 教育夥伴 ITED，以及怎樣談合作。",
};

export default async function PartnersPage() {
  const social = await getSocialLinks();

  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">夥伴</p>
          <h1>ITED 是教育夥伴，不是這個社群本身</h1>
          <p className="lede">
            Hackertale 的公開連結把 ITED 寫成「聯動推廣」和 STEM 教育夥伴。ITED 是另一家公司，有自己的學校課程。那些課程不算進本社群的免費資源。
          </p>

          <section className="panel">
            <p className="section-label">創新科技教育有限公司</p>
            <h2>ITED</h2>
            <p>他們的網站這樣介紹自己：您的 IT 教育夥伴，您的 STEAM 教育夥伴。</p>
            <ul>
              <li>超過十年的教育經驗</li>
              <li>100 間以上的合作學校與機構</li>
              <li>25 項以上的課程</li>
            </ul>
            <p>
              公開服務包括 ITebook 學習平台、比賽與機械人教材，以及按學校需要做的方案。細節以 ITED 網站為準。
            </p>
            <div className="hero-actions">
              <ExternalLink className="button" href={links.ited}>
                前往 ited.hk
              </ExternalLink>
              <ExternalLink className="button ghost" href={links.itedMail}>
                info@ited.hk
              </ExternalLink>
            </div>
          </section>

          <h2>想跟 Hackertale 合作</h2>
          <p>
            學校、贊助，或一起做活動，請經創辦人的 LinkedIn 聯絡。這個網站還沒有獨立信箱。
          </p>
          <p>
            <ExternalLink className="text-link" href={social.linkedin}>
              Kazel Lau 的 LinkedIn
            </ExternalLink>
          </p>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">Partners</p>
          <h1>ITED is the education partner, not the community itself</h1>
          <p className="lede">
            Hackertale&apos;s public links call ITED a joint promotion and its STEM education partner. ITED is a separate company, with its own school courses. Those courses are not part of this community&apos;s free resources.
          </p>

          <section className="panel">
            <p className="section-label">創新科技教育有限公司</p>
            <h2>ITED</h2>
            <p>Their site introduces them as an IT education partner and a STEAM education partner.</p>
            <ul>
              <li>More than ten years in education</li>
              <li>More than 100 partner schools and organisations</li>
              <li>More than 25 courses</li>
            </ul>
            <p>
              The public offer includes the ITebook learning platform, competition and robot teaching kits, and programmes shaped for a school. The detail lives on ITED&apos;s site.
            </p>
            <div className="hero-actions">
              <ExternalLink className="button" href={links.ited}>
                Go to ited.hk
              </ExternalLink>
              <ExternalLink className="button ghost" href={links.itedMail}>
                info@ited.hk
              </ExternalLink>
            </div>
          </section>

          <h2>Working with Hackertale</h2>
          <p>
            Schools, sponsors, and people who want to run something together can reach the founder on LinkedIn. This site does not have its own mailbox yet.
          </p>
          <p>
            <ExternalLink className="text-link" href={social.linkedin}>
              Kazel Lau on LinkedIn
            </ExternalLink>
          </p>
        </article>
      }
    />
  );
}
