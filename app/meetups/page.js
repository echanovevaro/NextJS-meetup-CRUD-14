import MeetupList from "../components/meetups/MeetupList"
import { getAll } from "../services/loaders"

export default async function MeetupsPage() {
  const data = await getAll()
  return (
    <div>
      <MeetupList meetups={data} />
    </div>
  )
}
