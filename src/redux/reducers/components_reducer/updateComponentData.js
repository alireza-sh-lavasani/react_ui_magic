/**************************************
 ******** Update component Data
 *************************************/
 export const updateComponentData = (state, payload) => {
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