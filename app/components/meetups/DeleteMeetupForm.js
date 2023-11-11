import { remove } from "@/app/actions"

export default function DeleteMeetupForm(props) {
  async function deleteMeetup(formData) {
    "use server"
    await remove(formData)
  }
  return (
    <>
      <form action={deleteMeetup}>
        <input type="hidden" name="id" defaultValue={props.id} />
        <button>Delete</button>
      </form>
    </>
  )
}
