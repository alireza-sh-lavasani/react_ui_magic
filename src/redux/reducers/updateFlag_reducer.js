import { SHOULD_COMPONENTS_UPDATE } from '../types/components_types'

const shoudlComponentsUpdate = (state = false, { type, payload }) => {
  switch (type) {
    case SHOULD_COMPONENTS_UPDATE:
      return payload

    default:
      return state
  }
}

export default shoudlComponentsUpdate
