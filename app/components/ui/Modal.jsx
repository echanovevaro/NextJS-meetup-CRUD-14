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
      <div className={classes.dialogContainer}>
        <dialog
          open
          className={classes.customModal}
        >
          {children}
        </dialog>
      </div>
    </>,
    document.getElementById("modal")
  )
}
