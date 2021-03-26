import { withFormik } from 'formik'

const Form = () => {
  return <></>
}

const ControlsForm = withFormik({
  enableReinitialize: true,
  handleSubmit: (values, { props }) => {
    console.log(values)
  },
})(Form)

export default ControlsForm
