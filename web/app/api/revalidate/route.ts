import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { secret, path } = body || {};

    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ revalidated: false, message: "Invalid secret" }, { status: 401 });
    }

    if (!path || typeof path !== "string") {
      return NextResponse.json({ revalidated: false, message: "Missing path" }, { status: 400 });
    }

    revalidatePath(path);

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    return NextResponse.json({ revalidated: false, error: String(err) }, { status: 500 });
  }
}
