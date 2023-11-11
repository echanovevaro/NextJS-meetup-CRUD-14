import NewMeetupForm from "@/app/components/meetups/NewMeetupForm"
import { MongoClient, ObjectId } from "mongodb"

export default async function MeetupUpdatePage({ params }) {
  const { meetupId } = params
  const client = await MongoClient.connect(
    "mongodb+srv://meetupsAdmin:trewqMN9876@clustervaro.13obq.mongodb.net/?retryWrites=true&w=majority"
  )
  const db = client.db("meetups")
  const collection = db.collection("meetups")
  const meetup = await collection.findOne({ _id: new ObjectId(meetupId) })
  client.close()

  return (
    <NewMeetupForm
      meetup={{
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      }}
    />
  )
}

// export async function getStaticPaths() {
//   const client = await MongoClient.connect(
//     "mongodb+srv://meetupsAdmin:trewqMN9876@clustervaro.13obq.mongodb.net/?retryWrites=true&w=majority"
//   )
//   const db = client.db()
//   const collection = db.collection("meetups")
//   const meetups = (await collection.find({}, { _id: 1 }).toArray()).map(
//     (meetup) => meetup._id.toString()
//   )
//   client.close()
//   return {
//     fallback: "blocking",
//     paths: meetups.map((meetupId) => ({
//       params: {
//         meetupId,
//       },
//     })),
//   }
// }

// export async function getStaticProps(context) {
//   const meetupId = context.params.meetupId
//   const client = await MongoClient.connect(
//     "mongodb+srv://meetupsAdmin:trewqMN9876@clustervaro.13obq.mongodb.net/?retryWrites=true&w=majority"
//   )
//   const db = client.db("meetups")
//   const collection = db.collection("meetups")
//   const meetup = await collection?.findOne({ _id: new ObjectId(meetupId) })
//   client.close()
//   return {
//     props: {
//       meetup: {
//         id: meetup._id.toString(),
//         title: meetup.title,
//         image: meetup.image,
//         address: meetup.address,
//         description: meetup.description,
//       },
//     },
//   }
// }
