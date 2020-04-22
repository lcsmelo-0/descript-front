import axios from 'axios'
import { setAuthorization } from './auth'

const {
  // NODE_ENV,
  REACT_APP_DEV_BASEURL,
  REACT_APP_DESCRIPT_API
} = process.env

const isProd = true

export const descriptApi = axios.create({
  baseURL: isProd ? REACT_APP_DESCRIPT_API : REACT_APP_DEV_BASEURL
})

descriptApi.interceptors.request.use(async config => setAuthorization(config))