import { retry, put } from 'redux-saga/effects'

import { Creators as WorkflowActions } from '../ducks/workflow'

import { descriptApi } from '../../services/api'

export function* getWorkflowStatus(action) {
  try {
    const response = yield retry(6, 1000, descriptApi.get, `/workflow-status`)
    yield put(WorkflowActions.getWorkflowStatusSuccess(response.data))
  } catch (err) {
    yield put(WorkflowActions.getImageError(err.message))
  }
}