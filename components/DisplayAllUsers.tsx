import { getAllUsers } from "@/app/actions/user"
import { Allura } from "next/font/google"

const DisplayAllUsers = async () => {
  const allUsers = await getAllUsers()

  const tableRowsOfUsers = allUsers.map((user) => {
    return (
      <tr key={user.id}>
        <th>{user.id}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
      </tr>
    )
  })

  return (
    <div className="mt-8">
      DisplayAllUsers
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>{tableRowsOfUsers}</tbody>
        </table>
      </div>
    </div>
  )
}
export default DisplayAllUsers
