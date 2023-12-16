"use client"

import { remove } from "@/app/services/actions"
import { useState } from "react"

export default function DeleteMeetupForm({ id }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  async function handleSubmit() { 
    setIsSubmitting(true)
    await remove(id)
  }
  return (
    <>
      <form action={handleSubmit}>
        <input type="hidden" name="id" defaultValue={id} />
        <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Deleting' : 'Delete'}</button>
      </form>
    </>
  )
}
