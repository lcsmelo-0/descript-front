import { retry, put } from 'redux-saga/effects'

import { api } from '../../_services/api'

import { Creators as LogsActions } from '../_ducks/logs'

export function* postError(action) {
  const payload = {
    url: action.url,
    errorMessage: action.errorMessage,
    componentStack: action.componentStack
  }

  try {
    const response = yield retry(10, 2000, api.post, '/error-logs', payload)

    yield put(LogsActions.postErrorSuccess(response))
  } catch (err) {
    yield put(LogsActions.postErrorError(err))
  }
}
