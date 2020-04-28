export const LOCAL_KEY = "front-descript";

export const getLocalObj = key =>
  JSON.parse(localStorage.getItem(key)) || { user: {} };

export const getToken = () => getLocalObj(LOCAL_KEY).access_token;

export const getUserId = () => getLocalObj(LOCAL_KEY).user.id;

export const getUserName = () => getLocalObj(LOCAL_KEY).user.name;

export const getUserEmail = () => getLocalObj(LOCAL_KEY).user.email;

export const getUserEmailVerified = () =>
  getLocalObj(LOCAL_KEY).user.email_verified_at;

export const getUserClientId = () => getLocalObj(LOCAL_KEY).user.client_id;

export const getUserReviverId = () => getLocalObj(LOCAL_KEY).user.reviser_id;

export const getUserEditorId = () => getLocalObj(LOCAL_KEY).user.editor_id;

export const getUserCreatedAt = () => getLocalObj(LOCAL_KEY).user.created_at;

export const getUserUpdatedAt = () => getLocalObj(LOCAL_KEY).user.updated_at;

export const getUserDeletedAt = () => getLocalObj(LOCAL_KEY).user.deleted_at;

export const getAccessTokenExpiration = () => getLocalObj(LOCAL_KEY).expires_in;

export const getUserType = () => getLocalObj(LOCAL_KEY).userType;

export const persistData = data => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
};

export const excludeData = () => {
  localStorage.removeItem(LOCAL_KEY);
  localStorage.removeItem("persist:front-descript");
};

export const setAuthorization = async config => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};
