'use client'

import classes from "./MeetupItem.module.css"
import Card from "../ui/Card"
import NavigationButton from "../ui/NavigationButton"
import DeleteMeetupForm from "./DeleteMeetupForm"
// import { getOne } from "@/app/services/loaders"
import useMeetupsStore from "@/src/store"
import { useEffect } from "react"

export default function MeetupDetails(props) {
  useEffect(() => {
    useMeetupsStore.persist.rehydrate();
  }, [])
  console.log('MeetupDetails', props)
  let meetup = useMeetupsStore.getState().meetup
  console.log('MeetupDetails', useMeetupsStore.getState())
  // if(!meetup?.id){
  //   meetup = await getOne(props.meetupId)
  // }
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <div className={`${classes.actions} flex gap-2 justify-center`}>
          <DeleteMeetupForm id={props.id} />
          <NavigationButton path={`/${props.id}/update`}>
            <button>Update</button>
          </NavigationButton>
        </div>
      </div>
    </Card>
  )
}

