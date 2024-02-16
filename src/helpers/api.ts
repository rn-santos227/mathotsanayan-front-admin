const BACKEND = `${process.env.VUE_APP_BACKEND}/api/`;

export default {
  ACCOUNTS: {
    READ: `${BACKEND}accounts`,
    RESET: `${BACKEND}accounts/reset/`,
    DELETE: `${BACKEND}accounts/`,
  },

  ADMINS: {
    CREATE: `${BACKEND}admins/create`,
    READ: `${BACKEND}admins`,
    UPDATE: `${BACKEND}admins/`,
    DELETE: `${BACKEND}admins/`,
  },

  ANSWERS: {
    READ: `${BACKEND}answers/`,
  },

  AUDIT: {
    READ: `${BACKEND}admin/audit`,
    SEARCH: `${BACKEND}admin/audit/search`,
  },

  AUTH: {
    AUTH: `${BACKEND}auth`,
    LOGIN: `${BACKEND}admin/login`,
    LOGOUT: `${BACKEND}logout`,
    PASSWORD: `${BACKEND}password`,
    USER: `${BACKEND}admin/user`,
  },

  CORRECTS: {
    CREATE: `${BACKEND}corrects/create/`,
    UPDATE: `${BACKEND}corrects/`,
    DELETE: `${BACKEND}corrects/`,
  },

  COURSES: {
    CREATE: `${BACKEND}courses/create`,
    READ: `${BACKEND}courses`,
    UPDATE: `${BACKEND}courses/`,
    DELETE: `${BACKEND}courses/`,
  },

  DASHBOARD: {
    MODULE: `${BACKEND}admin/dashboard/modules`,
    RATIO: `${BACKEND}admin/dashboard/ratio`,
    READ: `${BACKEND}admin/dashboard`,
  },

  IMAGE: {
    IMAGE: `${BACKEND}image`,
  },

  MODULES: {
    CREATE: `${BACKEND}modules/create`,
    READ: `${BACKEND}modules`,
    UPDATE: `${BACKEND}modules/`,
    DELETE: `${BACKEND}modules/`,
    SEARCH: `${BACKEND}modules/search`,
  },

  OPTIONS: {
    CREATE: `${BACKEND}options/create/`,
    UPDATE: `${BACKEND}options/`,
    DELETE: `${BACKEND}options/`,
  },

  QUESTIONS: {
    CREATE: `${BACKEND}questions/create`,
    CREATEALL: `${BACKEND}questions/create-all/`,
    READ: `${BACKEND}questions`,
    REMOVEIMG: `${BACKEND}questions/img-remove/`,
    UPDATE: `${BACKEND}questions/`,
    DELETE: `${BACKEND}questions/`,
  },

  RESULTS: {
    READ: `${BACKEND}results`,
    SEARCH: `${BACKEND}results/search`,
    INVALIDATE: `${BACKEND}results/`,
  },

  SCHOOLS: {
    CREATE: `${BACKEND}schools/create`,
    READ: `${BACKEND}schools`,
    UPDATE: `${BACKEND}schools/`,
    DELETE: `${BACKEND}schools/`,
  },

  SECTIONS: {
    CREATE: `${BACKEND}sections/create`,
    READ: `${BACKEND}sections`,
    UPDATE: `${BACKEND}sections/`,
    DELETE: `${BACKEND}sections/`,
  },

  STUDENTS: {
    CREATE: `${BACKEND}students/create`,
    READ: `${BACKEND}students`,
    UPDATE: `${BACKEND}students/`,
    DELETE: `${BACKEND}students/`,
    SEARCH: `${BACKEND}students/search`,
  },

  SUBJECTS: {
    CREATE: `${BACKEND}subjects/create`,
    READ: `${BACKEND}subjects`,
    UPDATE: `${BACKEND}subjects/`,
    DELETE: `${BACKEND}subjects/`,
  },

  TEACHERS: {
    CREATE: `${BACKEND}teachers/create`,
    READ: `${BACKEND}teachers`,
    UPDATE: `${BACKEND}teachers/`,
    DELETE: `${BACKEND}teachers/`,
    SEARCH: `${BACKEND}teachers/search`,
  },

  TEST: {
    SUBMIT: `${BACKEND}test/`,
  },
};
