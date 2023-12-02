import Answer from "@/types/Answer";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useTestModule = defineStore("test", {
  state: () => ({
    isLoading: false as boolean,
  }),

  actions: {
    async submit(payload: Answer) {
      //
    },
  },
});
