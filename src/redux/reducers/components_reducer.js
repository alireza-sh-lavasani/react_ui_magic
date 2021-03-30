import { ADD_COMPONENT, UPDATE_COMPONENT, UPDATE_COMPONENT_STYLES } from '../types/components_types'

const components = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_COMPONENT:
      return [...state, payload]

    case UPDATE_COMPONENT:
      return [payload]

    case UPDATE_COMPONENT_STYLES:
      const element = state[0]
      element.styles = payload
      return [element]

    default:
      return state
  }
}

export default components
