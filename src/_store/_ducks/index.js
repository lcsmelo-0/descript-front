import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'

import user from './user'

const appReducer = combineReducers({
  form: reduxFormReducer,
  user
})

export default (state, action) => {
  if (action.type === 'user/SIGN_OUT') {
    state = { application: state.application }
  }

  return appReducer(state, action)
}
