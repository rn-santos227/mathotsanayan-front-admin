import Course from "@/types/Course";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useCourseModule = defineStore("courses", {
  state: () => ({
    courses: [] as Course[],
    isLoading: false as boolean,
  }),

  actions: {
    setCourses(courses: Course[]): void {
      this.courses = courses;
    },

    addCourse(course: Course): void {
      this.courses.push(course);
    },

    updateCourse(course: Course): void {
      const index = this.courses.findIndex((item) => item.id === course.id);
      if (index !== -1) {
        this.courses[index] = course;
      }
    },

    deleteCourse(course: Course): void {
      this.courses = this.courses.filter((item) => item.id !== course.id);
    },

    async create(payload: Course): Promise<void> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.COURSES.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { course } = data;
        this.addCourse(course);
      } catch (error) {
        console.error("Error Course in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async read(): Promise<void> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.COURSES.READ);
        const data = await response.json();
        const { courses } = data;
        this.setCourses(courses);
      } catch (error) {
        console.error("Error Course in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async update(payload: Course): Promise<void> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.COURSES.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { course } = data;
        this.updateCourse(course);
      } catch (error) {
        console.error("Error Course in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getCourses(): Course[] {
      return this.courses;
    },
  },
});
