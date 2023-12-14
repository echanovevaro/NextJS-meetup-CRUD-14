"use client"

import Link from "next/link"
import classes from "./MainNavigation.module.css"
import { usePathname } from "next/navigation"
import React from "react" // Add missing import statement

const links = [
  { name: "Meetups", href: "/meetups" },
  {
    name: "Publish one",
    href: "/new",
  },
]

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
        <nav>
          <ul>
            {links.map(({ name, href }) => (
              <li
                key={name}
                className="font-light text-sm"
              >
                <Link
                  href={href}
                  className={pathname === href ? classes.active : ""}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
