'use client'
// import { getOne } from "@/app/services/actions"
import NewMeetupForm from "@/app/components/meetups/NewMeetupForm"
import useMeetupsStore from "@/src/store"

export default async function MeetupUpdatePage({ params }) {
  const { meetupId } = params
  // const data = await getOne(meetupId)

  return <NewMeetupForm meetup={useMeetupsStore.getState().meetup} />
}
