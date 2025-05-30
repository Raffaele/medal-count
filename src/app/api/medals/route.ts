import { NextResponse } from "next/server";

import data from "./medals.json";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return NextResponse.json(data, { status: 500 });
}