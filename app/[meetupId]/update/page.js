'use client'
// import { getOne } from "@/app/services/actions"
import NewMeetupForm from "@/app/components/meetups/NewMeetupForm"

export default async function MeetupUpdatePage({ params }) {
  const { meetupId } = params
  const data = await getOne(meetupId)

  return <NewMeetupForm meetup={data} />
}
