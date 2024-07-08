"use client"
import { createUser } from "@/app/actions/user"
import { useState } from "react"

import Toast from "@/components/Toast"

const NewUserForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    avatar: "",
    role: "",
  })
  // const [user, setUser] = useState({ name: "", email: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value, type } = e.target
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === "checkbox" ? e.target.checked : value,
    }))
    // setUser((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }))
  }

  const handleSubmit = async () => {
    if (!formState.name || !formState.email || !formState.role) {
      return
    }

    try {
      await createUser(formState)
      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="prose">
      <h1>Create User</h1>
      <form className="flex flex-col gap-4" action={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input
            className="grow"
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            // required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            className="grow"
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            // required
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          Avatar
          <input
            className="grow"
            type="text"
            id="avatar"
            name="avatar"
            value={formState.avatar}
            onChange={handleChange}
            // required
          />
        </label>

        <select
          className="select select-bordered w-full max-w-xs"
          name="role"
          id="role"
          value={formState.role}
          defaultValue="User"
          onChange={handleChange}>
          <option disabled>--Select a role--</option>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
          <option value="Demo">Demo</option>
        </select>

        <button className="btn">Submit</button>
      </form>

      {/* <Toast
        values={{ isSubmitted, setIsSubmitted, message: "New user created." }}
      /> */}
    </div>
  )
}
export default NewUserForm
