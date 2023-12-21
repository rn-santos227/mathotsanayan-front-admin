import Result from "@/types/Result";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

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

    async read(): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(api.RESULTS.READ);
        const data = await response.json();
        const { results } = data;
        this.setResults(results);
        return true;
      } catch (error) {
        console.error("Error Results in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getResults(): Result[] {
      return this.results;
    },
  },
});
