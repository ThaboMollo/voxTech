import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message: "Contact submission endpoint scaffolded. Integrate form handling next.",
    },
    { status: 200 },
  );
}
