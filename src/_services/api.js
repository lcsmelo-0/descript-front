import axios from 'axios'

const {
  // NODE_ENV,
  BASE_URL,
  API_URL
} = process.env

// const isProd = NODE_ENV === 'production'
const isProd = true

export const api = axios.create({
  baseURL: isProd ? API_URL : BASE_URL
})