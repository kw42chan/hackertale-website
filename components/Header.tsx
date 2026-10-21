"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { L } from "@/components/Lang";
import { nav, titles } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  useEffect(() => {
    const locale = document.documentElement.dataset.locale === "en" ? "en" : "zh";
    const entry = titles[pathname] ?? titles["/"];
    document.title = entry[locale];
    document.querySelectorAll<HTMLButtonElement>(".lang-switch button").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.set === locale ? "true" : "false");
    });
  }, [pathname]);

  function setLocale(locale: "zh" | "en") {
    document.documentElement.dataset.locale = locale;
    document.documentElement.lang = locale === "en" ? "en" : "zh-Hant";
    localStorage.setItem("hackertale-locale", locale);
    const entry = titles[pathname] ?? titles["/"];
    document.title = entry[locale];
    document.querySelectorAll<HTMLButtonElement>(".lang-switch button").forEach((button) => {
      button.setAttribute("aria-pressed", button.dataset.set === locale ? "true" : "false");
    });
  }

  return (
    <header className="site-header">
      <a className="brand" href="/">
        <img src="/logo.webp" alt="" width={88} height={88} />
        Hackertale
      </a>
      <div className="header-end">
        <nav id="site-nav" className={open ? "nav is-open" : "nav"} aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              <L zh={item.zh} en={item.en} />
            </a>
          ))}
        </nav>
        <div className="lang-switch" role="group" aria-label="Language">
          <button type="button" data-set="zh" onClick={() => setLocale("zh")}>
            中文
          </button>
          <button type="button" data-set="en" onClick={() => setLocale("en")}>
            EN
          </button>
        </div>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <L zh="關閉" en="Close" /> : <L zh="選單" en="Menu" />}
        </button>
      </div>
    </header>
  );
}
