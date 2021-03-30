import { withFormik } from 'formik'
import { Form } from 'formik'
import { connect, useDispatch } from 'react-redux'
import {
  SHOULD_COMPONENTS_UPDATE,
  UPDATE_COMPONENT_STYLES,
} from '../../redux/types/components_types'
import MyButton from '../customButtons/CustomButtons'
import { MyInput } from '../customInputs/CustomInputs'
import { MyTextarea } from '../customTextarea/CustomTextarea'

const FormView = ({ values, handleChange }) => {
  /**
   * Redux
   */
  const dispatch = useDispatch()

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

        <MyButton
          text='Update Styles'
          onClick={() => {
            dispatch({ type: UPDATE_COMPONENT_STYLES, payload: values.styles })
            dispatch({ type: SHOULD_COMPONENTS_UPDATE, payload: true })
          }}
        />
      </Form>
    </>
  )
}

const ControlsForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ selectedComp }) => {
    if (selectedComp) {
      const { name, styles } = selectedComp

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
  ({ components, selectedCompID }) => {
    const selectedComp = components.find(({ id }) => id == selectedCompID)
    return { selectedComp }
  },
  // mapDispatchToProps
  {}
)(ControlsForm)
