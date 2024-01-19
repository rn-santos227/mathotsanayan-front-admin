import Teacher from "@/types/Teacher";
import Page from "@/interfaces/Page";
import Search from "@/interfaces/Search";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useTeachersModule = defineStore("teachers", {
  state: () => ({
    teachers: [] as Teacher[],
    page: {} as Page,
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setTeachers(teachers: Teacher[]) {
      this.teachers = teachers;
    },

    setPage(page: Page) {
      this.page = page;
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
        const { data } = res.teachers;

        this.setPage(res.teachers);
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
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.TEACHERS.SEARCH}?category=${payload.category}&search=${payload.search}`
        );
        const data = await response.json();
        const { teachers } = data;
        this.page.current_page = 1;
        this.page.total = 1;
        this.page.per_page = teachers.length;
        this.setTeachers(teachers);
        return true;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
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
