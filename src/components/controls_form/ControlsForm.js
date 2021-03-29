import { withFormik } from 'formik'
import { Form } from 'formik'
import { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { UPDATE_COMPONENT_STYLES } from '../../redux/types/components_types'
import { MyInput } from '../customInputs/CustomInputs'
import { MyTextarea } from '../customTextarea/CustomTextarea'

const FormView = ({ values, handleChange }) => {
  /**
   * Redux
   */
  const dispatch = useDispatch()

  /**
   * Update redux with changes
   */
  const updateRedux = e => {
    dispatch({ type: UPDATE_COMPONENT_STYLES, payload: e.target.value })
    handleChange(e)
  }

  /**
   * Render
   */
  return (
    <>
      <Form autoComplete='off' style={{ width: '100%' }}>
        <MyInput
          onChange={updateRedux}
          name='name'
          label='Component Name'
          value={values.name}
        />

        <MyTextarea
          onChange={updateRedux}
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
