import {
  ADD_COMPONENT,
  UPDATE_COMPONENT,
  UPDATE_COMPONENT_DATA,
} from '../../types/components_types'
import { addComponent } from './addComponent'
import { updateComponent } from './updateComponent'
import { updateComponentData } from './updateComponentData'

/**
 * Components reducer
 */
const components = (state = [], { type, payload }) => {
  switch (type) {
    /*****************************************************
     * Add new component
     *****************************************************/
    case ADD_COMPONENT:
      return addComponent(state, payload)

    /*****************************************************
     * Update selected component to re-render react
     *****************************************************/
    case UPDATE_COMPONENT:
      return updateComponent(state, payload)

    /*****************************************************
     * Update selected component data with user input
     *****************************************************/
    case UPDATE_COMPONENT_DATA:
      return updateComponentData(state, payload)

    default:
      return state
  }
}

export default components
