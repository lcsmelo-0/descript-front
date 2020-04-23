import { retry, put } from 'redux-saga/effects'
import toastr from '../../utils/toastr'

import { Creators as UserActions } from '../ducks/user'

import { descriptApi } from '../../services/api'

import {
  persistData
} from '../../services/auth'

export function* signIn(action) {

  const requestBody = {
    username: action.username,
    password: action.password,
  }
  try {
    const response = yield retry(
      2,
      1000,
      descriptApi.post,
      '/login',
      requestBody
    )

    console.log('RESPONSE => ', response)
    const userDetailsResponse = yield retry(
      2,
      2000,
      descriptApi.get,
      '/user',
      {
        headers: { Authorization: `Bearer ${response.data.access_token}` }
      }
    )
    console.log('userDetailsResponse => ', userDetailsResponse)
    if (!response) {
      toastr.error('Usuário sem perfil, ente em contato com o suporte')
      
      yield put(UserActions.signInError())

      return
    }
    const user = { 
      id: userDetailsResponse.data.user.id,
      name:userDetailsResponse.data.user.name,
      email: userDetailsResponse.data.user.email,
      email_verified_at: userDetailsResponse.data.user.email_verified_at,
      client_id: userDetailsResponse.data.user.client_id,
      reviser_id: userDetailsResponse.data.user.reviser_id,
      editor_id: userDetailsResponse.data.user.editor_id,
      created_at: userDetailsResponse.data.user.created_at,
      updated_at: userDetailsResponse.data.user.updated_at,
      deleted_at: userDetailsResponse.data.user.deleted_at,
      
     }

    const userType = {
      isClient: userDetailsResponse.data.user.client_id ? true : false,
      isReviser: userDetailsResponse.data.user.reviser_id ? true : false,
      isEditor: userDetailsResponse.data.user.editor_id ? true : false
    }
    
    console.log(userType)
    
    const data = {
      ...response.data,
      user: { ...response.data.user, ...user },
      userType: { ...userType }
    }

    console.log('data =>', data)
    
    persistData(data)

    yield put(UserActions.signInSuccess(data, true))
  } catch(err) {
    console.log('ERROR', err.response.status)
    if (err.response.status === 401 || err.response.status === 400) {

      toastr.error('Erro', 'Usuário ou senha incorretos.')
    }
    if (err.response.status === 404) {
      toastr.error('Estabelecimento inválido.', 'Entre em contato com o suporte')
    }

    yield put(UserActions.signInError(err.response))
  }
}