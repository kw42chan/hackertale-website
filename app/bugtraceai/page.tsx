import type { Metadata } from "next";
import { ExternalLink } from "@/components/ExternalLink";
import { LangBlocks } from "@/components/Lang";
import { links } from "@/lib/site";

export const metadata: Metadata = {
  title: "BugTraceAI | Hackertale",
  description: "Hackertale 正在支持的 BugTraceAI 項目。",
};

export default function BugTracePage() {
  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">項目</p>
          <h1>BugTraceAI</h1>
          <p className="lede">
            Hackertale 的公開連結把這個項目寫成 BugTraceAI | Agentic Security Testing Platform，並請人支持它。
          </p>
          <p>
            它是社群正在支持的一個資安測試項目，不是這個學習社群的本體。產品怎樣運作，以 BugTraceAI 自己的網站為準。這一頁只負責把你送到那裡。
          </p>
          <p>
            <ExternalLink className="button" href={links.bugtrace}>
              前往 bugtraceai.com
            </ExternalLink>
          </p>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">Project</p>
          <h1>BugTraceAI</h1>
          <p className="lede">
            Hackertale&apos;s public links name this project BugTraceAI | Agentic Security Testing Platform, and ask people to support it.
          </p>
          <p>
            It is a security-testing project the community is backing. It is not the learning community itself. How the product works is for BugTraceAI&apos;s own site to say. This page only takes you there.
          </p>
          <p>
            <ExternalLink className="button" href={links.bugtrace}>
              Go to bugtraceai.com
            </ExternalLink>
          </p>
        </article>
      }
    />
  );
}
