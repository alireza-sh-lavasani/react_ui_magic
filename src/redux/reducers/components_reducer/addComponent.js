/**************************************
 ******** Add Component
 *************************************/
export const addComponent = (state, payload) => {
  const { selectedCompID, newComp } = payload

  // In case of a sub component adding to an existing one
  if (selectedCompID) {
    
  }

  // Adding a root level component
  return [...state, newComp]
}

