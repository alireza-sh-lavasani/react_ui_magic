import {
  ADD_COMPONENT,
  UPDATE_COMPONENT,
  UPDATE_COMPONENT_DATA,
} from '../types/components_types'

const components = (state = [], { type, payload }) => {
  switch (type) {
    /*****************************************************
     * Add new component
     *****************************************************/
    case ADD_COMPONENT:
      return [...state, payload]

    /*****************************************************
     * Update selected component ro re-render react
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

/**
 * Update Component
 */
const updateComponent = (state, payload) => {
  const { id: selectedCompID, updatedComp } = payload

  let compIndex

  // find selected component and its index
  state.map(({ id }, index) => {
    if (id == selectedCompID) {
      compIndex = index
      return null
    }
  })

  // update redux with selected component data
  let components = [...state]
  components[compIndex] = updatedComp
  return components
}

/**
 * Update component Data
 */
const updateComponentData = (state, payload) => {
  const { id: selectedCompID, name, styles } = payload

  let comp
  let compIndex

  // find selected component and its index
  state.map(({ id }, index) => {
    if (id == selectedCompID) {
      comp = state[index]
      compIndex = index
      return null
    }
  })

  // update selected component data
  comp = {
    ...state[compIndex],
    name,
    styles,
  }

  // update redux with selected component data
  let components = [...state]
  components[compIndex] = comp
  return components
}
