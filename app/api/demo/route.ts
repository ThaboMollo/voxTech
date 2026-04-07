import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      ok: true,
      message: "Demo booking fallback endpoint scaffolded. Scheduler integration still pending.",
    },
    { status: 200 },
  );
}
