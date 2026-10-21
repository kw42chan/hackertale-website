"use client";

import { useEffect, useState, type FormEvent } from "react";
import { L } from "@/components/Lang";
import { socialFieldList, type SocialLinks } from "@/lib/social-fields";

const empty = Object.fromEntries(socialFieldList.map((field) => [field.key, ""])) as SocialLinks;

export function LinkEditor() {
  const [values, setValues] = useState<SocialLinks>(empty);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    fetch("/api/social")
      .then((response) => response.json())
      .then((data: SocialLinks) => {
        if (!active) return;
        setValues(data);
        setReady(true);
      })
      .catch(() => {
        if (!active) return;
        setError("Could not load the current links.");
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");
    setError("");

    const response = await fetch("/api/social", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setStatus("error");
      setError(typeof data?.error === "string" ? data.error : "Could not save.");
      return;
    }

    setValues(data);
    setStatus("saved");
  }

  return (
    <>
      <p className="section-label">
        <L zh="社交連結" en="Social links" />
      </p>
      <h1>
        <L zh="更新社交連結" en="Update social links" />
      </h1>
      <p className="lede">
        <L
          zh="改完按儲存。首頁、社群、學習、聯絡和頁尾的連結會一起換成新地址。"
          en="Save once. The home page, community, learn, contact, and footer all use the new addresses."
        />
      </p>
      <form className="link-form" onSubmit={onSubmit}>
        {socialFieldList.map((field) => (
          <label className="field" key={field.key}>
            <span>
              <L zh={field.zh} en={field.en} />
            </span>
            <input
              type="url"
              name={field.key}
              required
              value={values[field.key]}
              disabled={!ready || status === "saving"}
              onChange={(event) =>
                setValues((current) => ({ ...current, [field.key]: event.target.value }))
              }
            />
          </label>
        ))}
        <div className="hero-actions">
          <button className="button" type="submit" disabled={!ready || status === "saving"}>
            {status === "saving" ? <L zh="儲存中" en="Saving" /> : <L zh="儲存" en="Save" />}
          </button>
        </div>
        {status === "saved" ? (
          <p className="form-note">
            <L zh="已儲存。網站上的社交連結已換成新地址。" en="Saved. The site is now using these addresses." />
          </p>
        ) : null}
        {status === "error" ? <p className="form-note form-note-error">{error}</p> : null}
      </form>
    </>
  );
}
