import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useDasboardModule = defineStore("dashboard", {
  state: () => ({
    isLoading: false as boolean,
  }),

  actions: {
    async read() {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.DASHBOARD.READ);
        const data = await response.json();
        const { dashboard } = data;
        console.log(dashboard);
      } catch (error) {
        console.error("Error Course in:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
