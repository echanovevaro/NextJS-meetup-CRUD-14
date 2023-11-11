import classes from "./MeetupItem.module.css"
import Card from "../ui/Card"
import NavigationButton from "../ui/NavigationButton"
import DeleteMeetupForm from "./DeleteMeetupForm"

function MeetupDetails(props) {
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
            Update
          </NavigationButton>
        </div>
      </div>
    </Card>
  )
}

export default MeetupDetails
