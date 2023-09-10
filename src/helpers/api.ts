const BACKEND = process.env.VUE_APP_BACKEND;

const API = {
  AUTH: {
    LOGIN: `${BACKEND}/api/admin`,
    LOGOUT: `${BACKEND}/api/logout`,
    AUTH: `${BACKEND}/api/auth`,
  },
};
export default API;
