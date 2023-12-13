
import MeetupList from "./components/meetups/MeetupList"
import { getAll } from "./services/loaders"

export default async function HomePage() {
  const data = await getAll()
  return <MeetupList meetups={data} />
}
