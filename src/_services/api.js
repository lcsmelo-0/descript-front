import axios from 'axios'

const {
  REACT_APP_DEV_BASEURL,
  REACT_APP_DESCRIPT_API,
  REACT_APP_PAYMENT_API
} = process.env

const isProd = true

export const descriptApi = axios.create({
  baseURL: isProd ? REACT_APP_DESCRIPT_API : REACT_APP_DEV_BASEURL
})

export const paymentApi = axios.create({
  baseURL: isProd ? REACT_APP_PAYMENT_API : REACT_APP_DEV_BASEURL
})