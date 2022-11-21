import etc from "~/constants/etc";

export function setToken(token) {
  localStorage.setItem(etc.tokenHeaderName, token)
}

export function getToken() {
  localStorage.getItem(etc.tokenHeaderName)
}
