import School from "@/types/School";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useSchoolModule = defineStore("schools", {
  state: () => ({
    schools: [] as School[],
    isLoading: false as boolean,
  }),

  actions: {
    setSchools(schools: School[]): void {
      this.schools = schools;
    },

    addSchool(school: School): void {
      this.schools.push(school);
    },

    updateSchool(school: School): void {
      const index = this.schools.findIndex((item) => item.id === school.id);
      if (index !== -1) {
        this.schools[index] = school;
      }
    },

    deleteSchool(school: School): void {
      this.schools = this.schools.filter((item) => item.id !== school.id);
    },

    async create(payload: School): Promise<void> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.SCHOOLS.CREATE, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();
        const { school } = data;
        this.addSchool(school);
      } catch (error) {
        console.error("Error School in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async read(): Promise<void> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.SCHOOLS.READ);
        const data = await response.json();
        const { schools } = data;
        this.setSchools(schools);
      } catch (error) {
        console.error("Error School in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },

    async update(payload: School): Promise<void> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.SCHOOLS.UPDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { school } = data;
        this.updateSchool(school);
      } catch (error) {
        console.error("Error School in:", error);
        throw error;
      } finally {
        this.isLoading = false;
      }
    },
  },

  getters: {
    getSchools(): School[] {
      return this.schools;
    },
  },
});
