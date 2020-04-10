export const Types = {
  SIGN_IN_REQUEST: 'user/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'user/SIGN_IN_ERROR',
  SIGN_OUT: 'user/SIGN_OUT',
}

const INITIAL_STATE = {
  loading: false,
  loggedIn: false,
  user: {},
  accessToken: null,
  accessTokenExpiration: null,
  refreshToken: null,
  refreshTokenExpiration: null,
  error: null,
  resetHistory: false
}

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        user: {},
        accessToken: null,
        accessTokenExpiration: null,
        refreshToken: null,
        refreshTokenExpiration: null,
        error: null
      }
    case Types.SIGN_IN_SUCCESS:
      console.log('state')
            console.log(state)
      alert(1)
      return {
        ...state,
        loading: false,
        loggedIn: true,
        user: {
          id: action.payload.data.user.id,
          firstName: action.payload.data.user.firstName,
          customerBranchId: action.payload.data.user.customerBranchId,
          customerBranchName: action.payload.data.user.customerBranchName,
          customerBranchImg: action.payload.data.user.customerBranchImg,
          limitedAccess: action.payload.data.user.profile
            ? action.payload.data.user.profile.limitedAccess
            : false
        },
        accessToken: action.payload.data.access_token,
        accessTokenExpiration: action.payload.data.accessTokenExpiresAt,
        refreshToken: action.payload.data.refresh_token,
        refreshTokenExpiration: action.payload.data.refreshTokenExpiresAt,
        resetHistory: action.resetHistory
      }
    case Types.SIGN_IN_ERROR: 
          console.log('state')
            console.log(state)
      alert(1)
      return {
        ...state
      }
    default:
      return state
  }
}

export const Creators = {
  signInRequest: (username, password) => ({
    type: Types.SIGN_IN_REQUEST,
    username,
    password
  }),
  signInSuccess: (data, resetHistory) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { data },
    resetHistory
  }),
  signInError: response => ({ type: Types.SIGN_IN_ERROR, payload: { response } }),
  signOut: () => ({ type: Types.SIGN_OUT })
}