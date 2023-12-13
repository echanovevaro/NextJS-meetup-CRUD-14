"use client"

import { useRouter } from "next/navigation"
import useMeetupsStore from "@/src/store"
import Link from "next/link"

export default function NavigationButton(props) {
  const updateMeetup = useMeetupsStore((state) => state.updateMeetup)
  console.log(props)
  const router = useRouter()
  if(props.id){
    console.log('entra', {meetup: {id: props.id, title: props.title, image: props.image, address: props.address, description: props.description}})
    updateMeetup({id: props.id, title: props.title, image: props.image, address: props.address, description: props.description})
    console.log('sale', useMeetupsStore.getState())
  }
  // const handleClick = () => {
  //   if(props.id){
  //     console.log('entra', {meetup: {id: props.id, title: props.title, image: props.image, address: props.address, description: props.description}})
  //     updateMeetup({id: props.id, title: props.title, image: props.image, address: props.address, description: props.description})
  //     console.log('sale', useMeetupsStore.getState())
  //   }
  //   router.push(props.path)
  // }
  return <Link href={props.path}>{props.children}</Link>
}
