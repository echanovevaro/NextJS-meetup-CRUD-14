"use client"

import MeetupItem from "./MeetupItem"
import classes from "./MeetupList.module.css"

function MeetupList({ meetups }) {
  console.log(meetups)
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <li key={meetup.id}>
          <MeetupItem
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        </li>
      ))}
    </ul>
  )
}

export default MeetupList
