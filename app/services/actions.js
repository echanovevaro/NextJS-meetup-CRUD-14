"use server"

import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { connectToCollection } from "./utils"
import { MONGO_COLLECTION_MEETUPS } from "./constants"

export async function create(data) {
  "use server"
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )
  const newItem = await collection.insertOne({
    title: data.title,
    image: data.image,
    address: data.address,
    city: data.city,
    description: data.description,
    datetime: data.datetime,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  client.close()
  revalidatePath("/")
  redirect("/#meetups")
}

export async function update(id, data) {
  console.log("data", data)
  ;("use server")
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )

  await collection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    {
      $set: {
        title: data.title,
        image: data.image,
        address: data.address,
        description: data.description,
        datetime: data.datetime,
        city: data.city,
        updatedAt: new Date().toISOString(),
      },
    }
  )
  client.close()
  revalidatePath("/")
  redirect(`/${id}`)
}

export async function remove(id) {
  "use server"
  const [collection, client] = await connectToCollection(
    MONGO_COLLECTION_MEETUPS
  )
  await collection.findOneAndDelete({
    _id: new ObjectId(id),
  })
  client.close()
  revalidatePath("/")
  redirect("/")
}
