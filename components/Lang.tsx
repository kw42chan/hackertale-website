import type { ReactNode } from "react";

export function LangBlocks({ zh, en }: { zh: ReactNode; en: ReactNode }) {
  return (
    <>
      <div className="lang-stack" data-lang-block="zh" lang="zh-Hant">
        {zh}
      </div>
      <div className="lang-stack" data-lang-block="en" lang="en">
        {en}
      </div>
    </>
  );
}

export function L({ zh, en }: { zh: ReactNode; en: ReactNode }) {
  return (
    <>
      <span data-lang-block="zh" lang="zh-Hant">
        {zh}
      </span>
      <span data-lang-block="en" lang="en">
        {en}
      </span>
    </>
  );
}
