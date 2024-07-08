import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <div className="flex flex-col gap-4">
        <Link className="btn" href="/users">
          List Users
        </Link>
        <Link className="btn" href="/users/add">
          Add User
        </Link>
      </div>
    </main>
  )
}
