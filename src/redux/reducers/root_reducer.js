import { combineReducers } from 'redux'
import components from './components_reducer/components_reducer'
import shouldComponentsUpdate from './updateFlag_reducer'
import selectedCompID from './selectedComponent_reducer'

export default combineReducers({
  shouldComponentsUpdate,
  selectedCompID,
  '_': () => '=======================================',
  components
})
