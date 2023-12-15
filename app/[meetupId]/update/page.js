
// import { getOne } from "@/app/services/actions"
import NewMeetupForm from "@/app/components/meetups/NewMeetupForm"
import { getOne } from "@/app/services/loaders"

export default async function MeetupUpdatePage({ params }) {
  const { meetupId } = params
  const data = await getOne(meetupId)

  return (
  <div className="form-container mt-5 pt-5">
  <NewMeetupForm meetup={data}/>
  </div>)
}
