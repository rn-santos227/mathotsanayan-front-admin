import School from "@/types/School";
import { defineStore } from "pinia";

export const useSchoolModule = defineStore("schools", {
  state: () => ({
    schools: [] as School[],
    isLoading: false as boolean,
  }),

  actions: {
    setSchools(schools: School[]) {
      this.schools = schools;
    },

    addSchool(school: School) {
      this.schools.push(school);
    },

    updateSchool(school: School) {
      const index = this.schools.findIndex((item) => item.id === school.id);
      if (index !== -1) {
        this.schools[index] = school;
      }
    },

    deleteSchool(school: School) {
      this.schools = this.schools.filter((item) => item.id !== school.id);
    },
  },

  getters: {
    getSchools(): School[] {
      return this.schools;
    },
  },
});
