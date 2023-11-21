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
        payload.forEach((item) => {
          const file = item.file;
          if (file) {
            formData.append("question_files", file);
          }
        });
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

    async update(payload: Question): Promise<Question | null> {
      try {
        this.isLoading = true;
        const formData = new FormData();
        const file = payload.file;

        formData.append("question", JSON.stringify(payload));
        if (file) {
          formData.append("question_file", file);
        }

        const response = await authenticatedFetch(
          `${api.QUESTIONS.UPDATE}${payload.id}`,
          {
            method: "UPDATE",
            body: formData,
          }
        );

        const data = await response.json();
        const { question } = data;
        return question;
      } catch (error) {
        console.error("Error Teacher in:", error);
        return null;
      } finally {
        this.isLoading = false;
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
        console.error("Error Teacher in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
