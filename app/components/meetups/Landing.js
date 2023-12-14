"use client"

import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import "bootstrap/dist/css/bootstrap.min.css"
import classes from "./Landing.module.css"
import Link from "next/link"
import NewMeetupForm from "./NewMeetupForm"

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
            <Carousel.Caption className={classes.caption}>
              <h3>{meetups[0]?.title}</h3>
              <p>{meetups[0]?.address}</p>
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
            <Carousel.Caption className={classes.caption}>
              <h3>{meetups[1]?.title}</h3>
              <p>{meetups[1]?.address}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formContent}>
          <h5 className="mb-4">Publish your meetup</h5>
          <NewMeetupForm />
        </div>
      </div>
    </>
  )
}
