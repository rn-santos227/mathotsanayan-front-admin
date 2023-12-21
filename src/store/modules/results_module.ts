import Result from "@/types/Result";
import { defineStore } from "pinia";

export const useResultModule = defineStore("result", {
  state: () => ({
    results: [] as Result[],
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setResults(results: Result[]) {
      this.results = results;
    },
  },

  getters: {
    getResults(): Result[] {
      return this.results;
    },
  },
});
