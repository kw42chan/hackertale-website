import type { Metadata } from "next";
import { IBM_Plex_Mono, Noto_Sans_TC } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hackertale | 掌控代碼，佈局未來",
  description:
    "香港雙語資安與科技學習社群。學習網絡安全，領取源碼、課程與技術認證資源，並參與討論。",
  icons: { icon: "/favicon.png" },
};

const localeBoot = `
try {
  var locale = localStorage.getItem("hackertale-locale");
  if (locale === "en" || locale === "zh") {
    document.documentElement.dataset.locale = locale;
    document.documentElement.lang = locale === "en" ? "en" : "zh-Hant";
  }
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="zh-Hant"
      data-locale="zh"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: localeBoot }} />
      </head>
      <body>
        <a className="skip" href="#content">
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
