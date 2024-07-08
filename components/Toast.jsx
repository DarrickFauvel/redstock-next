"use client"
import Alert from "./Alert"

export default function Toast({ values }) {
  const { isSubmitted } = values

  return (
    <>
      <div className="toast">
        {isSubmitted ? <Alert values={values} /> : null}
      </div>
    </>
  )
}
