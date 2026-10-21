import { NextResponse } from "next/server";
import { getSocialLinks, validateSocialLinks, writeSocialLinks } from "@/lib/social";

export async function GET() {
  return NextResponse.json(await getSocialLinks());
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const result = validateSocialLinks(body);
  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  try {
    writeSocialLinks(result.links);
  } catch {
    return NextResponse.json(
      { error: "This host cannot save link changes. Edit data/social.json and redeploy." },
      { status: 500 },
    );
  }
  return NextResponse.json(result.links);
}
