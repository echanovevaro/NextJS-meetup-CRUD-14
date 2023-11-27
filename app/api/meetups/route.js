import { getAll } from "@/app/actions"
import { NextResponse } from "next/server"

export async function GET() {
  const data = await getAll()
  return NextResponse.json(
    {
      ...data,
    },
    { status: 200 }
  )
}
