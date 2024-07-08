"use client"
import { createUser } from "@/app/actions/user"
import { useState } from "react"

import Toast from "./Toast"

const NewUserForm = () => {
  const [user, setUser] = useState({ name: "", email: "" })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (formData: FormData) => {
    const userData = {
      name: formData.get("name")?.toString(),
      email: formData.get("email")?.toString(),
    }

    try {
      await createUser(userData)
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
            value={user.name}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input
            className="grow"
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <button className="btn">Submit</button>
      </form>

      <Toast
        values={{ isSubmitted, setIsSubmitted, message: "New user created." }}
      />
    </div>
  )
}
export default NewUserForm
