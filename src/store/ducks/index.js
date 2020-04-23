import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import user from './user'
import image from './image'
import workflow from './workflow'

const appReducer = combineReducers({
  form: reduxFormReducer,
  user,
  image,
  workflow
})

export default (state, action) => {
  return appReducer(state, action)
}
