import { retry, put } from 'redux-saga/effects'

import { Creators as UserActions } from '../_ducks/user'

import { descriptApi } from '../../_services/api'
import { persistData } from '../../_services/auth'

export function* signIn(action) {
   const requestBody = {
    username: action.username,
    password: action.password
  }

  try {

    const response = yield retry(
      2,
      1000,
      descriptApi.post('/login'),
      requestBody
    )
        console.log(requestBody, descriptApi)
    alert(456465 )
    const data = {
      ...response.data,
      user: {
        ...response.data.user
      }
    }
    persistData(data)
    yield put(UserActions.signInSuccess(data, true))
  } catch(err) {

  }
}