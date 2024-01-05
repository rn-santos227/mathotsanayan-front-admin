import Result from "@/types/Result";
import Search from "@/interfaces/Search";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useResultModule = defineStore("result", {
  state: () => ({
    results: [] as Result[],
    isLoading: false,
    isTableLoading: false,
    currentPage: 1,
    totalPages: 0,
    itemsPerPage: 10,
  }),

  actions: {
    setResults(results: Result[]) {
      this.results = results;
    },

    deleteResult(result: Result): void {
      this.results = this.results.filter((item) => item.id !== result.id);
    },

    async read(page = 1): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.RESULTS.READ}?page=${page}`
        );
        const res = await response.json();
        const { data, current_page, last_page, total } = res.results;
        this.totalPages = last_page;
        this.currentPage = current_page;
        this.itemsPerPage = total;
        this.setResults(data);
        return true;
      } catch (error) {
        console.error("Error Results in:", error);
        return false;
      } finally {
        this.isTableLoading = false;
      }
    },

    async search(payload: Search): Promise<boolean> {
      try {
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.RESULTS.SEARCH}?category=${payload.category}&search=${payload.search}`
        );
        const data = await response.json();
        const { results } = data;

        this.currentPage = 1;
        this.itemsPerPage = 1;
        this.itemsPerPage = results.length;
        this.setResults(results);
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
