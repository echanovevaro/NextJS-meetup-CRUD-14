import { remove } from "@/app/services/actions"

export default function DeleteMeetupForm({ id }) {
  function handleSubmit(e) {  
    e.preventDefault()
    remove(id)
  }
  return (
    <>
      <form action={handleSubmit}>
        <input type="hidden" name="id" defaultValue={id} />
        <button type="submit">Delete</button>
      </form>
    </>
  )
}
