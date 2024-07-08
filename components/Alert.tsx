import { useEffect } from "react"

type AlertProps = {
  setIsSubmitted: (arg0: boolean) => {}
  message: string
}

const Alert = ({ values }: { values: AlertProps }) => {
  const { setIsSubmitted, message } = values

  useEffect(() => {
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }, [setIsSubmitted])

  return (
    <div className="alert alert-info">
      <span>{message}</span>
    </div>
  )
}
export default Alert
