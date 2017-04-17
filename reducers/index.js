import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import sidebar from './sidebar'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  sidebar
})

export default todoApp
