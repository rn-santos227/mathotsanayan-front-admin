const BACKEND = `${process.env.VUE_APP_BACKEND}/api/`;

export default {
  AUTH: {
    AUTH: `${BACKEND}auth`,
    LOGIN: `${BACKEND}admin`,
    LOGOUT: `${BACKEND}logout`,
    USER: `${BACKEND}user`,
  },

  COURSES: {
    CREATE: `${BACKEND}courses/create`,
    READ: `${BACKEND}courses`,
    UPDATE: `${BACKEND}courses/{id}`,
    DELETE: `${BACKEND}courses/{id}`,
  },

  MODULES: {
    CREATE: `${BACKEND}modules/create`,
    READ: `${BACKEND}modules`,
    UPDATE: `${BACKEND}modules/{id}`,
    DELETE: `${BACKEND}modules/{id}`,
  },

  SCHOOLS: {
    CREATE: `${BACKEND}schools/create`,
    READ: `${BACKEND}schools`,
    UPDATE: `${BACKEND}schools/{id}`,
    DELETE: `${BACKEND}schools/{id}`,
  },

  SECTIONS: {
    CREATE: `${BACKEND}sections/create`,
    READ: `${BACKEND}sections`,
    UPDATE: `${BACKEND}sections/{id}`,
    DELETE: `${BACKEND}sections/{id}`,
  },

  STUDENTS: {
    CREATE: `${BACKEND}students/create`,
    READ: `${BACKEND}students`,
    UPDATE: `${BACKEND}students/{id}`,
    DELETE: `${BACKEND}students/{id}`,
  },

  TEACHERS: {
    CREATE: `${BACKEND}teachers/create`,
    READ: `${BACKEND}teachers`,
    UPDATE: `${BACKEND}teachers/{id}`,
    DELETE: `${BACKEND}teachers/{id}`,
  },
};
