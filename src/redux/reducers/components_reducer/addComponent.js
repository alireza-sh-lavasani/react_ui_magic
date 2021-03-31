/**************************************
 ******** Add Component
 * state is an instance of arboreal tree
 *  which has its own methods
 *************************************/
export const addComponent = (state, payload) => {
  const { selectedCompID, newComp } = payload

  // In case of a sub component adding to an existing one
  if (selectedCompID) {
  }

  // Adding a root level component
  
  return state.appendChild(newComp)
}
