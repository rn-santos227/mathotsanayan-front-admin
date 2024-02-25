import Question from "@/types/Question";
import Option from "@/types/Option";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useOptionsModule = defineStore("options", {
  state: () => ({
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    async create(payload: Option, id: number): Promise<Question | null> {
      try {
        this.isLoading = true;
        this.isTableLoading = true;
        const formData = new FormData();
        formData.append("option", JSON.stringify(payload));
        const file = payload.file;
        if (file) {
          formData.append("option_file", file);
        }

        const response = await authenticatedFetch(
          `${api.OPTIONS.CREATE}${id}`,
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
      }
    },

    async update(payload: Option): Promise<Question[]> {
      try {
        this.isLoading = true;
        this.isTableLoading = true;
        const formData = new FormData();
        formData.append("option", JSON.stringify(payload));
        const file = payload.file;
        if (file) {
          formData.append("option_file", file);
        }

        const response = await authenticatedFetch(
          `${api.OPTIONS.UPDATE}${payload.id}`,
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
        return [];
      } finally {
        this.isLoading = false;
        this.isTableLoading = false;
      }
    },

    async delete(payload: Option): Promise<Question[]> {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(
          `${api.OPTIONS.DELETE}${payload.id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        const data = await response.json();
        const { questions } = data;
        return questions;
      } catch (error) {
        console.error("Error Option in:", error);
        return [];
      } finally {
        this.isLoading = false;
      }
    },
  },
});
