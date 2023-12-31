import { Roboto } from "next/font/google"
import classes from "./layout.module.css"
import MainNavigation from "./components/meetups/MainNavigation"
import "./globals.css"

export const roboto = Roboto({
  weight: ["400", "700", "300"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Meetups CRUD</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
        />
        <meta
          name="description"
          content="CRUD de meetups con nextJS 14"
        />
      </head>
      <body className={`${roboto.className} antialiased`}>
        <div id="modal" />
        <MainNavigation />
        <main className={classes.main}>{children}</main>
      </body>
    </html>
  )
}
