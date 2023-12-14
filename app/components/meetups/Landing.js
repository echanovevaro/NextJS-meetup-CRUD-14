"use client"

import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import "bootstrap/dist/css/bootstrap.min.css"
import classes from "./Landing.module.css"
import Link from "next/link"
import NewMeetupForm from "./NewMeetupForm"
import MeetupList from "./MeetupList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

export default function Landing({ meetups }) {
  console.log(meetups)
  return (
    <>
      <div className={classes.carouselContainer}>
        <Carousel>
          <Carousel.Item>
            <Link
              className="stretched-link"
              href={`/${meetups[0]?.id}`}
            />
            <Image
              src={meetups[0]?.image}
              alt={meetups[0]?.title}
              fluid
              className={classes.carouselImg}
            />
            <Carousel.Caption>
              <div className={classes.caption}>
                <h3>{meetups[0]?.title}</h3>
                <p className={classes.description}>{meetups[0].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Link
              className="stretched-link"
              href={`/${meetups[1]?.id}`}
            />
            <Image
              src={meetups[1]?.image}
              alt={meetups[1]?.title}
              fluid
              className={classes.carouselImg}
            />
            <Carousel.Caption>
              <div className={classes.caption}>
                <h3>{meetups[1]?.title}</h3>
                <p className={classes.description}>{meetups[1].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={classes.formContainer}>
        <h1 className="m-4 mt-5 text-center display-6">Our meetups</h1>
        <div className={classes.formContent}>
          <MeetupList meetups={meetups} />
          {/* <p className="text-center">Are you aware of a new meetup? Share with us!</p>
          <NewMeetupForm /> */}
        </div>
      </div>
    </>
  )
}
