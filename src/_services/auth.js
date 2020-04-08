
export const getLocalObj = key => JSON.parse(localStorage.getItem(key)) || { user: {} }

export const getToken = () => getLocalObj().access_token
export const getUserEmail = () => getLocalObj().user.email
export const getUserId = () => getLocalObj().user.id
export const getUserName = () => getLocalObj().user.name
export const getTokenExpirationDate = () => getLocalObj().accessTokenExpiresAt

export const persistData = data => {
  localStorage.setItem(JSON.stringify(data))
}
