import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest): Promise<void> {
	const path: string | null = new URL(request.url).searchParams.get("path");
	(await draftMode()).enable();
	redirect(`/${path ? path : ""}`);
}
