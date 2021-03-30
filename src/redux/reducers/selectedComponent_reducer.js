import { SET_SELECTED_COMPONENT_ID } from '../types/components_types'

const selectedCompID = (state = null, { type, payload }) => {
  switch (type) {
    case SET_SELECTED_COMPONENT_ID:
      return payload

    default:
      return state
  }
}

export default selectedCompID
