import Answer from "@/types/Answer";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useTestModule = defineStore("test", {
  state: () => ({
    isLoading: false as boolean,
  }),

  actions: {
    async submit(payload: Answer) {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(api.TEST.SUBMIT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } catch (error) {
        console.error("Error Test in:", error);
        return false;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
