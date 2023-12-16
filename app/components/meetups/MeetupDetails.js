"use client"

import classes from "./MeetupItem.module.css"
import Card from "../ui/Card"
import NavigationButton from "../ui/NavigationButton"
import DeleteMeetupForm from "./DeleteMeetupForm"
import moment from "moment"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

export default function MeetupDetails({ meetup }) {
  const datetime = moment(meetup.datetime).format("YYYY/MM/DD HH:mm")
  return (
    <Card>
      <div className={classes.image}>
        <img
          src={meetup.image}
          alt={meetup.title}
        />
      </div>
      <div className={classes.content}>
        <h1 className="display-6">{meetup.title}</h1>
        <p className="fw-light">{meetup.description}</p>
        <p className="fw-lighter m-0"><span className="text-blue"><FontAwesomeIcon icon={faLocationDot}/></span> &nbsp; {meetup.address} {meetup.city}</p>
        <p className="fw-lighter m-0"><span className="text-blue"><FontAwesomeIcon icon={faClock} /></span> &nbsp; {datetime}</p>

        <div className={`${classes.actions} flex gap-2 justify-center`}>
          <DeleteMeetupForm id={meetup.id} />
          <NavigationButton path={`/${meetup.id}/update`}>
            <button>Update</button>
          </NavigationButton>
        </div>
      </div>
    </Card>
  )
}
