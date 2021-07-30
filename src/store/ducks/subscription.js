export const Types = {
  CREATE_SUBSCRITION_REQUEST: 'image/CREATE_SUBSCRITION_REQUEST',
  CREATE_SUBSCRITION_SUCCESS: 'image/CREATE_SUBSCRITION_SUCCESS',
  CREATE_SUBSCRITION_ERROR: 'image/CREATE_SUBSCRITION_ERROR',
}

const INITIAL_STATE = {
  loading: false,
  error: null,
}

export default function subscription(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_SUBSCRITION_REQUEST:
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export const create = {
  createSubscriptionRequest: customer => ({
    type: Types.CREATE_SUBSCRITION_REQUEST,
    customer,
  }),
}
