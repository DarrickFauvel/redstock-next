import { getAllUsers } from "@/app/actions/user"
import UserFormModal from "./UserFormModal"

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
    <div className="prose">
      <h1>Users</h1>
      <div className="flex flex-col overflow-x-auto">
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

      <UserFormModal />
    </div>
  )
}
export default DisplayAllUsers
