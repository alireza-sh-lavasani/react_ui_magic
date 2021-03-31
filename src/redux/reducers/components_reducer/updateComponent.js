import codeGen from '../../../modules/codeGen'

/**************************************
 ******** Update component Data
 * state is an instance of arboreal tree
 *  which has its own methods
 *************************************/
export const updateComponent = (state, payload) => {
  const { id: selectedCompID, name, styles } = payload

  const selectedComp = state.find(({ data: { id } }) => id == selectedCompID)

  const newComp = codeGen({
    ...selectedComp.data,
    name,
    styles,
  })

  selectedComp.data = newComp
  return state
}
