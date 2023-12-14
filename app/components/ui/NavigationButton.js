"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"

export default function NavigationButton(props) {
  console.log(props)
  const router = useRouter()
  if (props.id) {
    console.log("entra", {
      meetup: {
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      },
    })
    updateMeetup({
      id: props.id,
      title: props.title,
      image: props.image,
      address: props.address,
      description: props.description,
    })
    console.log("sale", useMeetupsStore.getState())
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
