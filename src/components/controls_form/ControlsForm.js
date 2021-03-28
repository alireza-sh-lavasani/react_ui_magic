import { TextField } from '@material-ui/core'
import { withFormik } from 'formik'
import { Form, Field } from 'formik'
import { GenInput } from '../customInputs/CustomInputs'

const FormView = ({ values, handleChange }) => {
  console.log(values)

  return (
    <>
      <Form>
        <GenInput
          onChange={handleChange}
          name='name'
          label='Name'
          value={values.name}
        />
      </Form>
    </>
  )
}

const ControlsForm = withFormik({
  enableReinitialize: true,
  handleSubmit: (values, { props }) => {
    console.log(values)
  },
})(FormView)

export default ControlsForm
