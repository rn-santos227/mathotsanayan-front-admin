import Teacher from "@/types/Teacher";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useTeacherModule = defineStore("teachers", {
  state: () => ({
    teachers: [] as Teacher[],
    isLoading: false as boolean,
    isTableLoading: false,
  }),

  actions: {
    setTeachers(teachers: Teacher[]) {
      this.teachers = teachers;
    },

    addTeacher(teacher: Teacher) {
      this.teachers.push(teacher);
    },

    updateTeacher(teacher: Teacher) {
      const index = this.teachers.findIndex((item) => item.id === teacher.id);
      if (index !== -1) {
        this.teachers[index] = teacher;
      }
    },

    deleteTeacher(teacher: Teacher) {
      this.teachers = this.teachers.filter((item) => item.id !== teacher.id);
    },

    async create(payload: Teacher): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.TEACHERS.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { teacher } = data;
        this.addTeacher(teacher);
        return true;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.TEACHERS.READ);
        const data = await response.json();
        const { teachers } = data;
        this.setTeachers(teachers);
        return true;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async update(payload: Teacher): Promise<boolean> {
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
        const { teacher } = data;
        this.updateTeacher(teacher);
        return true;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },

    async delete(payload: Teacher): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.TEACHERS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { teacher } = data;
        this.deleteTeacher(teacher);
        return true;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getTeachers(): Teacher[] {
      return this.teachers;
    },
  },
});
