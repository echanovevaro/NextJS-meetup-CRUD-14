import MeetupDetails from "../components/meetups/MeetupDetails"
import { getOne } from "../services/loaders"

export default async function MeetupDetailsPage({ params }) {
  const { meetupId } = params
  const meetup = await getOne(meetupId)
  return <MeetupDetails meetup={meetup} />
}
