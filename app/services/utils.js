import { MongoClient } from "mongodb"
const { MONGO_CONNECTION_CHAIN, MONGO_DATABASE } = process.env

export async function connectToCollection(collectionName) {
    const client = await MongoClient.connect(MONGO_CONNECTION_CHAIN)
    const database = client.db(MONGO_DATABASE)
    const collection = database.collection(collectionName)
  
    return [collection, client]
  }