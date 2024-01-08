import Teacher from "@/types/Teacher";
import Search from "@/interfaces/Search";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useTeacherModule = defineStore("teachers", {
  state: () => ({
    teachers: [] as Teacher[],
    isLoading: false,
    isTableLoading: false,
    currentPage: 1,
    fromCount: 0,
    toCount: 0,
    totalPages: 0,
    itemsPerPage: 10,
  }),

  actions: {
    setTeachers(teachers: Teacher[]) {
      this.teachers = teachers;
    },

    addTeacher(teacher: Teacher) {
      this.teachers.unshift(teacher);
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

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.TEACHERS.READ}?page=${page}`
        );
        const res = await response.json();
        const { data, current_page, last_page, total } = res.teachers;
        this.totalPages = last_page;
        this.currentPage = current_page;
        this.itemsPerPage = total;
        this.setTeachers(data);
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
          `${api.TEACHERS.UPDATE}${payload.id}`,
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

    async search(payload: Search): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.TEACHERS.SEARCH}?category=${payload.category}&search=${payload.search}`
        );
        const data = await response.json();
        const { teachers } = data;

        this.currentPage = 1;
        this.totalPages = 1;
        this.itemsPerPage = teachers.length;
        this.setTeachers(teachers);
        return true;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getTeachers(): Teacher[] {
      return this.teachers;
    },
  },
});
