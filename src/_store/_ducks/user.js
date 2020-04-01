export const Types = {
  SING_IN_SSO_NEW_USER_REQUEST: 'user/SING_IN_SSO_NEW_USER_REQUEST',
  SIGN_IN_SSO_REQUEST: 'user/SIGN_IN_SSO_REQUEST',
  SIGN_IN_REQUEST: 'user/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: 'user/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: 'user/SIGN_IN_ERROR',
  SIGN_OUT: 'user/SIGN_OUT',
  REFRESH_INVALID_TOKEN_REQUEST: 'user/REFRESH_INVALID_TOKEN_REQUEST',
  REFRESH_INVALID_TOKEN_SUCCESS: 'user/REFRESH_INVALID_TOKEN_SUCCESS',
  REFRESH_INVALID_TOKEN_ERROR: 'user/REFRESH_INVALID_TOKEN_ERROR',
  FETCH_CUSTOMER_BRANCH_LIST_REQUEST: 'user/FETCH_CUSTOMER_BRANCH_LIST_REQUEST',
  FETCH_CUSTOMER_BRANCH_LIST_SUCCESS: 'user/FETCH_CUSTOMER_BRANCH_LIST_SUCCESS',
  FETCH_CUSTOMER_BRANCH_LIST_ERROR: 'user/FETCH_CUSTOMER_BRANCH_LIST_ERROR',
  SWITCH_CUSTOMER_BRANCH_REQUEST: 'user/SWITCH_CUSTOMER_BRANCH_REQUEST',
  SWITCH_CUSTOMER_BRANCH_SUCCESS: 'user/SWITCH_CUSTOMER_BRANCH_SUCCESS',
  SWITCH_CUSTOMER_BRANCH_ERROR: 'user/SWITCH_CUSTOMER_BRANCH_ERROR'
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
  customerBranchList: [],
  loadingCustomerBranchList: false,
  resetHistory: false,
  client_id: '',
  client_secret: ''
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
            : false,
          externalIntegrationCode: action.payload.data.user.externalIntegrationCode
        },
        accessToken: action.payload.data.access_token,
        accessTokenExpiration: action.payload.data.accessTokenExpiresAt,
        refreshToken: action.payload.data.refresh_token,
        refreshTokenExpiration: action.payload.data.refreshTokenExpiresAt,
        resetHistory: action.resetHistory
      }
    case Types.SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload.response
      }
    case Types.SIGN_OUT:
      return {
        ...state,
        loggedIn: false,
        user: {},
        accessToken: null,
        accessTokenExpiration: null,
        refreshToken: null,
        refreshTokenExpiration: null,
        error: null
      }
    case Types.REFRESH_INVALID_TOKEN_REQUEST:
      return { ...state, loading: true, loggedIn: false, error: null }
    case Types.REFRESH_INVALID_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        accessToken: action.payload.data.access_token,
        accessTokenExpiration: action.payload.data.accessTokenExpiresAt,
        refreshToken: action.payload.data.refresh_token,
        refreshTokenExpiration: action.payload.data.refreshTokenExpiresAt,
        resetHistory: false
      }
    case Types.REFRESH_INVALID_TOKEN_ERROR:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        error: action.payload.response
      }
    case Types.FETCH_CUSTOMER_BRANCH_LIST_REQUEST:
      return { ...state, loadingCustomerBranchList: true }
    case Types.FETCH_CUSTOMER_BRANCH_LIST_SUCCESS:
      return {
        ...state,
        loadingCustomerBranchList: false,
        customerBranchList: action.payload.data
      }
    case Types.FETCH_CUSTOMER_BRANCH_LIST_ERROR:
      return {
        ...state,
        loadingCustomerBranchList: false,
        customerBranchList: []
      }
    default:
      return state
  }
}

export const Creators = {
  singInNewUserSsoRequest: (customerBranchId, phone) => ({
    type: Types.SING_IN_SSO_NEW_USER_REQUEST,
    customerBranchId,
    phone
  }),
  singInSsoRequest: userData => ({
    type: Types.SIGN_IN_SSO_REQUEST,
    payload: userData
  }),
  signInRequest: (username, password, refreshToken) => ({
    type: Types.SIGN_IN_REQUEST,
    username,
    password,
    refreshToken
  }),
  signInSuccess: (data, resetHistory) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { data },
    resetHistory
  }),
  signInError: response => ({
    type: Types.SIGN_IN_ERROR,
    payload: { response }
  }),
  signOut: () => ({ type: Types.SIGN_OUT }),
  refreshInvalidTokenRequest: refreshToken => ({
    type: Types.REFRESH_INVALID_TOKEN_REQUEST,
    refreshToken
  }),
  refreshInvalidTokenSuccess: data => ({
    type: Types.REFRESH_INVALID_TOKEN_SUCCESS,
    payload: { data }
  }),
  refreshInvalidTokenError: response => ({
    type: Types.REFRESH_INVALID_TOKEN_ERROR,
    payload: { response }
  }),
  fetchCustomerBranchListRequest: () => ({
    type: Types.FETCH_CUSTOMER_BRANCH_LIST_REQUEST
  }),
  fetchCustomerBranchListSuccess: data => ({
    type: Types.FETCH_CUSTOMER_BRANCH_LIST_SUCCESS,
    payload: { data }
  }),
  fetchCustomerBranchListError: response => ({
    type: Types.FETCH_CUSTOMER_BRANCH_LIST_ERROR,
    payload: { response }
  }),
  switchCustomerBranchRequest: customerBranchId => ({
    type: Types.SWITCH_CUSTOMER_BRANCH_REQUEST,
    customerBranchId
  }),
  switchCustomerBranchSuccess: () => ({
    type: Types.SWITCH_CUSTOMER_BRANCH_SUCCESS
  }),
  switchCustomerBranchError: () => ({
    type: Types.SWITCH_CUSTOMER_BRANCH_ERROR
  })
}
