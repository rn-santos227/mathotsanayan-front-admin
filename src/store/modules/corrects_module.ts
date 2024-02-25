import Question from "@/types/Question";
import Correct from "@/types/Correct";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useCorrectsModule = defineStore("corrects", {
  state: () => ({
    isLoading: false as boolean,
    isTableLoading: false,
  }),

  actions: {
    async create(payload: Correct, id: number): Promise<Question | null> {
      try {
        this.isLoading = true;
        this.isTableLoading = true;
        const formData = new FormData();
        formData.append("correct", JSON.stringify(payload));
        const file = payload.file;
        if (file) {
          formData.append("correct_file", file);
        }

        const response = await authenticatedFetch(
          `${api.CORRECTS.CREATE}${id}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        const { question } = data;
        return question;
      } catch (error) {
        console.error("Error Correct in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },

    async update(payload: Correct): Promise<Question | null> {
      try {
        this.isLoading = true;
        this.isTableLoading = true;
        const formData = new FormData();
        formData.append("correct", JSON.stringify(payload));
        const file = payload.file;
        if (file) {
          formData.append("correct_file", file);
        }

        const response = await authenticatedFetch(
          `${api.CORRECTS.UPDATE}${payload.id}`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        const { question } = data;
        return question;
      } catch (error) {
        console.error("Error Correct in:", error);
        return null;
      } finally {
        this.isLoading = false;
        this.isTableLoading = false;
      }
    },

    async delete(payload: Correct): Promise<Question | null> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.CORRECTS.DELETE}${payload.id}`,
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
        console.error("Error Correct in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
