"use client"

import classes from "./MeetupItem.module.css"
import Card from "../ui/Card"
import NavigationButton from "../ui/NavigationButton"
import DeleteMeetupForm from "./DeleteMeetupForm"

export default function MeetupDetails({ meetup }) {
  return (
    <Card>
      <div className={classes.image}>
        <img
          src={meetup.image}
          alt={meetup.title}
        />
      </div>
      <div className={classes.content}>
        <h1>{meetup.title}</h1>
        <small>{meetup.address}</small>
        <p>{meetup.description}</p>
        <div className={`${classes.actions} flex gap-2 justify-center`}>
          <DeleteMeetupForm id={meetup.id} />
          <NavigationButton path={`/${meetup.id}/update`}>
            <button>Update</button>
          </NavigationButton>
        </div>
      </div>
    </Card>
  )
}
