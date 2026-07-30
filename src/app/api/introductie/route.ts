import { NextResponse } from "next/server";
import { introductionSchema } from "@/lib/validation";
import { dispatchIntroduction } from "@/lib/crm";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Ongeldig verzoek." }, { status: 400 });
  }

  const parsed = introductionSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validatie mislukt.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 }
    );
  }

  // Honeypot: wanneer dit veld is ingevuld, behandelen we het als spam.
  // We geven bewust een succesrespons terug zodat bots geen signaal krijgen.
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  try {
    const result = await dispatchIntroduction(parsed.data);
    if (!result.ok) {
      console.error("[introductie] Verwerkingsfout:", result.errors);
      return NextResponse.json(
        { ok: false, error: "Verwerking mislukt." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[introductie] Onverwachte fout:", error);
    return NextResponse.json(
      { ok: false, error: "Er ging iets mis." },
      { status: 500 }
    );
  }
}
