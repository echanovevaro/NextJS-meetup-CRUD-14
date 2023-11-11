import Card from "../ui/Card"
import classes from "./NewMeetupForm.module.css"
import { create, update } from "@/app/actions"

function NewMeetupForm(props) {
  async function createMeetup(formData) {
    "use server"
    await create(formData)
  }

  async function updateMeetup(formData) {
    "use server"
    await update(formData)
  }
  return (
    <Card>
      <form
        className={classes.form}
        action={props.meetup ? updateMeetup : createMeetup}
      >
        <input
          type="hidden"
          name="id"
          defaultValue={props.meetup ? props.meetup.id : ""}
        />
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            defaultValue={props.meetup ? props.meetup.title : ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            defaultValue={props.meetup ? props.meetup.image : ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            defaultValue={props.meetup ? props.meetup.address : ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            name="description"
            defaultValue={props.meetup ? props.meetup.description : ""}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Save</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
