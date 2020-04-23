export const Types = {
  GET_WORKFLOW_STATUS_REQUEST: 'workflow/GET_WORKFLOW_STATUS_REQUEST',
  GET_WORKFLOW_STATUS_SUCCESS: 'workflow/GET_WORKFLOW_STATUS_SUCCESS',
  GET_WORKFLOW_STATUS_ERROR: 'workflow/GET_WORKFLOW_STATUS_ERROR',
}

const INITIAL_STATE = {
  loading: false,
  error: null,
  workflow: {}
}

export default function workflow(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Types.GET_WORKFLOW_STATUS_REQUEST:
      return { ...state, loading: true }
    case Types.GET_WORKFLOW_STATUS_SUCCESS:
      return { 
        ...state, 
        loading: false, 
        workflow: {
          step: action.data.step
        }
      }
    case Types.GET_WORKFLOW_STATUS_ERROR:
      return { ...state, loading: false }
    default:
      return state
  }
}

export const Creators = {
  getWorkflowStatusRequest: () => ({
    type: Types.GET_WORKFLOW_STATUS_REQUEST
  }),
  getWorkflowStatusSuccess: data => ({
    type: Types.GET_WORKFLOW_STATUS_SUCCESS,
    data
  }),
  getWorkflowStatusError: () => ({
    type: Types.GET_WORKFLOW_STATUS_ERROR
  })
}