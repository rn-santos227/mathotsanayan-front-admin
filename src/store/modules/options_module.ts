import Question from "@/types/Question";
import Option from "@/types/Option";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useOptionModule = defineStore("options", {
  state: () => ({
    isLoading: false as boolean,
    isTableLoading: false,
  }),

  actions: {
    async create(
      payload: Option,
      question: Question
    ): Promise<Option[] | null> {
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
          `${api.OPTIONS.CREATE}${question.id}`,
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        const { options } = data;
        return options;
      } catch (error) {
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },

    async update(payload: Option): Promise<Option[] | null> {
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
        const { options } = data;
        return options;
      } catch (error) {
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
        this.isTableLoading = false;
      }
    },

    async delete(payload: Option): Promise<Option[] | null> {
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
        const { options } = data;
        return options;
      } catch (error) {
        console.error("Error Option in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
