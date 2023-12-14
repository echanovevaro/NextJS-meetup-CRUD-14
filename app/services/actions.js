"use server"

import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { connectToCollection } from "./utils"
import { MONGO_COLLECTION_MEETUPS } from "./constants"

export async function create(formData) {
  "use server"
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )
  await collection.insertOne({
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
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )
  const id = formData.get("id")
  const result = await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        title: formData.get("title"),
        image: formData.get("image"),
        address: formData.get("address"),
        description: formData.get("description"),
      },
    },
    {
      new: true,
    }
  )
  client.close()
  useMeetupsStore.setState({
    meetup: {
      id: result._id.toString(),
      title: result.title,
      image: result.image,
      address: result.address,
      description: result.description,
    },
  })
  revalidatePath("/")
  redirect(`/${id}`)
}

export async function remove(formData) {
  "use server"
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )
  await collection.findOneAndDelete({
    _id: new ObjectId(formData.get("id")),
  })
  client.close()
  revalidatePath("/")
  redirect("/")
}
