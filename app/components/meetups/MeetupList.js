"use client"

import MeetupItem from "./MeetupItem"
import classes from "./MeetupList.module.css"

function MeetupList({ meetups }) {
  console.log(meetups)
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <li key={meetup.id}>
          <MeetupItem meetup={meetup} />
        </li>
      ))}
    </ul>
  )
}

export default MeetupList
