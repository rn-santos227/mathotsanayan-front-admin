import Course from "@/types/Course";
import { defineStore } from "pinia";

export const useCourseModule = defineStore("courses", {
  state: () => ({
    courses: [] as Course[],
    isLoading: false as boolean,
  }),

  actions: {
    setCourses(courses: Course[]) {
      this.courses = courses;
    },

    addCourse(course: Course) {
      this.courses.push(course);
    },

    updateCourse(course: Course) {
      const index = this.courses.findIndex((item) => item.id === course.id);
      if (index !== -1) {
        this.courses[index] = course;
      }
    },

    deleteCourse(course: Course) {
      this.courses = this.courses.filter((item) => item.id !== course.id);
    },
  },
});
