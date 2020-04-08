import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import client from './client'
import user from './user'

const appReducer = combineReducers({
  form: reduxFormReducer,
  client,
  user
})



export default (state, action) => {
  return appReducer(state, action)
}