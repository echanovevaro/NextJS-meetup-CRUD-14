import { ObjectId } from "mongodb"
import { MONGO_COLLECTION_MEETUPS } from "./constants"
import { connectToCollection } from "./utils"

export async function getAll() {
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )
  const data = await collection.find().toArray()
  console.log(data)
  const response = []
  data.map((meetup) =>
    response.push({
      id: meetup._id.toString(),
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      description: meetup.description,
    })
  )
  client.close()
  return response
}

export async function getOne(id) {
  console.log(id)
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )
  const data = await collection.findOne({ _id: new ObjectId(id) })
  console.log(data)
  client.close()
  return {
    id: data._id.toString(),
    title: data.title,
    image: data.image,
    address: data.address,
    description: data.description,
  }
}
