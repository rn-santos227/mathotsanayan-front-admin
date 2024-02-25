import Module from "@/types/Module";
import Question from "@/types/Question";
import api from "@/helpers/api";

import { defineStore } from "pinia";
import { authenticatedFetch } from "@/services/api";

export const useQuestionsModule = defineStore("questions", {
  state: () => ({
    questions: [] as Question[],
    isLoading: false,
    isTableLoading: false,
  }),

  actions: {
    setQuestions(questions: Question[]): void {
      this.questions = questions;
    },

    addQuestion(question: Question): void {
      this.questions.push(question);
    },

    updateQuestion(question: Question): void {
      const index = this.questions.findIndex((item) => item.id === question.id);
      if (index !== -1) {
        this.questions[index] = question;
      }
    },

    deleteQuestion(question: Question): void {
      this.questions = this.questions.filter((item) => item.id !== question.id);
    },

    async read(id: number) {
      try {
        this.isLoading = true;
        const response = await authenticatedFetch(`${api.QUESTIONS.READ}${id}`);
        const data = await response.json();
        const { questions } = data;
        this.setQuestions(questions);
        return true;
      } catch (error) {
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
      }
    },

    async createAll(payload: Question[], module: Module): Promise<void> {
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

          item.corrects.forEach((correct) => {
            correct.has_file = 1;
            const correct_file = correct.file;
            if (correct_file) {
              formData.append("correct_files[]", correct_file);
            }
          });

          if (item.type != "word problem") {
            item.options.forEach((option) => {
              option.has_file = 1;
              const option_file = option.file;
              if (option_file) {
                formData.append("option_files[]", option_file);
              }
            });
          }
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
        this.setQuestions(questions);
      } catch (error) {
        console.error("Error Question in:", error);
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
        question.trigger = true;
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

    async removeImage(payload: Question): Promise<Question | null> {
      try {
        this.isLoading = true;
        this.isTableLoading = true;
        const response = await authenticatedFetch(
          `${api.QUESTIONS.REMOVEIMG}${payload.id}`,
          {
            method: "PATCH",
          }
        );
        const data = await response.json();
        const { question } = data;
        question.trigger = true;
        return question;
      } catch (error) {
        console.error("Error Question in:", error);
        return null;
      } finally {
        this.isLoading = false;
        this.isTableLoading = false;
      }
    },
  },

  getters: {
    getQuestions(): Question[] {
      return this.questions;
    },
  },
});
