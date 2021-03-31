import {
  ADD_COMPONENT,
  UPDATE_COMPONENT,
} from '../../types/components_types'
import { addComponent } from './addComponent'
import { updateComponent } from './updateComponent'
import Tree from 'arboreal'

const compsTree = new Tree()

/**
 * Components reducer
 */
const components = (state = compsTree, { type, payload }) => {
  switch (type) {
    /*****************************************************
     * Add new component
     *****************************************************/
    case ADD_COMPONENT:
      return addComponent(state, payload)

    /*****************************************************
     * Update selected component data with user input
     *****************************************************/
    case UPDATE_COMPONENT:
      return updateComponent(state, payload)

    default:
      return state
  }
}

export default components
