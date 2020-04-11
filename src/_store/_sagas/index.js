import { all, takeEvery, takeLatest } from 'redux-saga/effects'

import { Types as ClientTypes } from '../_ducks/client'
import { Types as UserTypes } from '../_ducks/user'

import {
  getClient
} from './client'

import {
  signIn
} from './user'

export default function* rootSaga() {
  yield all([
    takeLatest(ClientTypes.GET_CLIENT_REQUEST, getClient),
    takeLatest(UserTypes.SIGN_IN_REQUEST, signIn)
  ])
}