"use client"
import { getSingleUser, updateUser } from "@/app/actions/user"
import { useEffect, useState } from "react"

import Toast from "@/components/Toast"

const EditUserForm = ({ id }: { id: number }) => {
  const [formState, setFormState] = useState({
    id: null,
    name: null,
    email: null,
    avatar: null,
    role: "User",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const getUser = async (id: number) => {
      const data = await getSingleUser(id)

      if (data) {
        // console.log(data)
        setFormState({
          id: data.id,
          name: data?.email,
          email: data?.email,
          avatar: data.profile?.avatar,
          role: data.profile?.role,
        })
      } else {
        return
      }
    }
    getUser(id)
  }, [])

  const handleChange = (e: any) => {
    const { name, value, type } = e.target
    setFormState((prevFormState) => ({
      ...prevFormState,
      [name]: type === "checkbox" ? e.target.checked : value,
    }))
  }

  const handleSubmit = async () => {
    // console.log(formState)
    if (!formState.name || !formState.email || !formState.role) {
      return
    }

    try {
      await updateUser(formState)
      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="prose mt-8">
      <h1>Update User</h1>
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
export default EditUserForm
