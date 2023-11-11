import { MongoClient } from "mongodb"
import MeetupList from "./components/meetups/MeetupList"

export default async function HomePage() {
  const client = await MongoClient.connect(
    "mongodb+srv://meetupsAdmin:trewqMN9876@clustervaro.13obq.mongodb.net/?retryWrites=true&w=majority"
  )

  const database = client.db("meetups")

  const collection = database.collection("meetups")

  const data = (await collection.find().toArray()).map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
  }))
  client.close()

  return <MeetupList meetups={data} />
}
