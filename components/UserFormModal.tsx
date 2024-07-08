"use client"
import { useRef } from "react"

const UserFormModal = () => {
  const modalRef = useRef(null)

  return (
    <dialog id="user_form_modal" className="modal" ref={modalRef}>
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click on ✕ button to close</p>
      </div>
    </dialog>
  )
}
export default UserFormModal
