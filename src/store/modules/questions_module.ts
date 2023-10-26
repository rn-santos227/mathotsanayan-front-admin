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
          payload[index_0].file.forEach((content) => {
            formData.append(`question_file_${index_0}`, content);
          });

          for (
            let index_1 = 0;
            index_1 < payload[index_0].options.length;
            index_1++
          ) {
            payload[index_0].options[index_1].file.forEach((content) => {
              formData.append(
                `${index_1}_option_${index_0}_question_file`,
                content
              );
            });
          }

          for (
            let index_2 = 0;
            index_2 < payload[index_0].options.length;
            index_2++
          ) {
            payload[index_0].solutions[index_2].file.forEach((content) => {
              formData.append(
                `${index_2}_solution_${index_0}_question_file`,
                content
              );
            });
          }
        }
        console.log(formData);

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
