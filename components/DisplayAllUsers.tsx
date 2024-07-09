import { getAllUsers } from "@/app/actions/user"
import UserFormModal from "./UserFormModal"
import Image from "next/image"

const DisplayAllUsers = async () => {
  const allUsers = await getAllUsers()

  const tableRowsOfUsers = allUsers.map((user) => {
    return (
      <tr key={user.id}>
        <th>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.profile?.role}</td>
        <td>
          <Image
            className="rounded-full w-10 h-10 m-0"
            src={user.profile?.avatar}
            alt={`${user.name}'s avatar`}
            width={30}
            height={30}
          />
        </td>
      </tr>
    )
  })

  return (
    <div className="prose mt-8">
      <h1>Users</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>{tableRowsOfUsers}</tbody>
        </table>
      </div>

      <UserFormModal />
    </div>
  )
}
export default DisplayAllUsers
