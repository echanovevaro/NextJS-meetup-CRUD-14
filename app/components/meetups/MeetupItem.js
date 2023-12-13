import Card from "../ui/Card"
import NavigationButton from "../ui/NavigationButton"
import classes from "./MeetupItem.module.css"

export default function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <NavigationButton path={`/${props.id}`} {...props}>
            <button>Show Details</button>
          </NavigationButton>
        </div>
      </Card>
    </li>
  )
}

