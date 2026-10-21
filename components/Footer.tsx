import { L } from "@/components/Lang";
import { ExternalLink } from "@/components/ExternalLink";
import { getSocialLinks } from "@/lib/social";

export async function Footer() {
  const social = await getSocialLinks();

  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="stack">
          <a className="footer-brand" href="/">
            <img src="/logo.webp" alt="" width={96} height={96} />
            Hackertale
          </a>
          <p className="fine">
            <L zh="掌控代碼，佈局未來" en="Master the code. Lay out the future." />
          </p>
          <p className="fine">
            <L
              zh="香港雙語資安與科技學習社群。倫理與教育用途。"
              en="A Hong Kong bilingual community for cybersecurity and technology learning. Ethical and educational."
            />
          </p>
        </div>
        <div className="stack">
          <div className="footer-links">
            <a href="/about"><L zh="關於" en="About" /></a>
            <a href="/community"><L zh="社群" en="Community" /></a>
            <a href="/learn"><L zh="學習" en="Learn" /></a>
            <a href="/founder"><L zh="創辦人" en="Founder" /></a>
            <a href="/partners"><L zh="夥伴" en="Partners" /></a>
            <a href="/bugtraceai">BugTraceAI</a>
            <a href="/contact"><L zh="聯絡" en="Contact" /></a>
            <a href="/links"><L zh="更新社交連結" en="Update social links" /></a>
          </div>
          <div className="socials">
            <ExternalLink href={social.telegramChannel}>Telegram</ExternalLink>
            <ExternalLink href={social.instagram}>Instagram</ExternalLink>
            <ExternalLink href={social.threads}>Threads</ExternalLink>
            <ExternalLink href={social.x}>X</ExternalLink>
            <ExternalLink href={social.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
