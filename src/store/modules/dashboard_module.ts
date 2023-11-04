import { defineStore } from "pinia";

export const useQuestionModule = defineStore("dashboard", {
  state: () => ({
    isLoading: false as boolean,
    isTableLoading: false,
  }),
});
