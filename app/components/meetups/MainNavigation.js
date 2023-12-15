"use client"

import Link from "next/link"
import classes from "./MainNavigation.module.css"
import { usePathname } from "next/navigation"
import React from "react" // Add missing import statement

export default function MainNavigation() {
  const pathname = usePathname()
  return (
    <header className={classes.header}>
      <div className={classes.headerContainer}>
        <Link
          className={classes.logo}
          href="/"
        >
          Next 14 Meetups
        </Link>
        <nav className="d-flex gap-2">

                <Link
                  href="/#meetups"
                  className={`${pathname === "/#meetups" ? classes.active : ""} `}
                >
                  All meetups
                </Link>
                <Link
                  href="/#new"
                  className={`${pathname === "/#new" ? classes.active : ""} `}
                >
                  Add new meetup
                </Link>
        </nav>
      </div>
    </header>
  )
}
