"use client"

import Link from "next/link"
import classes from "./MainNavigation.module.css"
import { usePathname } from "next/navigation"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export default function MainNavigation() {
  const pathname = usePathname()
  return (
    <header className={classes.header}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={classes.headerContainer}
      >
        <Link
          className={classes.logo}
          href="/"
        >
          Next14 Meetups
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className={`${classes.transparent} me-auto my-2 my-lg-0 text-end`}
            navbarScroll
          >
            <Nav.Link
              eventKey="1"
              as={Link}
              href="/#meetups"
            >
              All meetups
            </Nav.Link>
            <Nav.Link
              eventKey="2"
              as={Link}
              href="/new"
            >
              Add new meetup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
