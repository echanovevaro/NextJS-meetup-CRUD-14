"use client"

import Link from "next/link"
import classes from "./MainNavigation.module.css"
import { usePathname } from "next/navigation"

const links = [
  { name: "All Meetups", href: "/" },
  {
    name: "Add New",
    href: "/new",
  },
]

export default function MainNavigation() {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          {links.map(({ name, href }) => (
            <li key={name}>
              <Link
                href={href}
                prefetch={href !== "/"}
                className={pathname === href ? classes.active : ""}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
