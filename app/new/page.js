import NewMeetupForm from "@/app/components/meetups/NewMeetupForm"

export default async function MeetupUpdatePage() {
  return (
    <div className="background h-screen">
      <div className="form-container pt-24">
        <NewMeetupForm />
      </div>
    </div>
  )
}
