const BACKEND = process.env.VUE_APP_BACKEND;

export default {
  AUTH: {
    LOGIN: `${BACKEND}/api/admin`,
    LOGOUT: `${BACKEND}/api/logout`,
    AUTH: `${BACKEND}/api/auth`,
  },
};
