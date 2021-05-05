import { withFormik } from 'formik'
import { Form } from 'formik'
import { connect } from 'react-redux'
import shortid from 'shortid'
import {
  TRIGGER_UPDATE,
  UPDATE_COMPONENT,
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
    // on component selection
    if (Object.keys(selectedComp).length > 0) {
      const { id, name, styles } = selectedComp

      return {
        id,
        name,
        styles,
      }
    }

    // default
    return {
      id: null,
      name: '',
      styles: '',
    }
  },
  handleSubmit: (
    values,
    { props: { updateComponentData, triggerUpdate } }
  ) => {
    updateComponentData(values)
    // triggerUpdate(shortid.generate())
  },
})(FormView)

/**
 * Redux
 */
export default connect(
  // mapStateToProps
  ({ components, selectedCompID }) => {
    // components is an instance of arboreal tree which has its own find method. don't mix it up with ES6 array.find
    const selectedComp = components.find(
      ({ data: { id } }) => id == selectedCompID
    )

    console.log({ selectedCompID })
    console.log({ selectedComp })

    return { selectedComp: selectedComp.data }
  },
  // mapDispatchToProps
  dispatch => ({
    updateComponentData: payload =>
      dispatch({ type: UPDATE_COMPONENT, payload }),
    triggerUpdate: payload =>
      dispatch({ type: TRIGGER_UPDATE, payload }),
  })
)(ControlsForm)
