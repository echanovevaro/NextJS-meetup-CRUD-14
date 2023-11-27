import { getOne } from "@/app/actions"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
  const data = await getOne(params.meetupId)
  return NextResponse.json(
    {
      ...data,
    },
    { status: 200 }
  )
}
