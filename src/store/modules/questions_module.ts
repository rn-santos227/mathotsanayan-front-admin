import { defineStore } from "pinia";

export const useCourseModule = defineStore("courses", {
  state: () => ({
    isLoading: false as boolean,
    isTableLoading: false,
  }),
});
