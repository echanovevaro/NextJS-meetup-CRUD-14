import { getAll } from "./actions"
import MeetupList from "./components/meetups/MeetupList"
export const revalidate = 0
export default async function HomePage() {
  const data = await getAll()
  return <MeetupList meetups={data} />
}
