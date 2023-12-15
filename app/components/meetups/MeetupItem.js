import Link from "next/link"
// import Card from "../ui/Card"
import classes from "./MeetupItem.module.css"
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faClock } from "@fortawesome/free-regular-svg-icons"

import Card from "react-bootstrap/Card"

function MeetupItem({ meetup }) {
  const datetime = moment(meetup.datetime).format("YYYY/MM/DD HH:mm")
  return (
    <Card className="text-white">
      <Card.Img
        className="rounded-0"
        src={meetup.image}
        alt="Card image"
      />
      <Link
        href={`/${meetup.id}`}
        className="stretched-link"
      />
      <Card.ImgOverlay
        className={`${classes.overlay} d-flex justify-content-between flex-column`}
      >
        <h6 className="text-md fw-light">{meetup.title}</h6>
        <h6 className="hidden mb-1">
                  <div className="d-flex justify-content-end align-items-center gap-2">
          <p className="text-xs fw-lighter text-right m-0 text-blue"><FontAwesomeIcon icon={faLocationDot}/></p>
        <Card.Text className="text-xs fw-lighter text-right mb-0">{datetime}</Card.Text>
        </div>
        <div className="d-flex justify-content-end align-items-center gap-2">
          <p className="text-xs fw-lighter text-right m-0 text-blue"><FontAwesomeIcon icon={faClock}/></p>
        <Card.Text className="text-xs fw-lighter text-right mb-0">{meetup.address} {meetup.city}</Card.Text>
        </div>
        </h6>
      </Card.ImgOverlay>
    </Card>
  )
}

export default MeetupItem
