import { remove } from "@/app/actions"

export default function DeleteMeetupForm({ id }) {
  return (
    <>
      <form action={remove}>
        <input type="hidden" name="id" defaultValue={id} />
        <button>Delete</button>
      </form>
    </>
  )
}
