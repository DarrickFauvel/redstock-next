"use client"

const AddUserButton = () => {
  return (
    <button
      className="btn btn-primary btn-sm"
      onClick={() => document.getElementById("user_form_modal").showModal()}>
      Add user
    </button>
  )
}
export default AddUserButton
