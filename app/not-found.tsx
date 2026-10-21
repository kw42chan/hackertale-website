import { LangBlocks } from "@/components/Lang";

export default function NotFound() {
  return (
    <LangBlocks
      zh={
        <article className="wrap page-hero stack">
          <p className="section-label">404</p>
          <h1>找不到這一頁</h1>
          <p className="lede">回到首頁，看這個社群在做什麼，以及你拿得到什麼。</p>
          <p>
            <a className="button" href="/">
              回首頁
            </a>
          </p>
        </article>
      }
      en={
        <article className="wrap page-hero stack">
          <p className="section-label">404</p>
          <h1>This page is not here</h1>
          <p className="lede">Go back to the home page for what the community is, and what you can get from it.</p>
          <p>
            <a className="button" href="/">
              Back home
            </a>
          </p>
        </article>
      }
    />
  );
}
