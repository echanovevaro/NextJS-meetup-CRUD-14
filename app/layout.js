import { Inter } from "next/font/google"
import classes from "./layout.module.css"
import MainNavigation from "./components/meetups/MainNavigation"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Meetups CRUD</title>
        <meta name="description" content="CRUD de meetups con nextJS 14" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <MainNavigation />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  )
}
