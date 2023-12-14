import Link from "next/link"
import Card from "../ui/Card"
import classes from "./MeetupItem.module.css"

export default function MeetupItem(props) {
  return (
    <Card>
      <div className={classes.image}>
        <img
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className={classes.content}>
        <h4 className="font-medium text-xl">{props.title}</h4>
        <small>{props.address}</small>
      </div>
      <div className={classes.actions}>
        <Link href={`/${props.id}`}> Show Details </Link>
      </div>
    </Card>
  )
}
