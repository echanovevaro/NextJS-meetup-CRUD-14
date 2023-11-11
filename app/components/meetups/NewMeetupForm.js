import Card from "../ui/Card"
import classes from "./NewMeetupForm.module.css"
import { create, update } from "@/app/actions"

function NewMeetupForm({ meetup }) {
  return (
    <Card>
      <form className={classes.form} action={meetup ? update : create}>
        <input type="hidden" name="id" defaultValue={meetup ? meetup.id : ""} />
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            type="text"
            required
            id="title"
            name="title"
            defaultValue={meetup ? meetup.title : ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            type="url"
            required
            id="image"
            name="image"
            defaultValue={meetup ? meetup.image : ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            name="address"
            defaultValue={meetup ? meetup.address : ""}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            name="description"
            defaultValue={meetup ? meetup.description : ""}
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
