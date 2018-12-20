import axios from 'axios'

import { backendURI } from 'config/main'

export const fetch = axios.create({
  baseURL: backendURI
})

fetch.interceptors.response.use((response) => {
  return response
}, function (error) {
  return Promise.reject(error.response)
})