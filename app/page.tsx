import DisplayAllUsers from "@/components/DisplayAllUsers"
import NewUserForm from "@/components/NewUserForm"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <NewUserForm />
      <DisplayAllUsers />
    </main>
  )
}
