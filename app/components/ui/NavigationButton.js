"use client"

import { useRouter } from "next/navigation"

function NavigationButton({ path, children }) {
  const router = useRouter()
  return <button onClick={() => router.push(path)}>{children}</button>
}

export default NavigationButton
