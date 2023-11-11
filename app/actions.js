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

export async function create(formData) {
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
  const [collection, client] = await connect()
  const result = await collection.findOneAndDelete({
    _id: new ObjectId(formData.get("id")),
  })
  client.close()
  revalidatePath("/")
  redirect("/")
}
