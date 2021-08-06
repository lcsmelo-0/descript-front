import axios from 'axios'
import { setAuthorization } from './auth'


export const descriptApi = axios.create({
  baseURL: '',
})

export const iuguApi = axios.create({
  baseURL: '',
})

descriptApi.interceptors.request.use(async config => setAuthorization(config))
