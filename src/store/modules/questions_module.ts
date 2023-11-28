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
        formData.append("module", JSON.stringify(module.id));
        formData.append("subject", JSON.stringify(module.subject));
        payload.forEach((item) => {
          const file = item.file;
          item.has_file = 1;
          if (file) {
            formData.append("question_files[]", file);
          }

          item.options.forEach((option) => {
            option.has_file = 1;
            const option_file = option.file;
            if (option_file) {
              formData.append("option_files[]", option_file);
            }
          });

          item.corrects.forEach((correct) => {
            correct.has_file = 1;
            const correct_file = correct.file;
            if (correct_file) {
              formData.append("correct_files[]", correct_file);
            }
          });
        });
        formData.append("questions", JSON.stringify(payload));
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
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },

    async update(payload: Question): Promise<Question | null> {
      try {
        this.isLoading = true;
        this.isTableLoading = true;
        const formData = new FormData();
        formData.append("question", JSON.stringify(payload));
        const file = payload.file;
        if (file) {
          formData.append("question_file", file);
        }

        const response = await authenticatedFetch(
          `${api.QUESTIONS.UPDATE}${payload.id}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        const { question } = data;
        return question;
      } catch (error) {
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
        this.isTableLoading = false;
      }
    },

    async delete(payload: Question): Promise<Question | null> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.QUESTIONS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { question } = data;
        return question;
      } catch (error) {
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
