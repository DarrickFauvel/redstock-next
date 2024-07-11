import EditUserForm from "./components/EditUserForm"

export default function AddUserPage({ params }) {
  const { id } = params

  return (
    <section className="flex justify-center">
      <EditUserForm id={+id} />
    </section>
  )
}
