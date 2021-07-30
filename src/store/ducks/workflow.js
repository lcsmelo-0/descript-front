export const Types = {
  UPDATE_WORKFLOW_STATUS_REQUEST: 'workflow/UPDATE_WORKFLOW_STATUS_REQUEST',
  UPDATE_WORKFLOW_STATUS_SUCCESS: 'workflow/UPDATE_WORKFLOW_STATUS_SUCCESS',
  UPDATE_WORKFLOW_STATUS_ERROR: 'workflow/UPDATE_WORKFLOW_STATUS_ERROR',
  APPROVE_WORKFLOW_REQUEST: 'workflow/APPROVE_WORKFLOW_REQUEST',
  APPROVE_WORKFLOW_SUCCESS: 'workflow/APPROVE_WORKFLOW_SUCCESS',
  APPROVE_WORKFLOW_ERROR: 'workflow/APPROVE_WORKFLOW_ERROR',
}

const INITIAL_STATE = {
  loading: false,
  error: null,
  workflow: {},
}

export default function workflow(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_WORKFLOW_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        workflow: {
          image_id: action.workflow.imageId,
          description: action.workflow.fields.description,
          workflow_id: action.workflow.workflowId,
        },
      }
    case Types.UPDATE_WORKFLOW_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        workflow: action.data,
      }
    case Types.UPDATE_WORKFLOW_STATUS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.response,
      }
    case Types.APPROVE_WORKFLOW_REQUEST:
      return {
        ...state,
        loading: true,
        workflow: {
          image_id: action.workflow.imageId,
          description: action.workflow.description,
          workflow_id: action.workflow.workflowId,
        },
      }

    case Types.APPROVE_WORKFLOW_SUCCESS:
      return {
        ...state,
        loading: false,
        workflow: action.data,
      }
    case Types.APPROVE_WORKFLOW_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.response,
      }
    default:
      return state
  }
}

export const Creators = {
  updateWorkflowStatusRequest: workflow => ({
    type: Types.UPDATE_WORKFLOW_STATUS_REQUEST,
    workflow,
  }),
  updateWorkflowStatusSuccess: data => ({
    type: Types.UPDATE_WORKFLOW_STATUS_SUCCESS,
    data,
  }),
  updateWorkflowStatusError: response => ({
    type: Types.UPDATE_WORKFLOW_STATUS_ERROR,
    payload: { response },
  }),
  approveWorkflowRequest: workflow => ({
    type: Types.APPROVE_WORKFLOW_REQUEST,
    workflow,
  }),
  approveWorkflowSuccess: data => ({
    type: Types.APPROVE_WORKFLOW_SUCCESS,
    data,
  }),
  approveWorkflowError: response => ({
    type: Types.APPROVE_WORKFLOW_ERROR,
    payload: { response },
  }),
}
