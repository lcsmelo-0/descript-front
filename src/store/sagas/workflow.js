import { retry, put } from 'redux-saga/effects'

import { Creators as WorkflowActions } from '../ducks/workflow'

import { descriptApi } from '../../services/api'

export function* updateWorkflowStatus(action) {
  const requestBody = {
    image_id: action.workflow.imageId,
    description: action.workflow.description,
    workflow_id: action.workflow.workflowId,
  }
  try {
    const response = yield retry(6, 1000, descriptApi.post, `/workflow-update`, requestBody)

    yield put(WorkflowActions.updateWorkflowStatusSuccess(response.data))
  } catch (err) {
    yield put(WorkflowActions.updateImageError(err.message))
  }
}

export function* approveWorkflow(action) {
  const requestBody = {
    image_id: action.workflow.imageId,
    description: action.workflow.description,
    workflow_id: action.workflow.workflowId,
  }
  try {
    const response = yield retry(6, 1000, descriptApi.post, `/workflow-approve`, requestBody)

    yield put(WorkflowActions.approveWorkflowSuccess(response.data))
  } catch (err) {
    yield put(WorkflowActions.approveWorkflowError(err.message))
  }
}
