const BACKEND = process.env.VUE_APP_BACKEND;

export default {
  AUTH: {
    AUTH: `${BACKEND}/api/auth`,
    LOGIN: `${BACKEND}/api/admin`,
    LOGOUT: `${BACKEND}/api/logout`,
    USER: `${BACKEND}/api/user`,
  },
};
