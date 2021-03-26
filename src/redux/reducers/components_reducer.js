import { ADD_COMPONENT } from '../types/components_types'

const components = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_COMPONENT:
      return [...state, payload]

    default:
      return state
  }
}

export default components
