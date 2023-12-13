'use client'

import useMeetupsStore from "@/src/store"
import MeetupDetails from "../components/meetups/MeetupDetails"

export default function MeetupDetailsPage(props) {
  // const { meetupId } = params
  console.log('MeetupPage state', useMeetupsStore.getState())
console.log('MeetupPage props', props)
  return (

    <MeetupDetails {...useMeetupsStore.getState().meetup} />
  )
}
