import Link from "next/link"
// import Card from "../ui/Card"
import classes from "./MeetupItem.module.css"

// export default function MeetupItem(props) {
//   return (
//     <Card>
//       <div className={classes.image}>
//         <img
//           src={props.image}
//           alt={props.title}
//         />
//       </div>
//       <div className={classes.content}>
//         <h4 className="font-medium text-xl">{props.title}</h4>
//         <small>{props.address}</small>
//       </div>
//       <div className={classes.actions}>
//         <Link href={`/${props.id}`}> Show Details </Link>
//       </div>
//     </Card>
//   )
// }

import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function MeetupItem({ meetup }) {
  return (
    <Card className="text-white">
      <Card.Img
        className="rounded-0"
        src={meetup.image}
        alt="Card image"
      />
      <Card.ImgOverlay
        className={`${classes.overlay} d-flex justify-content-end align-items-center flex-column`}
      >
        <Card.Title>{meetup.title}</Card.Title>
        <Card.Text>{meetup.address}</Card.Text>
      </Card.ImgOverlay>
      <Link
        href={`/${meetup.id}`}
        className="stretched-link"
      />
    </Card>
  )
}

export default MeetupItem
