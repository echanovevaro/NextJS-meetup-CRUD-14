import Landing from "./components/meetups/Landing"
import { getAll } from "./services/loaders"

export default async function HomePage() {
  const data = await getAll()
  return (
    <div>
      <Landing meetups={data} />
    </div>
  )
}
