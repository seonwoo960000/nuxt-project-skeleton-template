import {setToken} from "~/utils/localstorage";
import etc from "~/constants/etc";

export default function ({$axios, redirect}, inject) {
  const api = $axios.create({
    headers: {
      common: {
        Authorization: getAuthorizationHeader(),
        withCredentials: true
      },
    },
  })

  if (process.env.NODE_ENV === 'development') {
    api.interceptors.request.use(config => {
      console.table({
        url: config.url,
        method: config.method,
        headers: config.headers,
        baseUrl: config.baseURL
      })
      return config
    }, error => Promise.reject(error))
  }

  // set token when headers contain token
  api.interceptors.response.use(response => {
    const token = response.headers[etc.tokenHeaderName]
    if (token) {
      setToken(token)
      $axios.setToken(token, 'Bearer')
    }
    return response
  }, error => Promise.reject(error))

  inject('api', api)
}

function getAuthorizationHeader() {
  const token = localStorage.getItem(etc.tokenHeaderName)
  return token ? `Bearer ${token}` : null
}
