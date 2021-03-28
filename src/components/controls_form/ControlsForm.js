import { TextField } from '@material-ui/core'
import { withFormik } from 'formik'
import { Form, Field } from 'formik'
import { GenInput } from '../customInputs/CustomInputs'

const FormView = ({ values, handleChange }) => {
  return (
    <>
      <Form autoComplete='off' style={{ width: '100%' }}>
        <GenInput
          onChange={handleChange}
          name='name'
          label='Component Name'
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
