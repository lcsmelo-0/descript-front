import { put, retry } from 'redux-saga/effects'

import { Creators as ClientActions } from '../_ducks/client'
import { descriptApi } from '../../_services/api'

export function *getClient() {
  try {
    const response = yield retry(6, 1000, descriptApi.get, '/clients')
    yield put(ClientActions.getClientSuccess(response.data))
  } catch(err) {
    console.log(err)
  }
}