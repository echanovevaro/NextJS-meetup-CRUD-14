"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import classes from "./NewMeetupForm.module.css"
import { create, update } from "@/app/services/actions"
import { useEffect } from "react"
import Alert from "react-bootstrap/Alert"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Link from "next/link"

const meetupSchema = z.object({
  title: z.string().min(10).max(100),
  image: z.string().min(1).url(),
  datetime: z.string().min(1).transform((str) => new Date(str)),
  address: z.string().min(10).max(100),
  description: z.string().min(20).max(500),
})

function NewMeetupForm({ meetup }) {
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
      datetime: meetup?.datetime || "",
      address: meetup?.address || "",
      description: meetup?.description || "",
    },
  })

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [errors])

  function onSubmit(data) {
    if (meetup) {
      update(meetup.id, data)
    } else {
      create(data)
    }
    reset();
  }
  return (
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
          />
          {errors.title && (
            <small className="text-danger">{errors.title?.message}</small>
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
          />
          {errors.address && (
            <small className="text-danger">{errors.address?.message}</small>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingDateTime"
          label="Date"
          className="mb-2"
        >
          <Form.Control
            type="datetime"
            {...register("datetime")}
          />
          {errors.datetime && (
            <small className="text-danger">{errors.datetime?.message}</small>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingImage"
          label="Image URL"
          className="mb-2"
        >
          <Form.Control
            type="text"
            {...register("image")}
          />
          {errors.image && (
            <small className="text-danger">{errors.image?.message}</small>
          )}
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingDescription"
          label="Description"
        >
          <Form.Control
            as="textarea"
            style={{ height: "200px" }}
            {...register("description")}
          />
          {errors.description && (
            <small className="text-danger">{errors.description?.message}</small>
          )}
        </FloatingLabel>

        <Stack
          direction="horizontal"
          className="d-flex justify-content-end gap-0 mb-3 mt-4 border-start-0 border-end-0"
        >
          <Button
            as={Link}
            href={`/`}
            variant="link"
            className={classes.textWhite}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="outline-light"
          >
            Submit
          </Button>
        </Stack>
    </form>
    // <Card>
    //   <form className={classes.form} action={meetup ? update : create}>
    //     <input type="hidden" name="id" defaultValue={meetup ? meetup.id : ""} />
    //     <div className={classes.control}>
    //       <label htmlFor="title">Meetup Title</label>
    //       <input
    //         type="text"
    //         required
    //         id="title"
    //         name="title"
    //         defaultValue={meetup ? meetup.title : ""}
    //       />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="image">Meetup Image</label>
    //       <input
    //         type="url"
    //         required
    //         id="image"
    //         name="image"
    //         defaultValue={meetup ? meetup.image : ""}
    //       />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="address">Address</label>
    //       <input
    //         type="text"
    //         required
    //         id="address"
    //         name="address"
    //         defaultValue={meetup ? meetup.address : ""}
    //       />
    //     </div>
    //     <div className={classes.control}>
    //       <label htmlFor="description">Description</label>
    //       <textarea
    //         id="description"
    //         required
    //         rows="5"
    //         name="description"
    //         defaultValue={meetup ? meetup.description : ""}
    //       ></textarea>
    //     </div>

    //     <div className={classes.actions}>
    //       <button>{meetup ? "Update" : "Create"}</button>
    //     </div>
    //   </form>
    // </Card>
  )
}

export default NewMeetupForm
