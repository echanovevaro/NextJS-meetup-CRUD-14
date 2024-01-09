"use client"

import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import classes from "./NewMeetupForm.module.css"
import { create, update } from "@/app/services/actions"
import { useEffect, useState } from "react"
import Alert from "react-bootstrap/Alert"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Link from "next/link"

const meetupSchema = z.object({
  title: z.string().min(6).max(100),
  image: z.string().min(1, "Required").url(),
  datetime: z
    .string()
    .min(1, "Required")
    .transform((str) => new Date(str).toISOString()),
  address: z.string().min(6).max(100),
  city: z.string().min(6).max(60),
  description: z.string().min(20).max(500),
})

function NewMeetupForm({ meetup }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  let defaultDateTime = meetup?.datetime ? new Date(meetup.datetime) : null
  defaultDateTime?.setHours(defaultDateTime.getHours() + 1)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(meetupSchema),
    defaultValues: {
      title: meetup?.title || "",
      image: meetup?.image || "",
      datetime: defaultDateTime?.toISOString().split(".")[0] || "",
      address: meetup?.address || "",
      city: meetup?.city || "",
      description: meetup?.description || "",
    },
  })

  async function onSubmit(data) {
    setIsSubmitting(true)

    if (meetup) {
      await update(meetup.id, data)
    } else {
      await create(data)
      // reset()
      // setIsSubmitting(false)
    }
  }
  return (
    <div className="form-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(errors).length > 0 && (
          <Alert
            variant="danger"
            className="mb-4"
          >
            Validation errors, check your inputs
          </Alert>
        )}

        <FloatingLabel
          controlId="floatingTitle"
          label="Title"
          className="mb-2"
        >
          <Form.Control
            type="text"
            {...register("title")}
            placeholder="Title"
          />
          {errors.title && (
            <small className="text-white">{errors.title?.message}</small>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingAddress"
          label="Adress"
          className="mb-2"
        >
          <Form.Control
            type="text"
            {...register("address")}
            placeholder="Address"
          />
          {errors.address && (
            <small className="text-white">{errors.address?.message}</small>
          )}
        </FloatingLabel>

        <div className="d-flex justify-content-start gap-2">
          <FloatingLabel
            className="flex-grow-1 mb-2"
            controlId="floatingCity"
            label="City"
          >
            <Form.Control
              type="text"
              {...register("city")}
              placeholder="city"
            />
            {errors.city && (
              <small className="text-white">{errors.city?.message}</small>
            )}
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingDateTime"
            label="Date"
            className="mb-2"
          >
            <Form.Control
              type="datetime-local"
              {...register("datetime")}
            />
            {errors.datetime && (
              <small className="text-white">{errors.datetime?.message}</small>
            )}
          </FloatingLabel>
        </div>

        <FloatingLabel
          controlId="floatingImage"
          label="Image URL"
          className="mb-2"
        >
          <Form.Control
            type="text"
            {...register("image")}
            placeholder="Image"
          />
          {errors.image && (
            <small className="text-white">{errors.image?.message}</small>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingDescription"
          label="Description"
        >
          <Form.Control
            as="textarea"
            style={{ height: "150px" }}
            {...register("description")}
            placeholder="Description"
          />
          {errors.description && (
            <small className="text-white">{errors.description?.message}</small>
          )}
        </FloatingLabel>

        <Stack
          direction="horizontal"
          className={`${classes.actions} d-flex justify-content-end gap-0 mb-3 mt-2`}
        >
          {meetup && (
            <Button
              as={Link}
              href={`/${meetup.id}`}
              variant="link"
              className="text-blue"
            >
              Cancel
            </Button>
          )}
          <Button
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </Button>
        </Stack>
      </form>
    </div>
  )
}

export default NewMeetupForm
