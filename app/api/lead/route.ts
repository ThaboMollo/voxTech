import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message: "Lead capture endpoint scaffolded. CRM and notification wiring still pending.",
    },
    { status: 200 },
  );
}
