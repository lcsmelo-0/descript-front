export const Types = {
  POST_ERROR_REQUEST: 'logs/POST_ERROR_REQUEST',
  POST_ERROR_SUCCESS: 'logs/POST_ERROR_SUCCESS',
  POST_ERROR_ERROR: 'logs/POST_ERROR_ERROR'
}

const INITIAL_STATE = {
  url: '',
  errorMessage: '',
  componentStack: '',
  response: ''
}

export default function logs(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.POST_ERROR_REQUEST:
      return {
        ...state,
        url: action.url,
        errorMessage: action.errorMessage,
        componentStack: action.componentStack
      }
    case Types.POST_ERROR_SUCCESS:
      return {
        ...state,
        response: action.response
      }
    case Types.POST_ERROR_ERROR:
      return {
        ...state,
        response: action.error
      }
    default:
      return state
  }
}

export const Creators = {
  postErrorRequest: (url, errorMessage, componentStack) => ({
    type: Types.POST_ERROR_REQUEST,
    url,
    errorMessage,
    componentStack
  }),
  postErrorSuccess: response => ({
    type: Types.POST_ERROR_SUCCESS,
    response
  }),
  postErrorError: error => ({
    type: Types.POST_ERROR_ERROR,
    error
  })
}
