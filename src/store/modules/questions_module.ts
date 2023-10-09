import Module from "@/types/Module";
import Question from "@/types/Question";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useQuestionModule = defineStore("questions", {
  state: () => ({
    isLoading: false as boolean,
    isTableLoading: false,
  }),

  actions: {
    async createAll(
      payload: Question[],
      module: Module
    ): Promise<Question[] | null> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.QUESTIONS.CREATEALL}${module.id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              questions: payload,
              module: module,
            }),
          }
        );
        const data = await response.json();
        const { questions } = data;
        return questions;
      } catch (error) {
        console.error("Error Module in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
