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
    async createAll(payload: Question[], module: Module) {
      try {
        this.isLoading = true;
        const formData = new FormData();
        formData.append("module", JSON.stringify(module));
        formData.append("questions", JSON.stringify(payload));
        for (let index_0 = 0; index_0 < payload.length; index_0++) {
          const question_file = payload[index_0].file;
          if (question_file) {
            formData.append(`question-file-${index_0}`, question_file);
          }
        }
        const response = await authenticatedFetch(
          `${api.QUESTIONS.CREATEALL}${module.id}`,
          {
            method: "POST",
            body: formData,
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
