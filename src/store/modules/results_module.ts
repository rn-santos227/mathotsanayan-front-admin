import Result from "@/types/Result";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useResultModule = defineStore("result", {
  state: () => ({
    results: [] as Result[],
    isLoading: false,
    isTableLoading: false,
    total: 0,
  }),

  actions: {
    setResults(results: Result[]) {
      this.results = results;
    },

    deleteResult(result: Result): void {
      this.results = this.results.filter((item) => item.id !== result.id);
    },

    async read(page?: number): Promise<boolean> {
      const pageNumber = page || 1;
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.RESULTS.READ}?page=${pageNumber}`
        );
        const res = await response.json();
        const { data, total } = res.results;
        this.setResults(data);
        this.total = total;
        return true;
      } catch (error) {
        console.error("Error Results in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async delete(payload: Result): Promise<boolean> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.RESULTS.INVALIDATE}${payload.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { result } = data;
        this.deleteResult(result);
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
    getResults(): Result[] {
      return this.results;
    },
  },
});
