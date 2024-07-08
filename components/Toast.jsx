import Alert from "./Alert"

const Toast = ({ values }) => {
  const { isSubmitted } = values

  return (
    <>
      <div className="toast">
        {isSubmitted ? <Alert values={values} /> : null}
      </div>
    </>
  )
}
export default Toast
