import { getAll } from "./actions"
import MeetupList from "./components/meetups/MeetupList"

export default async function HomePage() {
  const data = await getAll()
  return <MeetupList meetups={data} />
}
