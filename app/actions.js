import { MongoClient, ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

async function connect() {
  const client = await MongoClient.connect(
    "mongodb+srv://meetupsAdmin:trewqMN9876@clustervaro.13obq.mongodb.net/?retryWrites=true&w=majority"
  )

  const database = client.db("meetups")

  const collection = database.collection("meetups")

  return [collection, client]
}

export async function getAll() {
  const [collection, client] = await connect()
  const data = (await collection.find().toArray()).map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
    description: meetup.description,
  }))
  client.close()
  return data
}

export async function getOne(id) {
  const [collection, client] = await connect()
  const data = await collection.findOne({ _id: new ObjectId(id) })
  client.close()
  return {
    id: data._id.toString(),
    title: data.title,
    image: data.image,
    address: data.address,
    description: data.description,
  }
}

export async function create(formData) {
  "use server"
  const [collection, client] = await connect()
  const result = await collection.insertOne({
    title: formData.get("title"),
    image: formData.get("image"),
    address: formData.get("address"),
    description: formData.get("description"),
  })
  client.close()
  revalidatePath("/")
  redirect("/")
}

export async function update(formData) {
  "use server"
  const [collection, client] = await connect()
  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(formData.get("id")) },
    {
      $set: {
        title: formData.get("title"),
        image: formData.get("image"),
        address: formData.get("address"),
        description: formData.get("description"),
      },
    }
  )
  client.close()
  revalidatePath("/")
  redirect("/")
}

export async function remove(formData) {
  "use server"
  const [collection, client] = await connect()
  const result = await collection.findOneAndDelete({
    _id: new ObjectId(formData.get("id")),
  })
  client.close()
  revalidatePath("/")
  redirect("/")
}
