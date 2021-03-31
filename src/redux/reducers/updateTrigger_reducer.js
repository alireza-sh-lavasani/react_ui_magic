import { TRIGGER_UPDATE } from '../types/components_types'

const triggerUpdate = (state = false, { type, payload }) => {
  switch (type) {
    case TRIGGER_UPDATE:
      return payload

    default:
      return state
  }
}

export default triggerUpdate
