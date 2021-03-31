/**************************************
 ******** Update Component
 *************************************/
 export const updateComponent = (state, payload) => {
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
