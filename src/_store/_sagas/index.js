import {all, takeEvery, takeLatest} from 'redux-saga/effects'

import { Types as ClientTypes } from '../_ducks/client'
 
import {
  getClient
} from './client'

export default function* rootSaga() {
  yield all([
    takeLatest(ClientTypes.GET_CLIENT_REQUEST, getClient)
  ])
}