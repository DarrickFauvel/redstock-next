import { getAllUsers } from "@/app/actions/user"

const DisplayAllUsers = async () => {
  const allUsers = await getAllUsers()
  // console.log(allUsers)

  return <div className="mt-8">DisplayAllUsers</div>
}
export default DisplayAllUsers
