const BACKEND = `${process.env.VUE_APP_BACKEND}/api/`;

export default {
  AUTH: {
    AUTH: `${BACKEND}auth`,
    LOGIN: `${BACKEND}admin`,
    LOGOUT: `${BACKEND}logout`,
    USER: `${BACKEND}user/1`,
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

  IMAGE: {
    IMAGE: `${BACKEND}image`,
  },

  MODULES: {
    CREATE: `${BACKEND}modules/create`,
    READ: `${BACKEND}modules`,
    UPDATE: `${BACKEND}modules/`,
    DELETE: `${BACKEND}modules/`,
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
    UPDATE: `${BACKEND}questions/`,
    DELETE: `${BACKEND}questions/`,
  },

  RESULTS: {
    READ: `${BACKEND}results`,
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
  },

  SUBJECTS: {
    CREATE: `${BACKEND}subjects/create`,
    READ: `${BACKEND}subjects`,
    UPDATE: `${BACKEND}subjects/`,
    DELETE: `${BACKEND}subjects/`,
  },

  TEST: {
    SUBMIT: `${BACKEND}test/`,
  },

  TEACHERS: {
    CREATE: `${BACKEND}teachers/create`,
    READ: `${BACKEND}teachers`,
    UPDATE: `${BACKEND}teachers/`,
    DELETE: `${BACKEND}teachers/`,
  },
};
