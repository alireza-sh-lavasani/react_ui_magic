import { withFormik } from 'formik'
import { Form } from 'formik'
import { connect } from 'react-redux'
import {
  SHOULD_COMPONENTS_UPDATE,
  UPDATE_COMPONENT_DATA,
} from '../../redux/types/components_types'
import MyButton from '../customButtons/CustomButtons'
import { MyInput } from '../customInputs/CustomInputs'
import { MyTextarea } from '../customTextarea/CustomTextarea'
import { FieldTitle, FieldValue, Row } from './controlsForm_styles'

/**
 * Raw Form
 */
const FormView = ({ values, handleChange }) => {
  /**
   * Render
   */
  return (
    <>
      <Form autoComplete='off' style={{ width: '100%' }}>
        <Row>
          <FieldTitle>Component ID:</FieldTitle>
          <FieldValue>{values.id}</FieldValue>
        </Row>

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

        <MyButton text='Update Component' type='submit' />
      </Form>
    </>
  )
}

/**
 * Formik Logic
 */
const ControlsForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: ({ selectedComp }) => {
    if (selectedComp) {
      const { id, name, styles } = selectedComp

      return {
        id,
        name,
        styles,
      }
    }

    return {
      id: null,
      name: '',
      styles: '',
    }
  },
  handleSubmit: (
    values,
    { props: { updateComponentData, shouldComponentUpdate } }
  ) => {
    console.log(values)
    updateComponentData(values)
    shouldComponentUpdate(true)
  },
})(FormView)

/**
 * Redux
 */
export default connect(
  // mapStateToProps
  ({ components, selectedCompID }) => {
    const selectedComp = components.find(({ id }) => id == selectedCompID)
    return { selectedComp }
  },
  // mapDispatchToProps
  dispatch => ({
    updateComponentData: payload =>
      dispatch({ type: UPDATE_COMPONENT_DATA, payload }),
    shouldComponentUpdate: payload =>
      dispatch({ type: SHOULD_COMPONENTS_UPDATE, payload }),
  })
)(ControlsForm)
