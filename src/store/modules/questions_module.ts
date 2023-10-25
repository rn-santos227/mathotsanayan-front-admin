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
    async createAll(questions: Question[], module: Module) {
      try {
        this.isLoading = true;
        const formData = new FormData();
        formData.append("module", JSON.stringify(module));
        formData.append("questions", JSON.stringify(questions));
        for (let index_0 = 0; index_0 < questions.length; index_0++) {
          questions[index_0].file.forEach((content) => {
            formData.append(`question_file_${index_0}`, content);
          });
        }
        console.log(formData);

        // const response = await authenticatedFetch(
        //   `${api.QUESTIONS.CREATEALL}${module.id}`,
        //   {
        //     method: "POST",
        //     body: formData,
        //   }
        // );
        // const data = await response.json();
        // const { questions } = data;
        // return questions;
      } catch (error) {
        console.error("Error Module in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
