import EditUserForm from "./components/EditUserForm"

export default function AddUserPage({ params }) {
  const { id } = params

  return (
    <section>
      <h1>Add User</h1>
      <EditUserForm id={+id} />
    </section>
  )
}
