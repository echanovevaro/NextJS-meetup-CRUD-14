import Card from "../ui/Card"
import NavigationButton from "../ui/NavigationButton"
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
        <NavigationButton
          path={`/${props.id}`}
          {...props}
        >
          <button>Show Details</button>
        </NavigationButton>
      </div>
    </Card>
  )
}
