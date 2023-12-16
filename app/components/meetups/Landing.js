"use client"

import Carousel from "react-bootstrap/Carousel"
import Image from "react-bootstrap/Image"
import "bootstrap/dist/css/bootstrap.min.css"
import classes from "./Landing.module.css"
import Link from "next/link"
import NewMeetupForm from "./NewMeetupForm"
import MeetupList from "./MeetupList"


export default function Landing({ meetups }) {
  return (
    <>
      <div className={classes.carouselContainer}>
        <Carousel>
          {meetups?.length > 0 && (<Carousel.Item>
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
                <h3 className="fw-light">{meetups[0]?.title}</h3>
                <p className={`${classes.description} fw-lighter`}>{meetups[0].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>)}
          {meetups?.length > 1 && (<Carousel.Item>
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
                <h3 className="fw-light">{meetups[1]?.title}</h3>
                <p className={`${classes.description} fw-lighter`}>{meetups[1].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>)}
          {meetups?.length > 2 && (<Carousel.Item>
            <Link
              className="stretched-link"
              href={`/${meetups[2]?.id}`}
            />
            <Image
              src={meetups[2]?.image}
              alt={meetups[2]?.title}
              fluid
              className={classes.carouselImg}
            />
            <Carousel.Caption>
              <div className={classes.caption}>
                <h3 className="fw-light">{meetups[2]?.title}</h3>
                <p className={`${classes.description} fw-lighter`}>{meetups[2].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>)}
        </Carousel>
      </div>
      <div className={classes.meetupsContainer} id='meetups'>
        <h1 className='text-blue m-4 mt-5 pt-4 text-center display-6'>Our meetups</h1>
        <div className={classes.meetupsContent}>
          <MeetupList meetups={meetups} />
        </div>
      </div>
      <div className={classes.formContainer} id='new'>
        <h1 className='text-blue m-4 mt-5 mb-0 pt-4 text-center display-6'>Add a meetup</h1>
        <p className="fw-lighter text-white mb-4 form-content text-center">Organizing a new meetup? Share it with us!</p>

          <NewMeetupForm />
      </div>
    </>
  )
}
