"use client"

import Link from "next/link"

export default function NavigationButton(props) {
  return <Link href={props.path}>{props.children}</Link>
}
