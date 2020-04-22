import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import user from './user'
import image from './image'

const appReducer = combineReducers({
  form: reduxFormReducer,
  user,
  image
})

export default (state, action) => {
  return appReducer(state, action)
}
