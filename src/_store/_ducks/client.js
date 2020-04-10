export const Types = {
  GET_CLIENT_REQUEST: 'client/GET_CLIENT_REQUEST',
  GET_CLIENT_SUCCESS: 'client/GET_CLIENT_SUCCESS',
  GET_CLIENT_ERROR: 'client/GET_CLIENT_ERROR'
}

const INITAL_STATE = {
  loading: true,
  client: {},
  error: null
}

export default function client(state = INITAL_STATE, action) {
  switch(action.type) {
    case Types.GET_CLIENT_REQUEST: 
      return {
        ...state,
        loading: true,
        client: {},
        error: null
      }
    case Types.GET_CLIENT_SUCCESS: 

      return {
        ...state,
        loading: false,
        client: action.client ? action.client : {}
      }
    default:
      return state
  }
}

export const Creators = {
  getClientRequest: () =>({
    type: Types.GET_CLIENT_REQUEST
  }),

  getClientSuccess: client => ({
    type: Types.GET_CLIENT_SUCCESS,
    client
  })
}