import { createPortal } from "react-dom"
import classes from "./Modal.module.css"

export default function Modal({ children, onClose }) {
  console.log(document.getElementById("modal"))
  return createPortal(
    <>
      <div
        className={classes.backdrop}
        onClick={onClose}
      ></div>
      <dialog
        open
        className={classes.customModal}
      >
        {children}
      </dialog>
    </>,
    document.getElementById("modal")
  )
}
