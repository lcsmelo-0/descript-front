export const Types = {
  SIGN_IN_REQUEST: 'user/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'user/SIGN_IN_ERROR',
  SIGN_OUT: 'user/SIGN_OUT',
  REFRESH_INVALID_TOKEN_REQUEST: 'user/REFRESH_INVALID_TOKEN_REQUEST',
  REFRESH_INVALID_TOKEN_SUCCESS: 'user/REFRESH_INVALID_TOKEN_SUCCESS',
  REFRESH_INVALID_TOKEN_ERROR: 'user/REFRESH_INVALID_TOKEN_ERROR',
}

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  accessToken: null,
  user: {},
  userType: {},
  accessTokenExpiration: null,
  refreshToken: null,
  error: null,
  resetHistory: false,
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        accessToken: null,
        user: {},
        userType: {},
        accessTokenExpiration: null,
        refreshToken: null,
        error: null,
      }
    case Types.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: {
          id: action.payload.data.user.id,
          name: action.payload.data.user.name,
          email: action.payload.data.user.email,
          email_verified_at: action.payload.data.user.email_verified_at,
          client_id: action.payload.data.user.client_id,
          reviser_id: action.payload.data.user.reviser_id,
          editor_id: action.payload.data.user.editor_id,
          created_at: action.payload.data.user.created_at,
          updated_at: action.payload.data.user.updated_at,
          deleted_at: action.payload.data.user.deleted_at,
        },
        userType: {
          ...action.payload.data.userType,
        },
        accessToken: action.payload.data.access_token,
        accessTokenExpiration: action.payload.data.expires_in,
        refreshToken: action.payload.data.refresh_token,
        resetHistory: action.resetHistory,
      }
    case Types.SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload.response,
      }
    case Types.SIGN_OUT:
      return {
        ...state,
        loggedIn: false,

        accessToken: null,
        accessTokenExpiration: null,
        refreshToken: null,
        error: null,
      }
    default:
      return state
  }
}

export const Creators = {
  signInRequest: (username, password) => ({
    type: Types.SIGN_IN_REQUEST,
    username,
    password,
  }),
  signInSuccess: (data, resetHistory) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { data },
    resetHistory,
  }),
  signInError: response => ({
    type: Types.SIGN_IN_ERROR,
    payload: { response },
  }),
  signOut: () => ({ type: Types.SIGN_OUT }),
}
