'use client'

import useMeetupsStore from "@/src/store"
import React from "react"

export default function MeetupDetailsWrapper(props) {
  console.log(props)
  const meetup = useMeetupsStore((state) => state.meetup)
  console.log(React.isValidElement(props.children))
  return <div>{React.Children.toArray(props.children).map((child) => React.cloneElement(child, { meetup }))};
    </div>
}


