import { all, takeLatest } from 'redux-saga/effects'

import { Types as UserTypes } from '../_ducks/user'
import { Types as LogsTypes } from '../_ducks/logs'

import {
  signIn,
  refreshInvalidToken,
  singInSso,
  singInNewUserSso,
  fetchCustomerBranchList,
  switchCustomerBranch
} from './user'

import { postError } from './logs'

export default function* rootSaga() {
  yield all([
    takeLatest(UserTypes.SING_IN_SSO_NEW_USER_REQUEST, singInNewUserSso),
    takeLatest(UserTypes.SIGN_IN_SSO_REQUEST, singInSso),
    takeLatest(UserTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(UserTypes.REFRESH_INVALID_TOKEN_REQUEST, refreshInvalidToken),
    takeLatest(UserTypes.FETCH_CUSTOMER_BRANCH_LIST_REQUEST, fetchCustomerBranchList),
    takeLatest(UserTypes.SWITCH_CUSTOMER_BRANCH_REQUEST, switchCustomerBranch),


    // Logs
    takeLatest(LogsTypes.POST_ERROR_REQUEST, postError)
  ])
}
