import { combineReducers } from 'redux'
import components from './components_reducer/components_reducer'
import updateTrigger from './updateTrigger_reducer'
import selectedCompID from './selectedComponent_reducer'

export default combineReducers({
  updateTrigger,
  selectedCompID,
  '_': () => '=======================================',
  components
})
