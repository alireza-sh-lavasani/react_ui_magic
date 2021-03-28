import { withFormik } from 'formik'
import { Form } from 'formik'
import { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'
import { MyInput } from '../customInputs/CustomInputs'
import { MyTextarea } from '../customTextarea/CustomTextarea'

const FormView = ({ values, handleChange }) => {
  /**
   * Render
   */
  return (
    <>
      <Form autoComplete='off' style={{ width: '100%' }}>
        <MyInput
          onChange={handleChange}
          name='name'
          label='Component Name'
          value={values.name}
        />

        <MyTextarea
          onChange={handleChange}
          name='styles'
          label='Styles'
          value={values.styles}
        />
      </Form>
    </>
  )
}

const ControlsForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ comps }) => {
    if (comps[0]) {
      const { name, styles } = comps[0]

      return {
        name,
        styles,
      }
    }

    return {
      name: '',
      styles: '',
    }
  },
  handleSubmit: (values, { props }) => {
    console.log(values)
  },
})(FormView)

export default connect(
  // mapStateToProps
  ({ components }) => ({ comps: components }),
  // mapDispatchToProps
  {}
)(ControlsForm)
